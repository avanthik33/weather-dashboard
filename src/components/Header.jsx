import React from "react";
import SelectUser from "./SelectUser"; // Import your SelectUser component
import Search from "./Search"; // Import your Search component
import CurrentLocation from "./CurrentLocation"; // Import your CurrentLocation component

const Header = () => {
  
  return (
    <div style={headerStyle}>
      <div style={leftStyle}>
        <SelectUser />
      </div>
      <div style={centerStyle}>
        <Search />
      </div>
      <div style={rightStyle}>
        <CurrentLocation />
      </div>
    </div>
  );
};
const headerStyle = {
  background: "rgba(255, 255, 255, 0.2)", // Semi-transparent white background
  backdropFilter: "blur(5px)", // Apply blur effect
  WebkitBackdropFilter: "blur(10px)", // For Safari support
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", // Optional: add a subtle shadow
  border: "1px solid rgba(255, 255, 255, 0.3)", // Optional: add a border
  borderRadius: "10px", // Optional: add rounded corners
  padding: "20px", // Add some padding
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "auto",
};

const leftStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "flex-start",
};

const centerStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
};

const rightStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
};

export default Header;
