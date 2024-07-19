import RecommendedCropCard from "./RecommendedCropCard";
import PropTypes from "prop-types";
import { PiPottedPlantLight } from "react-icons/pi";

const RecommendedCropsList = ({ weatherData, cropData, city }) => {
  return (
    <div className=" bg-[#0f3828] text-white rounded shadow-md p-6 m-2 ml-4 lg:p-8">
      <div className="flex justify-between mb-2">
        <div className="flex justify-start gap-1">
          <div className="lg:text-lg font-semibold mb-2">
            Recommended Crops{" "}
          </div>
        </div>

        <div className="font-medium text-xs lg:items-center text-black  lg:text-lg flex lg:bg-[#00a884] p-2">
          Location: {city}
        </div>
      </div>

      <p className="font-light text-sm lg:text-[0.73  rem] lg:text-base">
        {" "}
        Based on your location and the weather data in the past few weeks, These
        are the recommended crops and suggestions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2 gap-y-2 gap-x-4">
        {/* {recommendedCrops.map((crop, index) => (
          <Fragment key={index}>
            <RecommendedCropCard crop={crop} weatherData={weatherData} />
          </Fragment>
        ))} */}
        {cropData ? (
          cropData.map((crop, index) => (
            <RecommendedCropCard
              key={index}
              crop={crop}
              weatherData={weatherData}
            />
          ))
        ) : (
          <p className="text-red-500">
            No crop data available. Please try again later.
          </p>
        )}
      </div>
    </div>
  );
};

RecommendedCropsList.propTypes = {
  cropData: PropTypes.array,
  cropDetails: PropTypes.array,
};

export default RecommendedCropsList;
