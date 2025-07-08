import React from "react";
import { AlertTriangle, Users, FileText, Eye } from "lucide-react";

const StatsCards = ({ statsData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg">
            <FileText className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Total Reports</p>
            <p className="text-2xl font-semibold text-gray-900">
              {statsData.totalReports}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="p-2 bg-yellow-100 rounded-lg">
            <Eye className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Active Cases</p>
            <p className="text-2xl font-semibold text-gray-900">
              {statsData.activeCases}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="p-2 bg-green-100 rounded-lg">
            <Users className="h-6 w-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Resolved Cases</p>
            <p className="text-2xl font-semibold text-gray-900">
              {statsData.resolvedCases}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="p-2 bg-red-100 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">High Priority</p>
            <p className="text-2xl font-semibold text-gray-900">
              {statsData.highPriority}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
