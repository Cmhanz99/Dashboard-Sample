import React from "react";

const CaseDate = ({case_item}) => {
  return (
    <div className="text-sm text-gray-500">
      Opened: {new Date(case_item.dateOpened).toLocaleDateString()} | Last
      updated: {new Date(case_item.lastUpdate).toLocaleDateString()}
    </div>
  );
};

export default CaseDate;
