import React, { useState } from "react";
import axios from "axios";

export default function SearchWeather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [searched, setSearched] = useState(false);

  function displayWeather(response) {
    setSearched(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "64469ac67e6dc941feb5b50915a18dc7";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  //   let form = (
  //     <div className="Form">
  //       <form onSubmit={handleSubmit}>
  //         <input
  //           type="search"
  //           placeholder="Search for a city"
  //           onChange={updateCity}
  //         />
  //         <input type="submit" value="search" />
  //       </form>
  //     </div>
  //   );

  if (searched) {
    return (
      <div>
        <div className="Form">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a city"
              onChange={updateCity}
            />
            <input type="submit" value="search" />
          </form>
        </div>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind speed: {Math.round(weather.wind)}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a city"
            onChange={updateCity}
          />
          <input type="submit" value="search" />
        </form>
      </div>
    );
    // same as return ({form})
  }
}
