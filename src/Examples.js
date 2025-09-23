import React from "react";
import "./Extras.css";

export default function Examples(props) {
  if (props.examples) {
    return (
      <div className="extras">
        <strong>Example:</strong> {props.examples}
      </div>
    );
  } else {
    return null;
  }
}
