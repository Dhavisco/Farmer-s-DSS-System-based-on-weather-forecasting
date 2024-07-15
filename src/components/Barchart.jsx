
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const colors = "#598000";

const historicalData = [
  { date: "2024-06-01", temperature: 28, humidity: 60 },
  { date: "2024-06-02", temperature: 27, humidity: 65 },
  { date: "2024-06-03", temperature: 26, humidity: 62 },
  { date: "2024-06-04", temperature: 25, humidity: 58 },
  { date: "2024-06-05", temperature: 26, humidity: 63 },
  { date: "2024-06-06", temperature: 25, humidity: 58 },
  { date: "2024-06-07", temperature: 26, humidity: 80 },
];



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
      <Bar dataKey="humidity" fill={colors} stroke="black">
        {historicalData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors} stroke="gray" />
        ))}
      </Bar>
    </BarChart>
  );
}
