import RecommendedCropCard from "./RecommendedCropCard";
import PropTypes from 'prop-types';
import { PiPottedPlantLight } from "react-icons/pi";


const RecommendedCropsList = ({ weatherData, cropData }) => {
 console.log(cropData)

 
  return (
    <div className=" bg-[#F3F3F3] rounded shadow-md p-6 m-2 lg:p-8">
      <div className="flex justify-start gap-1">
        <div className="lg:text-lg font-semibold mb-2">Recommended Crops </div>
        <div className="pt-1 lg:pt-1">
          <PiPottedPlantLight className="text-red-800 text-lg lg:text-xl"/>
        </div>
      </div>

      <p className="font-light text-sm lg:text-base">
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
  cropData: PropTypes.object,
  cropDetails: PropTypes.array,
};

export default RecommendedCropsList;

