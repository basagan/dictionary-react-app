import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h4>{props.meaning.partOfSpeech}</h4>
        <div className="my-3">
          <strong>Definition: </strong>
          <h4>{props.meaning.definitions[0].definition}</h4>
        </div>
        <Example example={props.meaning.definitions[0].example} />
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
