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

  return (
    <form id="city-form" onSubmit={handleSearch}>
      <input
        type="search"
        id="search-input"
        placeholder="Enter a city.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="submit" value="Search" className="search-btn" />
      {message && <p>{message}</p>}
      {city && <Weather city={city} />}
    </form>
  );
}
