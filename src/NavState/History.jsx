
import { Line, Bar } from 'react-chartjs-2';

const History = () => {
  // Mock historical weather data
  const historicalData = [
    { date: "2023-06-01", temperature: 28, humidity: 60 },
    { date: "2023-06-02", temperature: 27, humidity: 65 },
    { date: "2023-06-03", temperature: 26, humidity: 62 },
    { date: "2023-06-04", temperature: 25, humidity: 58 },
    { date: "2023-06-05", temperature: 26, humidity: 63 },
  ];

  // Extracting dates, temperatures, and humidity for chart data
  const chartLabels = historicalData.map(data => data.date);
  const temperatureData = historicalData.map(data => data.temperature);
  const humidityData = historicalData.map(data => data.humidity);

  // Chart.js configuration for the line chart (temperature)
  const temperatureOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 10,
          },
          beginAtZero: false,
          // Include a degree symbol in y-axis labels
          callback: function(value) {
            return value + '°C';
          },
        },
      },
    },
  };

  const temperatureDataConfig = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Temperature',
        data: temperatureData,
        fill: false,
        borderColor: '#3182CE',
        tension: 0.4,
      },
    ],
  };

  // Chart.js configuration for the bar chart (humidity)
  const humidityOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 10,
          },
          beginAtZero: true,
          // Include a percentage symbol in y-axis labels
          callback: function(value) {
            return value + '%';
          },
        },
      },
    },
  };

  const humidityDataConfig = {
    labels: chartLabels,
    datasets: [
      {
        label: "Humidity",
        data: humidityData,
        backgroundColor: "#8ac700",
        borderColor: "#191a23",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-8 flex justify-center items-center ml-[15%]">
      <div className="p-2 container mx-4">
        <h2 className="text-2xl font-bold mb-4">History Page</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-solid border-[#000000] border-[1px] shadow-md">
              <thead>
                <tr>
                  <th className="border-solid border-[#000000] border-[1px] border-b-[5px]">Date</th>
                  <th className="border-solid border-[#000000] border-[1px] border-b-[5px]">Temperature</th>
                  <th className="border-solid border-[#000000] border-[1px] border-b-[5px]">Humidity</th>
                </tr>
              </thead>
              <tbody>
                {historicalData.map((data, index) => (
                  <tr key={index}>
                    <td className="border-solid border-[#000000] border-[1px] p-3">{data.date}</td>
                    <td className="border-solid border-[#000000] border-[1px] p-3">{data.temperature}°C</td>
                    <td className="border-solid border-[#000000] border-[1px] p-3">{data.humidity}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white p-4 border-solid border-[#000000] border-[1px] shadow-md rounded-lg">
            <Line data={temperatureDataConfig} options={temperatureOptions} height={400} />
          </div>
          <div className="bg-white p-4 border-solid border-[#000000] border-[1px] shadow-md rounded-lg">
            <Bar data={humidityDataConfig} options={humidityOptions} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};



// const History = () => {
//   // Mock historical weather data
//   const historicalData = [
//     { date: "2023-06-01", temperature: "28°C", description: "Sunny" },
//     { date: "2023-06-02", temperature: "27°C", description: "Partly Cloudy" },
//     { date: "2023-06-03", temperature: "26°C", description: "Cloudy" },
//     { date: "2023-06-04", temperature: "25°C", description: "Rainy" },
//     { date: "2023-06-05", temperature: "26°C", description: "Cloudy" },
//   ];
//   return (
//     <div className="container mx-8 flex justify-center items-center ml-[15%]">
//       <div className="p-2 container mx-4">
//         <h2 className="text-2xl font-bold mb-4">History Page</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border-solid border-[#000000] border-[1px] shadow-md">
//             <thead>
//               <tr>
//                 <th className="border-solid border-[#000000] border-[1px] border-b-[5px]">
//                   Date
//                 </th>
//                 <th className="border-solid border-[#000000] border-[1px] border-b-[5px]">
//                   Temperature
//                 </th>
//                 <th className="border-solid border-[#000000] border-[1px] border-b-[5px]">
//                   Description
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {historicalData.map((data, index) => (
//                 <tr key={index}>
//                   <td className="border-solid border-[#000000] border-[1px] p-3">
//                     {data.date}
//                   </td>
//                   <td className="border-solid border-[#000000] border-[1px] p-3">
//                     {data.temperature}
//                   </td>
//                   <td className="border-solid border-[#000000] border-[1px] p-3">
//                     {data.description}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
    // <div className="container mx-12 flex justify-center items-center">
    //   <div className="p-2 container mx-4">
    //     <h2 className="text-2xl font-bold mb-4">History Page</h2>
    //     <p>
    //       Display historical weather data for the selected city or region. You
    //       could include graphs, charts, or tables showing past weather patterns
    //       and trends.
    //     </p>
    //   </div>
    // </div>
//   );
// }

export default History