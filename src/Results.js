import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Results container">
        <h2>{props.results.word}</h2>
        <h5>{props.results.phonetic}</h5>
        {props.results.meanings.map(function (meaning, index) {
          if (index < 4) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          } else {
            return null;
          }
        })}
        <div className="credits">Definitions from the SheCodes API 💜</div>
      </div>
    );
  } else {
    return null;
  }
}
