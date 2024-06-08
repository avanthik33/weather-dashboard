import axios from "axios";
import React, { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "../components/Header";
import DateAndTime from "../components/Row 2/DateAndTime";
import MainInfo from "../components/Row 2/MainInfo";
import WeatherData from "../components/Row 3/WeatherData";

const DashBoard = () => {
  const { loading, data, fetchData } = useFetchData();

  return (
    <>
      <div className="container-fluid" style={containerStyle}>
        {loading && (
          <center>
            <CircularProgress />
          </center>
        )}
        <div className="header">
          <Header />
        </div>
        <div className="row mt-4 g-3">
          <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <DateAndTime city="New York" />
          </div>
          <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <MainInfo />
          </div>
        </div>
        <div className="row mt-4 g-3">
          <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <WeatherData />
          </div>

          <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
        
          </div>
        </div>
      </div>
    </>
  );
};
const containerStyle = {
  backgroundImage:
    'url("https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg")',
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "50px",
};
export default DashBoard;
