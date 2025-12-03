import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Forecast({ city }) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (city) {
      const apiKey = "a723fd412o41a9d1a23tfcb7443f0307";
      const url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;

      axios.get(url).then((response) => {
        setForecast(response.data.daily.slice(0, 6));
      });
    }
  }, [city]);

  if (!forecast || forecast.length === 0) {
    return null;
  }

  return (
    <div className="forecast-block">
      <ul className="forecast-list">
        {forecast.map((day, index) => {
          const date = new Date(day.time * 1000);
          const weekdays = [
            "Sun",
            "Mon",
            "Tues",
            "Weds",
            "Thurs",
            "Fri",
            "Sat",
          ];
          const weekday = weekdays[date.getDay()];

          return (
            <li key={index} className="forecast-item">
              {weekday} <br />
              <img
                src={day.condition.icon_url}
                alt={day.condition.description}
                width="40"
              />
              <br />
              <strong>{Math.round(day.temperature.minimum)}°F</strong> /{" "}
              {Math.round(day.temperature.maximum)}°F
            </li>
          );
        })}
      </ul>
    </div>
  );
}
