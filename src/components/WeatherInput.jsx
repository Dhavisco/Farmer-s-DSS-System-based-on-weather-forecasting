import PropTypes from "prop-types";

const WeatherInput = (props) => {
  const city = props.city;
  const setCity = props.setCity;

const inputHandler = (e) => {
setCity(e.target.value)
}

  return (
    <div className="mb-4 relative">
      <input
        type="text"
        value={city}
        onChange={inputHandler}
        placeholder="Enter your Current Location e.g Lagos"
        className="w-full p-2 pl-10 border border-gray-300 rounded"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 6h13M8 12h13m-7 6h7"
          />
        </svg>
      </div>
    </div>
  );
};

//Specifying proptypes
WeatherInput.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired
};

export default WeatherInput;
