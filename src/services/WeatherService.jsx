const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getWeatherData = async (city) => {
  try {
    const currentWeatherResponse = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    // const forecastResponse = await fetch(
    //   `${BASE_URL}/forecast/daily?q=${city}&cnt=7&appid=${API_KEY}&units=metric`
    // );

    // if (!currentWeatherResponse.ok || !forecastResponse.ok) {
    //   throw new Error("HTTP error");
    // }

    if (!currentWeatherResponse.ok) {
      if (currentWeatherResponse.status === 404) {
        throw new Error("Location not found");
      } else {
        throw new Error(`HTTP error ${currentWeatherResponse.status}`);
      }
    }

    const data = await currentWeatherResponse.json();
    // const forecastData = await forecastResponse.json();

    return data;
    //   forecast: forecastData.list,
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

// const BASE_URL_WEATHERCROP = import.meta.env.VITE_BASE_URL_WEATHERCROP;

// export const getWeatherForecastData = async (city) => {
//   console.log(city);

//   try {
//     const response = await fetch(
//       `https://weather-crop-api.vercel.app/weather/history/Lagos/2024-06-07/2024-06-15`
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching weather forecast data:", error);
//     throw error;
//   }
// };

export const getWeatherForecastData = async (city) => {
  // const startDate = "2024-06-24";
  // const endDate = "2024-06-28";

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

  console.log(
    `Fetching data from ${formattedStartDate} to ${formattedEndDate} for ${city}`
  );

  try {
    const response = await fetch(
      `https://weather-crop-api.vercel.app/weather/history/${city}/${formattedStartDate}/${formattedEndDate}`
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
    const response = await fetch(
      `https://weather-crop-api.vercel.app/weather/forecast/${city}`
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

// Usage
// getWeatherForecastData(city)
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// export const getWeatherData = async (city) => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     throw error;
//   }
// };

export const getUserIp = () => {
  const data = fetch("http://ip-api.com/json")
    .then((response) => {
      // Handle the response here
      console.log(response)
      return response.json();
      
    })
    .then((result) => {
      // console.log("the result is =>", result);
      return result;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  return data;
};
