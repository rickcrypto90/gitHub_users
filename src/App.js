import React, { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { CenteredInput, ResultsList } from "./components";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = useCallback(
    (e) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  const handleInputSubmit = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      const responseJson = await response.json();
      setResults(responseJson.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [query]);

  const handleGetUsers = useCallback(async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      const responseJson = await response.json();
      setResults(responseJson);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (!results.length) {
        try {
          await handleGetUsers();
        } catch (error) {
          console.error("Error:", error);
        }
      } else {
        if (!query) {
          await handleGetUsers();
        }
      }
    })();
  }, [query]);

  return (
    <div className="container">
      <CenteredInput
        query={query}
        onInputChange={handleInputChange}
        onInputSubmit={handleInputSubmit}
      />

      <ResultsList results={results} />
    </div>
  );
};

export default App;
