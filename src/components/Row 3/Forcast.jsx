import React from "react";

const Forecast = () => {
  const forecasts = [
    { time: "12:00", temperature: 26, icon: "☀️", wind: 3 },
    { time: "15:00", temperature: 27, icon: "☀️", wind: 2 },
    { time: "18:00", temperature: 27, icon: "🌤️", wind: 2 },
    { time: "21:00", temperature: 25, icon: "🌥️", wind: 3 },
    { time: "00:00", temperature: 22, icon: "☀️", wind: 3 },
  ];

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9), 0 6px 20px rgba(0, 0, 0, 0.6)",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(5px)",
    borderRadius: "10px",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const itemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    borderRadius: "10px",
    margin: "5px",
    width: "80px",
    height: "120px",
  };

  const iconStyle = {
    fontSize: "24px",
    marginBottom: "5px",
  };

  const windStyle = {
    fontSize: "12px",
    color: "#555",
  };

  const getBackgroundColorForItem = (index) => {
    const colors = ["#FFD54F", "#FFD54F", "#B0E0E6", "#ADD8E6", "#98FB98"];
    return colors[index];
  };

  return (
    <div style={containerStyle}>
      <div className="header">
        <h2>Hourly Forecast:</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {forecasts.map((forecast, index) => (
          <div
            key={index}
            style={{
              ...itemStyle,
              backgroundColor: getBackgroundColorForItem(index),
            }}
          >
            <span style={iconStyle}>{forecast.icon}</span>
            <span style={{ fontWeight: "bold" }}>
              {forecast.temperature}&deg;C
            </span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={windStyle}>{forecast.wind} km/h</span>
              <div
                style={{
                  width: "0",
                  height: "0",
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                  borderLeft: `5px solid currentColor`,
                  marginLeft: "5px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
