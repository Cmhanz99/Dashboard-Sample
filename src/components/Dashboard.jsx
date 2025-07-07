import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { AlertTriangle, Users, FileText, MapPin, TrendingUp, Eye, Calendar, Filter, Download, Plus, Search, Bell } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');
  const [reports, setReports] = useState([]);
  const [cases, setCases] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample data initialization
  useEffect(() => {
    const sampleReports = [
      {
        id: 'RPT-2024-001',
        date: '2024-07-05',
        type: 'Online Exploitation',
        location: 'Lahug, Cebu City',
        status: 'Under Investigation',
        priority: 'High',
        reporter: 'Anonymous',
        description: 'Suspected online exploitation of minors through social media platforms'
      },
      {
        id: 'RPT-2024-002',
        date: '2024-07-03',
        type: 'Human Trafficking',
        location: 'Colon, Cebu City',
        status: 'Verified',
        priority: 'Critical',
        reporter: 'Local Resident',
        description: 'Forced labor activities reported in local establishment'
      },
      {
        id: 'RPT-2024-003',
        date: '2024-07-01',
        type: 'Online Exploitation',
        location: 'IT Park, Cebu City',
        status: 'Closed',
        priority: 'Medium',
        reporter: 'NGO Partner',
        description: 'Cybersex trafficking case successfully resolved'
      },
      {
        id: 'RPT-2024-004',
        date: '2024-06-28',
        type: 'Human Trafficking',
        location: 'Mandaue City',
        status: 'Under Investigation',
        priority: 'High',
        reporter: 'Police Report',
        description: 'Cross-border trafficking activities detected'
      }
    ];

    const sampleCases = [
      {
        id: 'CASE-2024-001',
        reportId: 'RPT-2024-001',
        status: 'Active',
        assignedTo: 'Investigation Team A',
        victims: 3,
        suspects: 2,
        dateOpened: '2024-07-05',
        lastUpdate: '2024-07-06'
      },
      {
        id: 'CASE-2024-002',
        reportId: 'RPT-2024-002',
        status: 'Active',
        assignedTo: 'Investigation Team B',
        victims: 5,
        suspects: 1,
        dateOpened: '2024-07-03',
        lastUpdate: '2024-07-07'
      }
    ];

    setReports(sampleReports);
    setCases(sampleCases);
  }, []);

  // Statistics data
  const statsData = {
    totalReports: reports.length,
    activeCases: cases.filter(c => c.status === 'Active').length,
    resolvedCases: reports.filter(r => r.status === 'Closed').length,
    highPriority: reports.filter(r => r.priority === 'High' || r.priority === 'Critical').length
  };

  // Chart data
  const monthlyData = [
    { month: 'Jan', reports: 12, cases: 8 },
    { month: 'Feb', reports: 15, cases: 10 },
    { month: 'Mar', reports: 18, cases: 12 },
    { month: 'Apr', reports: 22, cases: 15 },
    { month: 'May', reports: 28, cases: 18 },
    { month: 'Jun', reports: 32, cases: 20 },
    { month: 'Jul', reports: 25, cases: 16 }
  ];

  const caseTypeData = [
    { name: 'Online Exploitation', value: 65, color: '#ef4444' },
    { name: 'Human Trafficking', value: 35, color: '#f97316' }
  ];

  const locationData = [
    { location: 'Cebu City', cases: 45, intensity: 'high' },
    { location: 'Mandaue City', cases: 28, intensity: 'medium' },
    { location: 'Lapu-Lapu City', cases: 15, intensity: 'low' },
    { location: 'Talisay City', cases: 12, intensity: 'low' },
    { location: 'Minglanilla', cases: 8, intensity: 'low' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Investigation': return 'bg-yellow-100 text-yellow-800';
      case 'Verified': return 'bg-red-100 text-red-800';
      case 'Closed': return 'bg-green-100 text-green-800';
      case 'Active': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'bg-red-500';
      case 'High': return 'bg-orange-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredReports = reports.filter(report => {
    if (filterStatus === 'all') return true;
    return report.status === filterStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">LGU Cebu Anti-Trafficking Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
              <div className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'reports', label: 'Reports', icon: FileText },
              { id: 'cases', label: 'Case Management', icon: Users },
              { id: 'heatmap', label: 'Location Heatmap', icon: MapPin }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center px-1 py-4 text-sm font-medium border-b-2 ${
                  activeTab === id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Total Reports</p>
                    <p className="text-2xl font-semibold text-gray-900">{statsData.totalReports}</p>
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
                    <p className="text-2xl font-semibold text-gray-900">{statsData.activeCases}</p>
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
                    <p className="text-2xl font-semibold text-gray-900">{statsData.resolvedCases}</p>
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
                    <p className="text-2xl font-semibold text-gray-900">{statsData.highPriority}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Monthly Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="reports" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="cases" stroke="#ef4444" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Case Types Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={caseTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {caseTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
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

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Report ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priority
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredReports.map((report) => (
                    <tr key={report.id} className="hover:bg-gray-50">
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
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`h-2 w-2 rounded-full mr-2 ${getPriorityColor(report.priority)}`}></div>
                          <span className="text-sm text-gray-900">{report.priority}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-green-600 hover:text-green-900">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Cases Tab */}
        {activeTab === 'cases' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Case Management</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Create Case
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {cases.map((case_item) => (
                <div key={case_item.id} className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{case_item.id}</h3>
                      <p className="text-sm text-gray-500">Related to: {case_item.reportId}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(case_item.status)}`}>
                      {case_item.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Assigned To</p>
                      <p className="text-sm text-gray-900">{case_item.assignedTo}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Victims</p>
                      <p className="text-sm text-gray-900">{case_item.victims}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Suspects</p>
                      <p className="text-sm text-gray-900">{case_item.suspects}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Opened: {new Date(case_item.dateOpened).toLocaleDateString()} | 
                      Last updated: {new Date(case_item.lastUpdate).toLocaleDateString()}
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                        View Details
                      </button>
                      <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">
                        Update Status
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Heatmap Tab */}
        {activeTab === 'heatmap' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Location Heatmap</h2>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Cases by Location</h3>
              <div className="space-y-4">
                {locationData.map((location) => (
                  <div key={location.location} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{location.location}</h4>
                      <p className="text-sm text-gray-500">{location.cases} cases reported</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`h-3 w-16 rounded-full ${
                        location.intensity === 'high' ? 'bg-red-500' :
                        location.intensity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {location.intensity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Geographic Distribution</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={locationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="location" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="cases" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;