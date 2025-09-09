import React from 'react';
import { BarChart3, PieChart, TrendingUp, Download, Calendar } from 'lucide-react';

const reportCards = [
  {
    title: 'Monthly Performance',
    description: 'Employee performance metrics for the current month',
    type: 'Bar Chart',
    lastUpdated: '2 hours ago',
    icon: BarChart3,
    color: 'bg-blue-600'
  },
  {
    title: 'Department Distribution',
    description: 'Breakdown of employees across all departments',
    type: 'Pie Chart',
    lastUpdated: '1 day ago',
    icon: PieChart,
    color: 'bg-green-600'
  },
  {
    title: 'Revenue Trends',
    description: 'Quarterly revenue analysis and projections',
    type: 'Line Chart',
    lastUpdated: '3 hours ago',
    icon: TrendingUp,
    color: 'bg-purple-600'
  },
  {
    title: 'Project Timeline',
    description: 'Project milestones and delivery schedules',
    type: 'Gantt Chart',
    lastUpdated: '5 hours ago',
    icon: Calendar,
    color: 'bg-orange-600'
  }
];

const quickStats = [
  { label: 'Total Reports', value: '24', change: '+3 this week' },
  { label: 'Data Sources', value: '12', change: 'All active' },
  { label: 'Scheduled Reports', value: '8', change: 'Next: Tomorrow' },
  { label: 'Storage Used', value: '2.4 GB', change: '15% of limit' }
];

export default function Reports() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Reports & Analytics</h1>
            <p className="text-slate-400">Generate and view comprehensive business reports</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors">
              <Download className="h-5 w-5" />
              Export All
            </button>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
              <BarChart3 className="h-5 w-5" />
              New Report
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-2">{stat.change}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-12 mb-8 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">REPORTS</h2>
          <p className="text-slate-600 text-lg mb-6">
            Comprehensive data visualization and analytics platform for informed decision making
          </p>
          <div className="flex gap-4">
            <button className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors">
              View Dashboard
            </button>
            <button className="border-2 border-slate-800 text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-all">
              Generate Report
            </button>
          </div>
        </div>
        <div className="absolute right-12 top-1/2 transform -translate-y-1/2 opacity-80">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-8 border-slate-800" style={{
                background: `conic-gradient(#F59E0B 0deg 120deg, #1E293B 120deg 200deg, #F59E0B 200deg 360deg)`
              }}></div>
            </div>
            <div className="flex items-end gap-2">
              <div className="w-4 h-8 bg-amber-400 rounded-t"></div>
              <div className="w-4 h-12 bg-slate-700 rounded-t"></div>
              <div className="w-4 h-6 bg-amber-300 rounded-t"></div>
              <div className="w-4 h-10 bg-slate-600 rounded-t"></div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="w-8 h-10 bg-slate-200 rounded mb-2"></div>
              <div className="w-6 h-1 bg-amber-400 rounded mb-1"></div>
              <div className="w-8 h-1 bg-slate-300 rounded mb-1"></div>
              <div className="w-5 h-1 bg-slate-300 rounded"></div>
            </div>
            <div className="w-16 h-16 border-4 border-slate-600 rounded-full relative">
              <div className="absolute -bottom-1 -right-1 w-6 h-1 bg-slate-600 transform rotate-45 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportCards.map((report, index) => {
          const Icon = report.icon;
          return (
            <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all hover:transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className={`${report.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white text-lg">{report.title}</h3>
                    <button className="text-slate-400 hover:text-white transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{report.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs">
                      {report.type}
                    </span>
                    <span className="text-slate-400 text-xs">
                      Updated {report.lastUpdated}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}