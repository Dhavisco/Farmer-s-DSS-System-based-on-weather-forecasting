// MainContent.jsx
import WeatherInput from "./Weather/WeatherInput";
import CurrentWeather from "./Weather/CurrentWeather";
import WeatherChart from "./Weather/WeatherChart";
import Barchart from "./Barchart";
import PropTypes from "prop-types";
import Recommendation from "../NavState/Recommendation";
import History from "../NavState/History";
import Settings from "../NavState/Settings";
import Alert from "./Alert";
import { RxAvatar } from "react-icons/rx";

const MainContent = ({
  active,
  city,
  setCity,
  weatherData,
  forecastData,
  cropData,
  error,
}) => {
  return (
    <div className="container pt-16 lg:pt-3 lg:mx-8 flex justify-center items-center lg:ml-[15%]">
      <div className="p-2 container lg:mx-4">
        {active === 0 && (
          <>
            <div className=" hidden lg:flex justify-between ml-14 items-center p-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="font-semibold text-xl">
                  <span className="bg-[#F2FED1] p-1">Dashboard</span>
                </div>
                <div className="">
                  <Alert />
                </div>
              </div>
              <div className="text-lg flex items-center gap-4 tracking-wider text-gray-700 font-semibold">
                <div className="">
                  Hello, <span className="text-gray-900">Farmer!</span>
                </div>
                <div>
                  <div>
                    <RxAvatar className="w-[3rem] h-[3rem] text-green-700" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <WeatherInput city={city} setCity={setCity} />
            </div>
            <div className="flex items-center justify-center">
              <p className="mb-1 p-5 relative w-5/6 bg-[#F2FED1] border-solid border-[#000000] border-[1px] border-b-[5px] text-sm lg:text-base shadow-md rounded-xl">
                Welcome to FarmersDSS! Click the Crop tab to see your
                Recommended crops for your city. To view more recommendations
                for other cities, simply navigate to the input above and input a
                city.
              </p>
            </div>
            <div className="flex mt-2 lg:hidden justify-center">
              <Alert />
            </div>
            <div className="flex lg:flex-col flex-col items-center justify-center">
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {weatherData && (
                <>
                  <div className="lg:px-4 lg:py-6 py-6 flex lg:flex-row w-5/6 flex-col gap-4 items-center justify-center">
                    {city && (
                      <div className="bg-[#F2FED1] p-3 py-5 rounded-lg w-full lg:max-w-md border-solid border-[#000000] border-[0.2px] border-b-[5px] shadow-md">
                        <CurrentWeather weatherData={weatherData} />
                      </div>
                    )}
                    <div className="bg-[#F3F3F3] p-4 rounded-lg w-full lg:max-w-md h-[13rem] border-solid border-[#000000] border-[0.2px] border-b-[5px] shadow-md">
                      <WeatherChart forecast={forecastData} />
                    </div>
                  </div>

                  <div className="w-5/6 border-solid hidden lg:block bg-[#f3f3f3] p-3 py-5 rounded-lg border-[#000000] border-[0.2px] border-b-[5px] shadow-md">
                    <Barchart />
                  </div>
                </>
              )}
            </div>
          </>
        )}
        {active === 1 && (
          <Recommendation weatherData={weatherData} cropData={cropData} />
        )}
        {active === 2 && <History />}
        {active === 3 && <Settings />}
      </div>
    </div>
  );
};

MainContent.propTypes = {
  active: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  weatherData: PropTypes.object,
  forecastData: PropTypes.array,
  cropData: PropTypes.array,
  error: PropTypes.string,
};

export default MainContent;





// import WeatherInput from "./Weather/WeatherInput";
// import CurrentWeather from "./Weather/CurrentWeather";
// import WeatherChart from "./Weather/WeatherChart";
// import RecommendedCropsList from "./Recommendation/RecommendedCropsList";
// import PropTypes from "prop-types";

// const MainContent = ({
//   city,
//   setCity,
//   weatherData,
//   forecastData,
//   cropData,
//   error,
// }) => {
//   return (
//     <div className="container mx-8 flex justify-center items-center ml-[15%]">
//       <div className="p-2 container mx-4">
//         <div className="flex items-center justify-center">
//           <WeatherInput city={city} setCity={setCity} />
//         </div>
//         <div className="flex items-center justify-center">
//           <p className="mb-1 p-5 relative w-4/5 bg-[#F2FED1] border-solid border-[#000000] border-[1px] border-b-[5px] shadow-md rounded-xl">
//             Welcome to FarmersDSS! Below you'll see your Recommended crops for
//             your city. To view more recommendations for other cities, simply
//             navigate to the input above and input a city.
//           </p>
//         </div>
//         <div className="p-6 flex lg:flex-col flex-col gap-4 items-center justify-center">
//           <div className="flex gap-4 w-4/5 justify-center">
//             {error && <p className="text-red-500 text-sm">{error}</p>}
//             {weatherData && (
//               <>
//                 {city && (
//                   <div className="bg-[#F2FED1] p-5 rounded-lg w-full max-w-md border-solid border-[#000000] border-[0.2px] border-b-[5px] shadow-md">
//                     <CurrentWeather weatherData={weatherData} />
//                   </div>
//                 )}
//                 <div className="bg-[#F3F3F3] p-4 rounded-lg w-full max-w-md border-solid border-[#000000] border-[0.2px] border-b-[5px] shadow-md">
//                   <WeatherChart forecast={forecastData} />
//                 </div>
//               </>
//             )}
//           </div>
//           {cropData && (
//             <div className="lg:w-4/5">
//               <RecommendedCropsList
//                 weatherData={weatherData}
//                 cropData={cropData}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// MainContent.propTypes = {
//   city: PropTypes.string.isRequired,
//   setCity: PropTypes.func.isRequired,
//   weatherData: PropTypes.object,
//   forecastData: PropTypes.array,
//   cropData: PropTypes.array,
//   error: PropTypes.string,
// };

// export default MainContent;
