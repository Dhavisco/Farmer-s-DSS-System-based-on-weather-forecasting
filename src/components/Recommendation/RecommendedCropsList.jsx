import RecommendedCropCard from "./RecommendedCropCard";


const RecommendedCropsList = ({ recommendedCrops }) => {
  return (
    <div className=" bg-white rounded shadow-md p-8">
      <h2 className="text-lg font-semibold mb-2">Recommended Crops</h2>
      <p className="font-light"> Based on the weather data in the past few weeks, These are the recommended crops and suggestions</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2 gap-y-2 gap-x-4">
        {recommendedCrops.map((crop) => (
          <RecommendedCropCard key={crop.crop} crop={crop} />
        ))}
      </div>
    </div>
  );
};
export default RecommendedCropsList;