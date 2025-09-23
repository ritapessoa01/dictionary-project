import React from "react";
import "./Extras.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="extras">
        <strong>Synonyms:</strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index} className="synonyms">
              {" "}
              {synonym}{" "}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
