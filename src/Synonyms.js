import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms ">
        <strong>Synonyms:</strong>
        <ul className="d-inline-flex justify-content-between">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index} className="">
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
