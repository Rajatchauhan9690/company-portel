import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const departments = ['Engineering', 'Design', 'Sales', 'HR'];

const projectData = [
  {
    name: 'Website Redesign',
    q1: { budget: '$10,000', status: 'On Track' },
    q2: { budget: '$15,000', status: 'Delayed' },
    q3: { budget: '$12,000', status: 'On Track' },
    q4: { budget: '$8,000', status: 'Pending' }
  },
  {
    name: 'Mobile App',
    q1: { budget: '$20,000', status: 'On Track' },
    q2: { budget: '$25,000', status: 'On Hold' },
    q3: { budget: '$30,000', status: 'Delayed' },
    q4: { budget: '$10,000', status: 'On Track' }
  }
];

const stats = [
  { name: 'Total Employees', value: '247', icon: Users, change: '+12%' },
  { name: 'Active Projects', value: '18', icon: TrendingUp, change: '+5%' },
  { name: 'Budget Spent', value: '$180K', icon: DollarSign, change: '+8%' },
  { name: 'Hours Logged', value: '1,240', icon: Clock, change: '+15%' }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'On Track':
      return 'bg-green-600 text-green-100';
    case 'Delayed':
      return 'bg-red-600 text-red-100';
    case 'Pending':
      return 'bg-yellow-600 text-yellow-100';
    case 'On Hold':
      return 'bg-orange-600 text-orange-100';
    default:
      return 'bg-slate-600 text-slate-100';
  }
};

export default function Dashboard() {
  const [activeDepartment, setActiveDepartment] = useState('Engineering');
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Company Dashboard</h1>
        <p className="text-slate-400 text-lg">
          Welcome to the internal portal. Track employees, project status, reports, and more — all in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">{stat.name}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <Icon className="h-8 w-8 text-blue-500" />
              </div>
              <div className="mt-2">
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                <span className="text-slate-400 text-sm"> vs last month</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">REPORTS</h2>
          <p className="text-slate-600">Data visualization and analytics dashboard</p>
        </div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-amber-400 rounded-full opacity-80"></div>
            <div className="w-12 h-12 bg-slate-800 rounded-full opacity-70"></div>
            <div className="flex flex-col gap-2">
              <div className="w-8 h-2 bg-amber-400 rounded"></div>
              <div className="w-6 h-2 bg-slate-700 rounded"></div>
              <div className="w-10 h-2 bg-amber-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-4">DEPARTMENTS</h3>
        <div className="flex gap-4 flex-wrap">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDepartment(dept)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeDepartment === dept
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        <div className="px-6 py-4 bg-slate-750">
          <h3 className="text-xl font-semibold text-white">PROJECT STATUS</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left px-6 py-4 font-medium text-slate-300">Project</th>
                <th className="text-center px-4 py-4 font-medium text-slate-300">Q1<br/><span className="text-sm text-slate-400">Budget | Status</span></th>
                <th className="text-center px-4 py-4 font-medium text-slate-300">Q2<br/><span className="text-sm text-slate-400">Budget | Status</span></th>
                <th className="text-center px-4 py-4 font-medium text-slate-300">Q3<br/><span className="text-sm text-slate-400">Budget | Status</span></th>
                <th className="text-center px-4 py-4 font-medium text-slate-300">Q4<br/><span className="text-sm text-slate-400">Budget | Status</span></th>
              </tr>
            </thead>
            <tbody>
              {projectData.map((project, index) => (
                <tr key={index} className="border-b border-slate-700 last:border-b-0">
                  <td className="px-6 py-6 font-medium text-white">{project.name}</td>
                  {(['q1', 'q2', 'q3', 'q4'] as const).map((quarter) => (
                    <td key={quarter} className="px-4 py-6 text-center">
                      <div className="flex flex-col gap-2 items-center">
                        <span className="text-white font-medium">{project[quarter].budget}</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project[quarter].status)}`}>
                          {project[quarter].status}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}