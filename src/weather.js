import React, { useState, useEffect } from "react";
import axios from "axios";
import Forecast from "./forecast";

export default function Weather({ city }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (city) {
      const apiKey = "a723fd412o41a9d1a23tfcb7443f0307";
      const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
      axios.get(url).then((response) => {
        setData(response.data);
      });
    }
  }, [city]);

  if (!data) {
    return <p>Loading weather...</p>;
  }

  // Clock logic inside Weather
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[now.getDay()];
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const currentTime = `${day} ${hours}:${minutes}`;

  return (
    <div className="weather-container">
      <h2 id="current-city">{data.city}</h2>
      <div className="date-container">
        <p>
          <span id="time-update">{currentTime}</span>{" "}
          {data.condition.description}
          <br />
          Humidity:{" "}
          <strong className="main-weather">{data.temperature.humidity}%</strong>
          , Wind:{" "}
          <strong className="main-weather">{data.wind.speed} mph</strong>
        </p>
      </div>
      <span className="main-temp">
        <span className="sunshine">☀️</span>
        <span id="city-current-temp">
          {Math.round(data.temperature.current)}
        </span>
        <sup id="little-celcius">°F</sup>
      </span>
      <Forecast city={city} />
    </div>
  );
}
