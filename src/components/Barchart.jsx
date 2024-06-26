
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip,Legend, Rectangle } from "recharts";

// const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const colors = "#abf600";

 const historicalData = [
   { date: "2023-06-01", temperature: 28, humidity: 60 },
   { date: "2023-06-02", temperature: 27, humidity: 65 },
   { date: "2023-06-03", temperature: 26, humidity: 62 },
   { date: "2023-06-04", temperature: 25, humidity: 58 },
   { date: "2023-06-05", temperature: 26, humidity: 63 },
   { date: "2023-06-06", temperature: 25, humidity: 58 },
   { date: "2023-06-07", temperature: 26, humidity: 63 },
   
 ];

// const getPath = (x, y, width, height) => {
//   return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
//     y + height / 3
//   }
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
//     x + width
//   }, ${y + height}
//   Z`;
// };

// const TriangleBar = (props) => {
//   const { fill, x, y, width, height } = props;

//   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };

export default function Barchart() {
  return (
    
    <BarChart
      width={800}
      height={300}
      data={historicalData}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
 <Tooltip />
          <Legend color={colors}/>
      <Bar
        dataKey="humidity"
        activeBar={<Rectangle fill={colors} stroke="black" />}
      >
        {historicalData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors} stroke="gray" />
        ))}
      </Bar>
    </BarChart>
  );
}
