import React from "react";

const CaseRelated = ({case_item, getStatusColor}) => {
  return (
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{case_item.id}</h3>
        <p className="text-sm text-gray-500">
          Related to: {case_item.reportId}
        </p>
      </div>
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
          case_item.status
        )}`}
      >
        {case_item.status}
      </span>
    </div>
  );
};

export default CaseRelated;
