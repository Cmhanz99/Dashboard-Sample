import React from "react";

import ReportHeader from "./ReportHeader";
import ReportTable from "./ReportTable/ReportTable";

const Reports = ({
  reports,
  filterStatus,
  setFilterStatus,
  getStatusColor,
}) => {
  const filteredReports = reports.filter((report) => {
    if (filterStatus === "all") return true;
    return report.status === filterStatus;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Critical":
        return "bg-red-500";
      case "High":
        return "bg-orange-500";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };
  return (
    <div className="space-y-6">
      <ReportHeader
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      <ReportTable
        filteredReports={filteredReports}
        getPriorityColor={getPriorityColor}
        getStatusColor={getStatusColor}
      />
    </div>
  );
};

export default Reports;
