import RecommendedCropsList from "../components/Recommendation/RecommendedCropsList";
import Header from '../layout/Header'
import WeatherInput from "../components/Weather/WeatherInput";
const Recommendation = ({cropData, weatherData, city, setCity, error}) => {

  const page = "Recommendation"
  return (
    <>
      <Header page={page} />
      <div className="flex items-center justify-center">
        <WeatherInput city={city} setCity={setCity} />
      </div>
      <div className="container lg:mx-12 flex justify-center items-center fade-in">
        <div className="p-2 container mx-4">
          {/* <h2 className="text-2xl font-bold mb-4">Recommendation Page</h2>
        <p>
          This is where you can display recommendations based on weather data or
          user preferences. You could show recommended crops, agricultural
          practices, or other personalized recommendations.
        </p> */}
          {error && <div className="lg:w-5/6 flex justify-center text-red-500 font-medium">
                No Crop Recommendation
          </div>}
          {city && cropData && (
            <div className="lg:w-5/6">
              <RecommendedCropsList
              city={city}
                weatherData={weatherData}
                cropData={cropData}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Recommendation