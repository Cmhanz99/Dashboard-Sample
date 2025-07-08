import React from "react";

const TableData = ({report, getPriorityColor, getStatusColor}) => {
  return (
    <>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {report.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(report.date).toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {report.type}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {report.location}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
            report.status
          )}`}
        >
          {report.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div
            className={`h-2 w-2 rounded-full mr-2 ${getPriorityColor(
              report.priority
            )}`}
          ></div>
          <span className="text-sm text-gray-900">{report.priority}</span>
        </div>
      </td>
    </>
  );
};

export default TableData;
