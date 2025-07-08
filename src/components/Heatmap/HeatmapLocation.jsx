import React from "react";

const HeatmapLocation = ({location}) => {
  return (
    <div>
      <h4 className="font-medium text-gray-900">{location.location}</h4>
      <p className="text-sm text-gray-500">{location.cases} cases reported</p>
    </div>
  );
};

export default HeatmapLocation;
