import PropTypes from "prop-types";
import weatherIcons from "../store/data.json"
// import cloudyIcon from "../assets/icons/cloudy.svg"; 
// import rainIcon from "../assets/icons/rain.svg"
// import clearIcon from "../assets/icons/clear-day.svg"


const CurrentWeather = (props) => {
  const { weather, main, wind, dt } = props.weatherData;
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
 
  // const weatherIconMap = {
  //   Clouds: cloudyIcon,
  //   Rain: rainIcon,
  //   Clear: clearIcon,
    
  //  
  // };

  const weatherDescription = weather[0].description;
  const weatherMain = weather[0].main;
  const weatherIcon = weatherIcons[weatherMain] || weatherIcons['Clear']; // Fallback to a default icon if not mapped
   const humidityIcon = weatherIcons["Humidity"];
   const windSpeedIcon = weatherIcons["WindSpeed"];

  return (
    <div> 
      <h2 className="text-2xl font-bold mb-2 flex items-center">
        {weatherDescription}
        <img src={weatherIcon} alt={weatherIcon} className="w-10 h-10" />
      </h2>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-6xl font-semibold">{Math.round(main.temp)}°C</div>
          <div className="text-gray-600">{new Date(dt * 1000).toLocaleDateString('en-US', options)}</div>
        </div>
        <div>
          <div className="flex items-center text-gray-500">
            <img src={humidityIcon} alt="Humidity" className="w-6 h-6" />
            Humidity: <span className="text-black ml-1.5"> {main.humidity}% </span>
          </div>
          <div className="flex items-center text-gray-500">
            <img
              src={windSpeedIcon}
              alt="Wind Speed"
              className="w-6 h-6"
            />
            Wind Speed: <span className="text-black ml-1.5">{wind.speed} m/s </span>
          </div>
        </div>
      </div>
    </div>
  );
};

CurrentWeather.propTypes = {
  weatherData: PropTypes.shape({
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        main: PropTypes.string.isRequired,
      })
    ).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
    dt: PropTypes.number.isRequired,
  }).isRequired,
};

export default CurrentWeather;
