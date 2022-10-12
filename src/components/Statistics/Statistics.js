import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const topics = useLoaderData();
  console.log(topics.data);

  return (
    <div className="w-100 mx-auto mt-40 ">
      <LineChart
        height={550}
        width={370}
        className="md:w-4/5 mx-auto my-8"
        data={topics.data}
        margin={{ top: 10, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Statistics;
