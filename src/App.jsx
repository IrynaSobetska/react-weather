import "./App.css";

import Title from "./components/Title";
import WeatherContainer from "./components/WeatherContainer";

function App() {
  return (
    <div className="weather">
      <Title />
      <WeatherContainer />
    </div>
  );
}

export default App;
