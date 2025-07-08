import React from "react";

const HeatmapIntensity = ({location}) => {
  return (
    <div className="flex items-center space-x-2">
      <div
        className={`h-3 w-16 rounded-full ${
          location.intensity === "high"
            ? "bg-red-500"
            : location.intensity === "medium"
            ? "bg-yellow-500"
            : "bg-green-500"
        }`}
      ></div>
      <span className="text-sm font-medium text-gray-700 capitalize">
        {location.intensity}
      </span>
    </div>
  );
};

export default HeatmapIntensity;
