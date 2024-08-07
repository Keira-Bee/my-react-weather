import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";
import "./SearchWeather.css";

export default function SearchWeather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "64469ac67e6dc941feb5b50915a18dc7";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
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

  if (weather.ready) {
    return (
      <div className="displayedWeather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="formControl"
                type="search"
                placeholder="Search for a city"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherDetails data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
