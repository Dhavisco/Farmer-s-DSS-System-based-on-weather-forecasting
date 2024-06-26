// App.js
import { useState, useEffect } from "react";
import { getWeatherData, getWeatherForecastData, getRecommendedCropsData } from "./services/WeatherService";
import "./App.css";
import Loading from "./components/Loading";
import Nav from "./layout/Nav";
import MainContent from "./components/MainContent"
import { RxAvatar } from "react-icons/rx";
import { PiPottedPlant } from "react-icons/pi";
import Icon from "./components/Icon";


function App() {
  const [city, setCity] = useState("Lagos");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [forecastData, setForecastData] = useState(null);
  const [cropData, setCropData] = useState(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    const fetchWeatherData = async () => {
      if (city.trim() === "") {
        setWeatherData(null);
        setError(null);
        setForecastData(null);
        setCropData(null);
        return;
      }

      try {
        const data = await getWeatherData(city);
        const forecasts = await getWeatherForecastData(city);
        const plant = await getRecommendedCropsData(city);
        setWeatherData(data);
        setForecastData(forecasts.data.daily);
        console.log(plant);
        setCropData(plant.recommended_crops);

        setError(null);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError(
          `Unable to fetch information. Please check your internet connection and reload.`
        );
        if (error.message === "Location not found") {
          setWeatherData(null);
          setForecastData(null);
          setCropData(null);
          setError("Location not found. Please enter a valid city name.");
        }
      }
    };

    fetchWeatherData();
    return () => clearTimeout(timer);
  }, [city]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex lg:flex-row flex-col gap-4">
      <div className="lg:hidden flex justify-between items-center border-b-2 border-solid border-[#696969ea] fixed p-3 w-full z-30 bg-gray-200 text-lg font-semibold">
       <Icon/>
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


// //
// import { useState, useEffect } from "react";
// import WeatherInput from "./components/Weather/WeatherInput";
// import CurrentWeather from "./components/Weather/CurrentWeather";
// import WeatherChart from "./components/Weather/WeatherChart";
// import {
//   getWeatherData,
//   getWeatherForecastData,
//   getRecommendedCropsData,
// } from "./services/WeatherService";
// import "./App.css";
// import RecommendedCropsList from "./components/Recommendation/RecommendedCropsList";
// // import { dummyRecommendedCrops } from "./store/dummydata";
// import Loading from "./components/Loading";
// // import Header from "./layout/Header";
// import Nav from "./layout/Nav";

// function App() {
//   const [city, setCity] = useState("Lagos");
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [forecastData, setForecastData] = useState(null);
//   const [cropData, setCropData] = useState(null);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);

//     const fetchWeatherData = async () => {
//       if (city.trim() === "") {
//         setWeatherData(null);
//         setError(null);
//         setForecastData(null);
//         setCropData(null);
//         return;
//       }

//       try {
//         const data = await getWeatherData(city);
//         const forecasts = await getWeatherForecastData(city);
//         const plant = await getRecommendedCropsData(city);
//         setWeatherData(data);
//         setForecastData(forecasts.data.daily);
//         console.log(plant);
//         setCropData(plant.recommended_crops);

//         setError(null);
//       } catch (error) {
//         console.error("Error fetching weather data:", error);
//         setError(
//           `Unable to fetch information. Please check your internet connection and reload.`
//         );
//         if (error.message === "Location not found") {
//           setWeatherData(null);
//           setForecastData(null);
//           setCropData(null);
//           setError("Location not found. Please enter a valid city name.");
//         }
//       }
//     };

//     fetchWeatherData();
//     return () => clearTimeout(timer);
//   }, [city]);

//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <div className="flex gap-4">
//       <nav className="fixed w-[20%] z-30 hidden lg:block md:block">
//         <Nav />
//       </nav>
//       <main className="container mx-8 flex justify-center items-center ml-[15%]">
//         <div className=" p-2 container mx-4">
//           <div className="flex items-center justify-center">
//             <WeatherInput city={city} setCity={setCity} />
//           </div>
//           <div className="flex items-center justify-center ">
//             <p className="mb-1 p-5 relative w-4/5 bg-[#F2FED1] border-solid border-[#000000] border-[1px] border-b-[5px] shadow-md rounded-xl">
//               Welcome to FarmersDSS! Below you'll see your Recommended crops for
//               this your city. To view more recommendations for other city,
//               simply navigate to the input above and input a city.
//             </p>
//           </div>

//           <div className="p-6 flex lg:flex-col flex-col gap-4 items-center justify-center">
//             <div className="flex gap-4 w-4/5 justify-center">
//               {error && <p className="text-red-500 text-sm">{error}</p>}
//               {weatherData && (
//                 <>
//                   {city && (
//                     <div className="bg-[#F2FED1] p-5 rounded-lg w-full max-w-md border-solid border-[#000000] border-[0.2px] border-b-[5px] shadow-md">
//                       <CurrentWeather weatherData={weatherData} />
//                     </div>
//                   )}
//                   <div className="bg-[#F3F3F3] p-4 rounded-lg w-full max-w-md border-solid border-[#000000] border-[0.2px] border-b-[5px] shadow-md">
//                     <WeatherChart forecast={forecastData} />
//                   </div>
//                 </>
//               )}
//             </div>

//             {cropData && (
//               <div className="lg:w-3/5">
//                 <RecommendedCropsList
//                   weatherData={weatherData}
//                   cropData={cropData}
//                   // recommendedCrops={dummyRecommendedCrops}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;