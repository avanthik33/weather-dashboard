import React, { useState } from "react";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const [inputCity,setInputCity]=useState("")

  const inputStyle = {
    width: "100%",
    maxWidth: "400px",
    padding: "10px 15px",
    margin: "10px 0",
    border: `2px solid ${isFocused ? "#007BFF" : "#ccc"}`,
    borderRadius: "30px",
    fontSize: "16px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "border-color 0.3s ease",
    outline: "none",
  };
  return (
    <input
      type="text"
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={inputCity}
      onChange={(event) => setInputCity(event.target.value)}
      placeholder="Search for your preferred city..."
      style={inputStyle}
    />
  );
};

export default Search;
