import "./App.css";
import SearchWeather from "./SearchWeather";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <SearchWeather />
      <footer>
        Built with React by Keira and open-sourced on{" "}
        <a href="https://github.com/Keira-Bee/my-react-weather">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
