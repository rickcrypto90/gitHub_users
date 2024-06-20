import React, { useCallback } from "react";
import "./styles.css";

const CenteredInput = ({
  query = "",
  onInputChange = () => {},
  onInputSubmit = () => {},
}) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onInputSubmit();
      }
    },
    [onInputSubmit]
  );

  return (
    <form className="input-container">
      <input
        className="input"
        type="text"
        value={query}
        onChange={onInputChange}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
};

export default CenteredInput;
