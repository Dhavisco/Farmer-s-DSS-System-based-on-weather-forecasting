import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Chart from "chart.js/auto";

const WeatherChart = ({ forecast = [] }) => {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);
  const { time, temperature_2m_mean } = forecast;

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const data = {
      labels: time.map((day) =>
       day
        
      ),
      datasets: [
        {
          label: "Temperature",
          data: temperature_2m_mean.map((day) => day),
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {},
    };

    chartRef.current = new Chart(canvasRef.current, config);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [forecast, time, temperature_2m_mean]);

  return <canvas ref={canvasRef} id="weather-chart"></canvas>;
};



//Specifying proptypes
WeatherChart.propTypes = {
forecast: PropTypes.shape({
  time: PropTypes.arrayOf(PropTypes.string).isRequired,
  temperature_2m_mean: PropTypes.arrayOf(PropTypes.number).isRequired,
})
};

export default WeatherChart;
