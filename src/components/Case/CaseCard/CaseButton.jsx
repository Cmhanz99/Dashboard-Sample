import React from "react";

const CaseButton = () => {
  return (
    <div className="flex space-x-2">
      <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
        View Details
      </button>
      <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">
        Update Status
      </button>
    </div>
  );
};

export default CaseButton;
