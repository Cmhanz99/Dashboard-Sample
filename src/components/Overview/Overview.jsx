import React from "react";

import StatsCards from "./StatsCards";
import LineCharts from "./LineCharts";
import Charts from "./Charts";

const Overview = ({ monthlyData, statsData, caseTypeData }) => {
  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <StatsCards statsData={statsData} />
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineCharts monthlyData={monthlyData}/>
        <Charts caseTypeData={caseTypeData}/>
      </div>
    </div>
  );
};

export default Overview;
