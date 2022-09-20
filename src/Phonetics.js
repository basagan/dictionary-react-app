import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics d-inline-flex">
      {props.phonetics.map(function (phonetic, index) {
        return (
          <div key={index} className="px-2">
            {phonetic.text}
            <br />
            <a href={phonetic.audio} target="_blank" rel="noreferrer">
              listen
            </a>
          </div>
        );
      })}
    </div>
  );
}
