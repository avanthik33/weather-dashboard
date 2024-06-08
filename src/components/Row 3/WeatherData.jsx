import React, { useState, useEffect } from "react";

const weatherData = [
  { day: "Friday, 1 Sep", temp: "20°C", icon: "🌤️" },
  { day: "Saturday, 2 Sep", temp: "22°C", icon: "🌤️" },
  { day: "Sunday, 3 Sep", temp: "27°C", icon: "☀️" },
  { day: "Monday, 4 Sep", temp: "18°C", icon: "🌦️" },
  { day: "Tuesday, 5 Sep", temp: "16°C", icon: "🌧️" },
];

const WeatherData = () => {
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fontSizeMultiplier = containerWidth > 400 ? 0.02 : 0.03; // Adjust the multiplier as needed

  return (
    <div
      style={{
        ...styles.container,
        fontSize: fontSizeMultiplier * containerWidth,
      }}
    >
      <h2 style={styles.title}>5 Days Forecast:</h2>
      <div style={styles.weatherContent}>
        {weatherData.map((weather, index) => (
          <div key={index} style={styles.weatherRow}>
            <span style={styles.icon}>{weather.icon}</span>
            <span style={styles.temp}>{weather.temp}</span>
            <span style={styles.day}>{weather.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%", // Adjusted for responsiveness
    maxWidth: "400px", // Maximum width for larger screens
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(5px)",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9), 0 6px 20px rgba(0, 0, 0, 0.6)", // Improved box shadow
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    margin: "0 auto", // Centering the container
  },
  title: {
    textAlign: "center",
    margin: "0 0 20px 0",
    fontSize: "20px",
    fontWeight: "bold",
  },
  weatherContent: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "200px", // Adjust the maximum height as needed
    overflowY: "auto", // Enable scrolling if content exceeds the maximum height
  },
  weatherRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "10px 0",
  },
  icon: {
    fontSize: "3vw", // Relative sizing for responsiveness
  },
  temp: {
    fontSize: "2vw", // Relative sizing for responsiveness
    fontWeight: "bold",
  },
  day: {
    fontSize: "1.5vw", // Relative sizing for responsiveness
    color: "#fff",
  },
};

export default WeatherData;
