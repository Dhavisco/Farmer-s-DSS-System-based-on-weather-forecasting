// 
import { useState, useEffect } from "react";
import WeatherInput from "./components/WeatherInput";
import CurrentWeather from "./components/CurrentWeather";
import WeatherChart from "./components/WeatherChart";
import { getWeatherData} from "./services/WeatherService";
import "./App.css";
import RecommendedCropsList from "./components/Recommendation/RecommendedCropsList";
import { dummyRecommendedCrops } from "./store/dummydata";

function App() {
  const [city, setCity] = useState("Lagos");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);


 useEffect(() => {
   const fetchWeatherData = async () => {

     if (city.trim() === "") {
       setWeatherData(null);
       setError(null);
       return;
     }
     
      try {
        const data = await getWeatherData(city);
        setWeatherData(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError(
          `Unable to fetch information. Please check your internet connection and reload.`
        );
        if (error.message === "Location not found") {
          setWeatherData(null)
          setError("Location not found. Please enter a valid city name.");
        }
      }
   };

   fetchWeatherData();
 }, [city]);


  return (
    <div className="min-h-screen p-8 bg-gray-100 flex items-center justify-around">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <WeatherInput city={city} setCity={setCity} />
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
        {weatherData && (
          <>
            {city && <CurrentWeather weatherData={weatherData} />}
            <WeatherChart forecast={weatherData.daily} />
          </>
        )}
      </div>

      <div className="w-3/5">
        <RecommendedCropsList recommendedCrops={dummyRecommendedCrops} />
      </div>
    </div>
  );
}

export default App;
