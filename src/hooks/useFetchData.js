import axios from "axios";
import React, { useState } from "react";

const useFetchData = (cityName) => {
  const api_key = "40988073e7cb473e93a32d0e42befff8";
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`
        )
        .then((res) => {
          setData(res.data);
        });
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, fetchData, data };
};

export default useFetchData;
