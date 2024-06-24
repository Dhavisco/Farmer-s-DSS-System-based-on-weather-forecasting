import RecommendedCropCard from "./RecommendedCropCard";
import { Fragment } from "react";
import PropTypes from 'prop-types';

const RecommendedCropsList = ({ recommendedCrops, weatherData, cropData }) => {
 console.log(cropData)

 
  return (
    <div className=" bg-[#F3F3F3] rounded shadow-md p-8">
      <h2 className="text-lg font-semibold mb-2">Recommended Crops</h2>
      <p className="font-light">
        {" "}
        Based on the weather data in the past few weeks, These are the
        recommended crops and suggestions
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

