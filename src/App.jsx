

import { useState, useEffect } from "react";
import {
  getWeatherData,
  getWeatherForecastData,
  getRecommendedCropsData,
  getUserIp,
} from "./services/WeatherService";
import "./App.css";
import Loading from "./components/Loading";
import Nav from "./layout/Nav";
import MainContent from "./components/MainContent";
import { RxAvatar } from "react-icons/rx";
import Icon from "./components/Icon";
import { useStore } from "./store/store";

function App() {
  const { setLon, setLat, setUserCity, userCity } = useStore((state) => ({
    setLon: state.setLon,
    setLat: state.setLat,
    setUserCity: state.setUserCity,
    userCity: state.userCity,
  }));

  const [city, setCity] = useState(userCity);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [forecastData, setForecastData] = useState(null);
  const [cropData, setCropData] = useState(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const fetchIPData = async () => {
      try {
        const Ipdata = await getUserIp();
        setLon(Ipdata.longitude);
        setLat(Ipdata.latitude);
        setUserCity(Ipdata.city);
        setCity(Ipdata.city); // Set city to IP city

      

        
      } catch (error) {
        console.log(error);
        setError(
          `Unable to fetch information. Please check your internet connection and reload.`
        );
      }
    };

    fetchIPData();
  }, [setLon, setLat, setUserCity]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!city || city.length <= 2 || city === "") {
        setWeatherData(null);
        setError("Please enter a valid city name.");
        setForecastData(null);
        setCropData(null);
        setLoading(false); // Stop loading if the city is invalid to display error
        return;
      }

      try {
        const data = await getWeatherData(city);
        const forecasts = await getWeatherForecastData(city);
        const plant = await getRecommendedCropsData(city);
          
        setWeatherData(data.data);
        setForecastData(forecasts.data.daily);
        setCropData(plant.recommended_crops);
        setError(null);
      } catch (error) {
        console.log(error);
        setError(
          `Unable to fetch information. Please check your internet connection and reload.`
        );
        if (error.message) {
          setWeatherData(null);
          setForecastData(null);
          setCropData(null);
          setError(
            " Unable to fetch Information. Please make sure you are connected to the internet, enter a valid city name and reload."
          );
        }
      }
      setLoading(false); // Stop loading after the fetch is complete
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className={`flex lg:flex-row flex-col gap-4 ${loading ? "" : "fade-in"}`}
    >
      <div className="lg:hidden flex justify-between items-center border-b-2 border-solid border-[#696969ea] fixed p-3 w-full z-30 bg-gray-200 text-lg font-semibold">
        <Icon />
        <div>
          <RxAvatar className="w-[2.5rem] h-[2.5rem] text-green-700" />
        </div>
      </div>
      <nav className="fixed w-[20%] z-30 hidden lg:block md:block">
        <Nav active={active} setActive={setActive} />
      </nav>
      <MainContent
        active={active}
        city={city}
        setCity={setCity}
        weatherData={weatherData}
        forecastData={forecastData}
        cropData={cropData}
        error={error}
      />
      <nav className="fixed bottom-0 w-full lg:hidden z-30 bg-[#f3f2f2] px-12 border-solid border-[#4e4d4d] border-t-2 rounded-3xl">
        <Nav active={active} setActive={setActive} />
      </nav>
    </div>
  );
}

export default App;

