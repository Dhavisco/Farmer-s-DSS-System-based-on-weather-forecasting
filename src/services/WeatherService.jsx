// const API_KEY = import.meta.env.VITE_API_KEY;

// const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getWeatherData = async (city) => {
  try {
    const currentWeatherResponse = await fetch(
      `${BASE_URL}/weather/${city}`

    );
  

    if (!currentWeatherResponse.ok) {
      if (currentWeatherResponse.status === 404) {
        throw new Error("Location not found");
      } else {
        throw new Error(`HTTP error ${currentWeatherResponse.status}`);
      }
    }

    const data = await currentWeatherResponse.json();

    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};


export const getWeatherForecastData = async (city) => {

  // Get current date
  const currentDate = new Date();

  // Get date 7 days ago
  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() - 7);

  const endDate = new Date(currentDate);
  endDate.setDate(currentDate.getDate() - 1);

  // Format dates to YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  try {
    const response = await fetch(
      `${BASE_URL}/weather/history/${city}/${formattedStartDate}/${formattedEndDate}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching weather forecast data:", error);
    throw error;
  }
};

export const getRecommendedCropsData = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}/weather/forecast/${city}`);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather forecast data:", error);
    throw error;
  }
};


export const getUserIp = () => {
  const data = fetch(`https://ipapi.co/json/`, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  })
    .then((response) => {
      // Handle the response here
     
      return response.json();
    })
    .then((result) => {
     
      return result;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  return data;
};
