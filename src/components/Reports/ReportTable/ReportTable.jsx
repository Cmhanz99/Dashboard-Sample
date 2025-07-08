import React from "react";
import TableHeading from "./TableHeading";
import TableButton from "./TableButton";
import TableData from "./TableData";

const ReportTable = ({ filteredReports, getPriorityColor, getStatusColor }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeading />
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredReports.map((report) => (
            <tr key={report.id} className="hover:bg-gray-50">
              <TableData
                report={report}
                getPriorityColor={getPriorityColor}
                getStatusColor={getStatusColor}
              />
              <TableButton />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
