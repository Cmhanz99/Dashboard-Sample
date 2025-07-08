import React from "react";
import { Users, FileText, MapPin, TrendingUp } from 'lucide-react';

const Navigation = ({activeTab, setActiveTab}) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          {[
            { id: "overview", label: "Overview", icon: TrendingUp },
            { id: "reports", label: "Reports", icon: FileText },
            { id: "cases", label: "Case Management", icon: Users },
            { id: "heatmap", label: "Location Heatmap", icon: MapPin },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center px-1 py-4 text-sm font-medium border-b-2 ${
                activeTab === id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon className="h-4 w-4 mr-2" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
