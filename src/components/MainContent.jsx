// MainContent.jsx
// import { useState } from "react";
import WeatherInput from "./Weather/WeatherInput";
import CurrentWeather from "./Weather/CurrentWeather";
import WeatherChart from "./Weather/WeatherChart";
import PropTypes from "prop-types";
import Recommendation from "../NavState/Recommendation";
import MessageAlert from "../NavState/MessageAlert";
import Settings from "../NavState/Settings";
import Alert from "./Alert";
import { RxAvatar } from "react-icons/rx";
// import IndexModal from "./IndexModal";
import Map from "./Map/Map";
import { CiLocationOn } from "react-icons/ci";
import Rechart from "./Weather/Rechart";
// import { useStore } from "../store/store";

const MainContent = ({
  active,
  city,
  setCity,
  weatherData,
  forecastData,
  cropData,
  error,
}) => {
  // const [isModalVisible, setIsModalVisible] = useState(true);

  // const closeModal = () => {
  //   setIsModalVisible(false);
  // };
  // const { userCity } = useStore((state) => ({
  //   userCity: state.userCity,
  // }));

  // console.log(userCity);

  return (
    <div className="container pt-16 lg:pt-3 lg:mx-4 flex justify-center items-center lg:ml-[15%]">
      <div className="p-2 container lg:mx-4">
        {/* Modal */}
        {/* <IndexModal isVisible={isModalVisible} onClose={closeModal} /> */}

        {active === 0 && (
          <>
            <div className=" hidden lg:flex justify-between ml-14 items-center p-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="font-semibold text-xl">
                  <span className="bg-[#00a884] p-1">Dashboard</span>
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
              <p className="mb-1 p-5 relative w-5/6 bg-[#0f3828]  text-white border-solid border-[#000000] border-[1px] border-b-[5px] text-sm lg:text-base shadow-md rounded-xl">
                Welcome to CropsDSS! Click the Crop tab to see your Recommended
                crops for your city. To view more recommendations for other
                cities, simply navigate to the input above and input a city.
              </p>
            </div>
            <div className="flex mt-2 lg:hidden justify-center">
              <Alert />
            </div>
            <div className="flex lg:flex-col flex-col fade-in items-center justify-center">
              {error && (
                <p className="text-red-500 font-medium text-lg mt-4">{error}</p>
              )}
              {weatherData && (
                <>
                  {city && (
                    <div className="lg:py-6 py-6 flex lg:flex-row flex-col gap-4 justify-between w-5/6">
                      <div className="bg-[#0f3828] text-white p-3 py-5 rounded-lg w-full lg:w-[70%] border-solid border-[#000000] border-[0.2px] border-b-[5px] shadow-md">
                        <CurrentWeather weatherData={weatherData} />
                      </div>

                      <div className="bg-[#F3F3F3] text-center p-4 rounded-lg w-full lg:w-[30%] h-[13rem] border-solid border-[#000000] border-[0.2px] border-b-[5px] shadow-md">
                        <div className="location flex flex-col gap-1">
                          <div className="flex justify-center gap-2 items-center location-status mb-2">
                            <div>
                              <CiLocationOn className="text-black w-10 h-10 font-bold text-2xl" />
                            </div>
                            <div className="border-black border-2 border-solid  p-3 rounded-full  bg-[#00a884] flex gap-1 items-center font-bold ">
                              <div className="border-[1px] border-black rounded-full  bg-[#ffff] animate-pulse   w-3 h-3"></div>
                              Location Active
                            </div>
                          </div>

                          <div className="font-bold text-lg lg:text-2xl">
                            {" "}
                            {city}
                          </div>
                          <div className="text-md lg:text-sm lg:p-0 p-2">
                            All weather details and crops recommendation is
                            provided based on your city or your search request.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {city && (
                    <div className=" w-5/6 relative lg:mb-0 mb-20 border-solid lg:justify-center items-center flex-col lg:flex-col bg-[#f3f3f3] p-3 py-10 rounded-lg border-[#000000] border-[0.2px] border-b-[5px] shadow-md">
                      <div className="lg:text-lg absolute right-4 hidden lg:block w-fit float-right text-right cursor-pointer tracking-wider bg-[#dffd8d] p-1.5 rounded-sm text-gray-700 font-semibold">
                        Weather History
                      </div>
                      <div className="lg:m-8 flex justify-center">
                        {/* <Rechart forecast={forecastData}/> */}
                        <WeatherChart forecast={forecastData} />
                      </div>
                    </div>
                  )}
                  {/* <div className="w-5/6 border-solid hidden lg:block bg-[#f3f3f3] p-3 py-5 rounded-lg border-[#000000] border-[0.2px] border-b-[5px] shadow-md">
                    <Barchart />
                    <div className="flex justify-center color font-semibold mt-2 ">
                      Humidity
                    </div>
                  </div> */}
                  <div className=" relative w-5/6 mt-6 border-solid hidden lg:block bg-[#f3f3f3] py-1 rounded-lg border-[#000000] border-[0.2px] border-b-[5px] shadow-md">
                    <div className=" hidden lg:flex justify-between items-center p-4 mb-4 absolute z-20 right-2">
                      {/* <div className="font-semibold text-xl">
                        <span className="bg-[#F2FED1] p-1">Map</span>
                      </div> */}

                      <div className="text-lg flex items-center cursor-pointer gap-4 tracking-wider bg-[#dffd8d] p-1.5 rounded-sm text-gray-700 font-semibold">
                        Live Location
                      </div>
                    </div>

                    <div className="font-bold text-4xl text-center z-auto">
                      <Map />
                    </div>

                    {/* <Barchart /> */}
                  </div>
                </>
              )}
            </div>
          </>
        )}
        {active === 1 && (
          <Recommendation
            error={error}
            city={city}
            setCity={setCity}
            weatherData={weatherData}
            cropData={cropData}
          />
        )}
        {active === 2 && <MessageAlert />}
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
  forecastData: PropTypes.object,
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
