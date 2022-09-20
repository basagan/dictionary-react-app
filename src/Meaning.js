import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h4>{props.meaning.partOfSpeech}</h4>
        <div className="my-3">
          <strong>Definition: </strong>
          {props.meaning.definitions[0].definition}
        </div>
        <Example example={props.meaning.definitions[0].example} />
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
