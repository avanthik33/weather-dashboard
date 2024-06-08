import React from "react";

const weatherData = [
  { day: "Friday, 1 Sep", temp: "20°C", icon: "🌤️" },
  { day: "Saturday, 2 Sep", temp: "22°C", icon: "🌤️" },
  { day: "Sunday, 3 Sep", temp: "27°C", icon: "☀️" },
  { day: "Monday, 4 Sep", temp: "18°C", icon: "🌦️" },
  { day: "Tuesday, 5 Sep", temp: "16°C", icon: "🌧️" },
];

const WeatherData = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>5 Days Forecast:</h2>
      {weatherData.map((weather, index) => (
        <div key={index} style={styles.weatherRow}>
          <span style={styles.icon}>{weather.icon}</span>
          <span style={styles.temp}>{weather.temp}</span>
          <span style={styles.day}>{weather.day}</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: "250px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    margin: "0 0 20px 0",
    fontSize: "20px",
    fontWeight: "bold",
  },
  weatherRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "10px 0",
  },
  icon: {
    fontSize: "24px",
  },
  temp: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  day: {
    fontSize: "16px",
    color: "#555",
  },
};

export default WeatherData;
