import { useEffect, useState } from "react";
import { apiKey, baseUrl } from "./utils/apiInfo";
import SearchBar from "./components/SearchBar";
import WelcomeScreen from "./components/WelcomeScreen";
import WeatherInfo from "./components/WeatherInfo";
import LoadingScreen from "./components/LoadingScreen";
import ErrorScreen from "./components/ErrorScreen";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cityName, setCityName] = useState("");

  const url = `${baseUrl}/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  const searchApi = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setIsLoading(false);
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getWeatherData = (e) => {
    e.preventDefault();
    searchApi();
    setCityName("");
  };

  return (
    <div className="w-screen h-screen bg-gray-300 flex justify-center items-center">
      <div className="drop-shadow-2xl rounded-xl bg-gray-300 w-1/3 h-2/3">
        <div className="flex justify-center items-center mt-7">
          <SearchBar
            cityName={cityName}
            setCityName={setCityName}
            getWeatherData={getWeatherData}
          />
        </div>
        {isLoading ? (
          <LoadingScreen />
        ) : weatherData?.name ? (
          <WeatherInfo weatherData={weatherData} />
        ) : weatherData?.cod === "404" ? (
          <ErrorScreen weatherData={weatherData} />
        ) : (
          <WelcomeScreen />
        )}
      </div>
    </div>
  );
}

export default App;
