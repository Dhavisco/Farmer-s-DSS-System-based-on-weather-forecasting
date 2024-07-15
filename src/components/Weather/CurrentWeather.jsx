import PropTypes from "prop-types";
import weatherIcons from "../../store/data.json"
// import cloudyIcon from "../assets/icons/cloudy.svg"; 
// import rainIcon from "../assets/icons/rain.svg"
// import clearIcon from "../assets/icons/clear-day.svg"


const CurrentWeather = ({ weatherData }) => {
  const { description, humidity, main, temp, wind_speed } = weatherData;
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const weatherDescription = description;
  const weatherMain = main;
  const weatherIcon = weatherIcons[weatherMain] || weatherIcons['Clear']; // Fallback to a default icon if not mapped
  const humidityIcon = weatherIcons["Humidity"];
  const windSpeedIcon = weatherIcons["WindSpeed"];

  return (
    <>
      <div className="md:text-2xl text-lg font-bold capitalize lg:mb-2 flex items-center">
        {weatherDescription}
        <img src={weatherIcon} alt={weatherIcon} className="lg:w-16 lg:h-16 w-14 h-14" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="md:text-6xl text-4xl font-semibold">
            {Math.round(temp)}°C
          </div>
          <div className="text-gray-600 text-xs md:text-lg">
            {new Date().toLocaleDateString("en-US", options)}
          </div>
        </div>
        <div>
          <div className="flex items-center text-gray-500 text-xs md:text-base">
            <img src={humidityIcon} alt="Humidity" className="w-6 h-6" />
            Humidity:{" "}
            <span className="text-black ml-1.5"> {humidity}% </span>
          </div>
          <div className="flex items-center text-gray-500 text-xs md:text-base">
            <img src={windSpeedIcon} alt="Wind Speed" className="w-6 h-6" />
            Wind Speed:{" "}
            <span className="text-black ml-1.5">{wind_speed} m/s </span>
          </div>
        </div>
      </div>
    </>
  );
};

CurrentWeather.propTypes = {
  weatherData: PropTypes.shape({
    description: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    main: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    wind_speed: PropTypes.number.isRequired,
  }).isRequired,
};


export default CurrentWeather;
