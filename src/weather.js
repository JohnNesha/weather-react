import React, { useState, useEffect } from "react";
import axios from "axios";

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

  if (data) {
    return <p>Loading weather....</p>;
  }

  return (
    <div className="weather-container">
      <h2>{data.city}</h2>
      <p>
        {data.condition.description} <br />
        Humidity: <strong>{data.temperature.humidity}%</strong>, Wind:{" "}
        <strong>{data.wind.speed} mph</strong>
      </p>
      <span className="main-temp">
        <span className="sunshine">☀️</span>
        <span>{Math.round(data.temperature.current)}</span>
        <sup>°F</sup>
      </span>
    </div>
  );
}
