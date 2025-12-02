import React, { useState } from "react";
import Weather from "./weather";

export default function Search() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState(null);
  const [message, setMessage] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    if (query.trim().length > 0) {
      setCity(query);
      setMessage("");
    } else {
      setMessage("Please enter a city");
    }
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Enter a city"
          onChange={updateQuery}
        />
        <input type="submit" value="Search" />
      </form>
      {message && <p>{message}</p>}
      {city && <Weather city={city} />}
    </div>
  );
}
