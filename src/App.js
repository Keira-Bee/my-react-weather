import React from "react";
import "./App.css";
import SearchWeather from "./SearchWeather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Search Engine</h1>
        <SearchWeather defaultCity="Perth" />
        <footer>
          Built with React by Keira and open-sourced on{" "}
          <a href="https://github.com/Keira-Bee/my-react-weather">GitHub</a>
        </footer>
      </div>
    </div>
  );
}
