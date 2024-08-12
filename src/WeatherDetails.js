import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <h1>{props.data.city}</h1>
      <ul>
        {/* <li>
          <span className="temperature">{Math.round(props.temperature)}</span>
          <span className="unit">°C</span>
        </li> */}
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">
          Description: {props.data.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={30} />
            </div>
            <div>{/* WeatherTemperature */}</div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind speed: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
