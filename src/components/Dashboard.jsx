import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { sampleReports } from "../data/sample_report";
import { sampleCases } from "../data/sample_case";
import { monthlyData } from "../data/monthly_data";
import { locationData } from "../data/location_data";
import Header from "./Header";
import Navigation from "./Navigation";
import Overview from "./Overview/Overview";
import Reports from "./Reports/Reports";
import CaseHeading from "./Case/CaseHeading";
import CaseRelated from "./Case/CaseCard/CaseRelated";
import CaseAssign from "./Case/CaseCard/CaseAssign";
import CaseDate from "./Case/CaseCard/CaseDate";
import CaseButton from "./Case/CaseCard/CaseButton";
import HeatmapLocation from "./Heatmap/HeatmapLocation";
import HeatmapIntensity from "./Heatmap/HeatmapIntensity";
import HeatmapGraph from "./Heatmap/Graphic_HeatMap/HeatmapGraph";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedTimeframe, setSelectedTimeframe] = useState("month");
  const [reports, setReports] = useState([]);
  const [cases, setCases] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  // Sample data initialization
  useEffect(() => {
    setReports(sampleReports);
    setCases(sampleCases);
  }, []);

  // Statistics data
  const statsData = {
    totalReports: reports.length,
    activeCases: cases.filter((c) => c.status === "Active").length,
    resolvedCases: reports.filter((r) => r.status === "Closed").length,
    highPriority: reports.filter(
      (r) => r.priority === "High" || r.priority === "Critical"
    ).length,
  };

  const caseTypeData = [
    { name: "Online Exploitation", value: 65, color: "#ef4444" },
    { name: "Human Trafficking", value: 35, color: "#f97316" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Under Investigation":
        return "bg-yellow-100 text-yellow-800";
      case "Verified":
        return "bg-red-100 text-red-800";
      case "Closed":
        return "bg-green-100 text-green-800";
      case "Active":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <Overview
            statsData={statsData}
            monthlyData={monthlyData}
            caseTypeData={caseTypeData}
          />
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <Reports
            reports={reports}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            getStatusColor={getStatusColor}
          />
        )}

        {/* Cases Tab */}
        {activeTab === "cases" && (
          <div className="space-y-6">
            <CaseHeading />
            <div className="grid grid-cols-1 gap-6">
              {cases.map((case_item) => (
                <div
                  key={case_item.id}
                  className="bg-white p-6 rounded-lg shadow"
                >
                  <CaseRelated
                    case_item={case_item}
                    getStatusColor={getStatusColor}
                  />
                  <CaseAssign case_item={case_item} />

                  <div className="flex justify-between items-center">
                    <CaseDate case_item={case_item} />
                    <CaseButton />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Heatmap Tab */}
        {activeTab === "heatmap" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Location Heatmap
            </h2>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Cases by Location</h3>
              <div className="space-y-4">
                {locationData.map((location) => (
                  <div
                    key={location.location}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <HeatmapLocation location={location} />
                    <HeatmapIntensity location={location} />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">
                Geographic Distribution
              </h3>
              <HeatmapGraph locationData={locationData} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
