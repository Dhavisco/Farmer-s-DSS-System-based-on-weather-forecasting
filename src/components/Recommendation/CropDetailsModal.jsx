import weatherIcons from "../../store/data.json";

const CropDetailsModal = ({ crop, weatherData, onClose }) => {
  const getScoreColor = (score) => {
    if (score >= 7) return "text-green-500";
    if (score >= 5) return "text-yellow-500";
    return "text-red-500";
  };

  const { weather, main, wind} = weatherData;

  console.log(weatherData);

  // const weatherMain = weather[0].main;
  // const weatherIcon = weatherIcons[weatherMain] || weatherIcons["Clear"]; // Fallback to a default icon if not mapped
  const humidityIcon = weatherIcons["Humidity"];
  const windSpeedIcon = weatherIcons["WindSpeed"];
  const temperatureIcon = weatherIcons["Temperature"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center lg:mg-1 m-14">
      <div className="bg-[#f1e9e9] rounded-lg shadow-lg p-8 max-w-md">
        <button
          className="top-4 right-4 border-2 border-yellow-500 hover:border-yellow-600 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex lg:flex-row justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-1">{crop.crop}</h3>
            <p
              className={`text-sm font-base mb-4 ${getScoreColor(
                crop.suitability_score
              )}`}
            >
              Suitability Score: {crop.suitability_score}/10
            </p>
          </div>
          <div className="flex flex-col justify-start items-start mr-4 tracking-[0.07rem]">
            <div className="flex items-center text-gray-800 text-xs md:text-base">
              <img src={temperatureIcon} alt="Humidity" className="w-7 h-7" />
              <span className="text-black ml-1.5 md:text-base text-sm font-medium">
                {" "}
                {Math.round(main.temp)}°C{" "}
              </span>
            </div>
            <div className="flex items-center text-gray-800 text-xs md:text-base">
              <img src={humidityIcon} alt="Humidity" className="w-7 h-7" />
              <span className="text-black ml-1.5 md:text-base text-sm font-medium">
                {" "}
                {main.humidity}%{" "}
              </span>
            </div>
            <div className="flex items-center text-gray-800 text-xs md:text-base">
              <img src={windSpeedIcon} alt="Wind Speed" className="w-7 h-7" />
              <span className="text-black ml-1.5 md:text-base text-sm font-medium">
                {wind.speed}m/s{" "}
              </span>
            </div>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-1.5">Growing Recommendation</h4>
        <p className="mb-4 text">{crop.growing_recommendation}</p>
        <h4 className="text-lg font-semibold mb-1.5">Relevant Information</h4>
        <p>{crop.relevant_information}</p>
      </div>
    </div>
  );
};

export default CropDetailsModal;
