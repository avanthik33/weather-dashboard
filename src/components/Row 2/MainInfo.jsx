import React from "react";

const MainInfo = () => {
  return (
    <div style={cardStyle}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: "68px", fontWeight: "bold" }}>24°C</div>
        <img
          src="https://www.iconpacks.net/icons/2/free-sun-icon-3337-thumb.png"
          alt="Sun Icon"
          style={{ width: "64px", height: "64px", marginLeft: "16px" }}
        />
      </div>
      <div style={{ fontSize: "18px", color: "#555" }}>Feels like: 22°C</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1163/1163765.png"
            alt="Sunrise Icon"
            style={{ width: "32px", height: "32px" }}
          />
          <div>Sunrise</div>
          <div>06:37 AM</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/430/430485.png"
            alt="Sunset Icon"
            style={{ width: "32px", height: "32px" }}
          />
          <div>Sunset</div>
          <div>08:37 PM</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png"
            alt="Humidity Icon"
            style={{ width: "32px", height: "32px" }}
          />
          <div>Humidity</div>
          <div>41%</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://w7.pngwing.com/pngs/676/835/png-transparent-wind-speed-weather-forecasting-wind-text-number-anemometer-thumbnail.png"
            alt="Wind Icon"
            style={{ width: "32px", height: "32px" }}
          />
          <div>Wind Speed</div>
          <div>2 km/h</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://img.freepik.com/premium-vector/pressure-icon-vector_942802-2273.jpg"
            alt="Pressure Icon"
            style={{ width: "32px", height: "32px" }}
          />
          <div>Pressure</div>
          <div>997 hPa</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_45-512.png"
            alt="UV Icon"
            style={{ width: "32px", height: "32px" }}
          />
          <div>UV</div>
          <div>8</div>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(5px)",
  borderRadius: "10px",
  padding: "20px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9), 0 6px 20px rgba(0, 0, 0, 0.6)",
  maxWidth: "700px",
  height: "450px",
  margin: "auto",
};

export default MainInfo;
