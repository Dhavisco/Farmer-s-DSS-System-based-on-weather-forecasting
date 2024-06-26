import RecommendedCropsList from "../components/Recommendation/RecommendedCropsList";

const Recommendation = ({cropData, weatherData}) => {
  return (
    <div className="container lg:mx-12 flex justify-center items-center">
      <div className="p-2 container mx-4">
        {/* <h2 className="text-2xl font-bold mb-4">Recommendation Page</h2>
        <p>
          This is where you can display recommendations based on weather data or
          user preferences. You could show recommended crops, agricultural
          practices, or other personalized recommendations.
        </p> */}

        {cropData && (
          <div className="lg:w-5/6">
            <RecommendedCropsList
              weatherData={weatherData}
              cropData={cropData}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Recommendation