import "./WeatherContainer.css";
import { useState, useEffect } from "react";
import axios from "axios";

import orderWeather from "../utils/orderWeather";

import Weather from "./Weather";
import Loading from "./Loading";

const WeatherContainer = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null);

  // api
  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=50.8503&longitude=4.3517&hourly=temperature_2m"
        );

        if (res.status === 200) {
          setWeather(res.data);
        } else {
          throw new Error(`Failer to fetch data with status: ${res.status}`);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getWeather();
  }, []);

  const orderedData = orderWeather(weather);

  return (
    <div>
      {isLoading && <Loading />}
      {error && <p>Error</p>}
      <div>
        {weather &&
          orderedData.map((day) => <Weather key={day.day} data={day} />)}
      </div>
    </div>
  );
};

export default WeatherContainer;
