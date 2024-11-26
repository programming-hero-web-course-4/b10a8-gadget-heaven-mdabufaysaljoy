import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Dell XPS", price: 60 },
  { name: "MacBook Pro", price: 100 },
  { name: "HP Spectre", price: 80 },
  { name: "Lenovo ThinkPad", price: 40 },
  { name: "Asus ZenBook", price: 20 },
];

const LaptopPriceChart = () => {
  return (
    <BarChart
      width={1200}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" fill="#800080" name="Price Range" />
    </BarChart>
  );
};

export default LaptopPriceChart;
