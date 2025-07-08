import React from "react";

const CaseAssign = ({case_item}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div>
        <p className="text-sm font-medium text-gray-500">Assigned To</p>
        <p className="text-sm text-gray-900">{case_item.assignedTo}</p>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">Victims</p>
        <p className="text-sm text-gray-900">{case_item.victims}</p>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">Suspects</p>
        <p className="text-sm text-gray-900">{case_item.suspects}</p>
      </div>
    </div>
  );
};

export default CaseAssign;
