import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "43465c40f4c5d3a735b5b8tbed06aoae";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form
        onSubmit={search}
        className="row d-flex justify-content-center m-5 gap-3"
      >
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Enter a word..."
          className="col-6 search-input"
        />
        <input type="submit" value="Search" className="col-2 submit-input" />
      </form>
      <Results results={results} />
    </div>
  );
}
