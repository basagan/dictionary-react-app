import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.keyDefaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleSubbmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1 className="mb-4">Dictionary App 📚</h1>
          <form onSubmit={handleSubbmit}>
            <input
              type="search"
              onChange={handleKeyword}
              placeholder="What word do you want to look up? 🔎"
            />
          </form>
          <p>suggested words: sunset, forest, happy, planet ...</p>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
