import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phonetics.map(function (phonetic, index) {
        return (
          <div key={index}>
            <a href={phonetic.audio} target="_blank" rel="noreferrer">
              Listen
            </a>
            {phonetic.text}
          </div>
        );
      })}
    </div>
  );
}
