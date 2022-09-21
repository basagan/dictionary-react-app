import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photo from "./Photo";
import "./dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.keyDefaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photo, setPhoto] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePhotoResponse(response) {
    setPhoto(response.data.photos);
  }

  function handleSubbmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);

    let pixelApiKey = `563492ad6f91700001000001da54d44c39184b57b436da50021cb940`;
    let pixelUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${pixelApiKey}` };
    axios.get(pixelUrl, { headers: headers }).then(handlePhotoResponse);
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
        <Photo photo={photo} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
