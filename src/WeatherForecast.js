import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tue</div>
          <WeatherIcon code="10d" width={60} height={60} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">22°</span>
            <span className="WeatherForecast-temperature-min">14°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
