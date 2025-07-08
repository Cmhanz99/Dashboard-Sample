import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const HeatmapGraph = ({locationData}) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={locationData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="location" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="cases" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HeatmapGraph;
