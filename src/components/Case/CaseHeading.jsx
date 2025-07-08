import React from "react";
import { Plus } from "lucide-react";

const CaseHeading = () => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-900">Case Management</h2>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
        <Plus className="h-4 w-4 mr-2" />
        Create Case
      </button>
    </div>
  );
};

export default CaseHeading;
