import React from "react";

const SelectUser = () => {
  
  
  return (
    <div className="select" style={{ display: "inline-block" }}>
      <select name="" id="" className="form-control" style={selectStyle}>
        <option value="">Select User</option>
        <option value="">🎉 Event Planner</option>
        <option value="">🌾 Farmer</option>
        <option value="">✈️ Traveler</option>
      </select>
    </div>
  );
};

const selectStyle = {
  width: "140px",
  padding: "10px",
  border: "2px solid #007BFF",
  fontSize: "16px",
  backgroundColor: "#f8f9fa", // Change this to the desired color
  color: "#007BFF",
  appearance: "none",
  outline: "none",
  cursor: "pointer",
  textAlign: "center",
};



export default SelectUser;
