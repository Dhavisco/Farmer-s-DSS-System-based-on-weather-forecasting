// IndexModal.jsx
import PropTypes from "prop-types";
// import img from "../assets/farmersilu.jpeg";
import "./IndexModal.css";
import Icon from "./Icon";
import weatherIcons from "../store/data.json";
import { IoPieChart } from "react-icons/io5";
import { MdBarChart, MdLocationCity } from "react-icons/md";
import { GiBanana, GiCorn } from "react-icons/gi";
import { PiOrangeFill } from "react-icons/pi";
import {
  FaSearchLocation,
  FaLocationArrow,
  FaAppleAlt,
  FaChartLine,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const IndexModal = ({ isVisible, onClose }) => {
  // Convert the object to an array of key-value pairs and slice the first 5
  const iconEntries = Object.entries(weatherIcons).slice(0, 3);
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white hero rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out ${
          isVisible ? "scale-100" : "scale-75"
        }`}
      >
        <div className="image-overlay">
          {/* <img src={img} alt="Farmers" className="bgimg" /> */}
        </div>
        <div className="hero-text">
          <div className=" flex justify-between gap-4">
            <div className="left flex flex-col gap-2">
              <div className="bg-[#9c6330] rounded-md text-sm p-4 text-[#dddddd]">
                <Icon />
              </div>
              <div className="icons bg-[#fdefe3] border-[2px] border-solid border-[#b4a193d0] rounded-md">
                <div className="weather grid grid-cols-3 p-1 items-center bg-[#dfc7b3e1] border-b-2 border-solid border-[#dfc7b3e1]">
                  {iconEntries.map(([name, iconPath], index) => (
                    <div key={index} className="icon-container">
                      <img src={iconPath} alt={name} className="icon" />
                    </div>
                  ))}
                </div>

                <div className="charts grid grid-cols-3 gap-4 py-4 px-1 items-center">
                  <IoPieChart className="text-yellow-700 h-9 w-9" />
                  <FaChartLine className="text-[#718b74] h-9 w-9" />
                  <MdBarChart className="text-[#967c61] h-9 w-9" />
                </div>
              </div>
            </div>
            <div className="right flex flex-col justify-between gap-4 font-semibold text-[#dddddd]">
              <div className="bg-[#9c6330] rounded-md p-4">
                <h1>Farmer</h1>
                <p className="text-sm">decision system</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-[#fdefe3] flex items-center gap-1 rounded-md p-3">
                  <FaAppleAlt className="h-7 w-7 text-[#e04226]" />
                  <GiBanana className="h-7 w-8 text-yellow-500" />
                  <GiCorn className="h-7 w-7 text-yellow-600" />
                  <PiOrangeFill className="h-7 w-7 text-[#057405ee]" />
                </div>
                <div className="bg-[#f5c499] flex justify-center gap-2 rounded-md p-3">
                  <FaSearchLocation className="h-7 w-7 text-[#979505ce]" />
                  <MdLocationCity className="h-8 w-8 text-[#fd9115ee]" />
                  <FaLocationArrow className="h-7 w-7 text-[#053174d2]" />
                  <FaLocationDot className="h-7 w-7 text-[#c40303cb]" />
                </div>
              </div>
            </div>
          </div>

          {/* <h2 className="text-2xl font-semibold mb-4">Welcome to CropsDSS</h2>
          <p className="mb-4">
            We're glad to have you here! Explore the features and get the best
            crop recommendations based on the latest weather data.
          </p> */}
          <button
            onClick={onClose}
            className="px-4 py-2 mt-8 bg-green-500 text-white font-medium rounded hover:bg-green-600 "
          >
            Let's Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

IndexModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default IndexModal;
