import React from "react";
import "./styles.css";

const ResultsList = ({ results = [] }) => {
  return (
    <div className="grid-container">
      {results.map((result, index) => (
        <div className="card" key={index}>
          <img
            src={result?.avatar_url}
            alt="avatar"
            width={100}
            height={100}
            className="avatar"
          />
          <p>{result?.login}</p>
        </div>
      ))}
    </div>
  );
};
export default ResultsList;
