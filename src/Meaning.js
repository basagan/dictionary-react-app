import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definition:</strong>
      {props.meaning.definitions[0].definition}
      <Example example={props.meaning.definitions[0].example} />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
