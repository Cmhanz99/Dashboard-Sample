import React from "react";
import { Plus } from "lucide-react";

const ReportHeader = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-900">Reports Management</h2>
      <div className="flex space-x-3">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="all">All Status</option>
          <option value="Under Investigation">Under Investigation</option>
          <option value="Verified">Verified</option>
          <option value="Closed">Closed</option>
        </select>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          New Report
        </button>
      </div>
    </div>
  );
};

export default ReportHeader;
