import React, { useEffect, useState } from "react";

const DateAndTime = ({ city }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  city = city.toUpperCase();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeString = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateString = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  return (
    <div style={cardStyle}>
      <div style={cityStyle}>{city}</div>
      <div style={timeStyle}>{timeString}</div>
      <div style={dateStyle}>{dateString}</div>
    </div>
  );
};
const cardStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(5px)",
  borderRadius: "20px",
  padding: "40px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9), 0 6px 20px rgba(0, 0, 0, 0.6)", // Improved box shadow
  maxWidth: "600px",
  margin: "auto",
  height: "300px",
};

const cityStyle = {
  fontSize: "3vw",
  fontWeight: "bold",
  marginBottom: "10px",
};

const timeStyle = {
  fontSize: "5vw",
  fontWeight: "bold",
  marginBottom: "5px",
};

const dateStyle = {
  fontSize: "1vw",
  color: "#555",
};

export default DateAndTime;
