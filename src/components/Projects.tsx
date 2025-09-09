import React, { useState } from 'react';
import { Calendar, DollarSign, Users, Clock, Plus, Search } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Complete overhaul of the company website with modern design and improved UX',
    status: 'In Progress',
    priority: 'High',
    budget: '$45,000',
    spent: '$32,000',
    team: ['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez'],
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    progress: 65
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'Native mobile application for iOS and Android platforms',
    status: 'Planning',
    priority: 'Medium',
    budget: '$85,000',
    spent: '$12,000',
    team: ['Lisa Thompson', 'David Kim', 'James Wilson'],
    startDate: '2024-03-01',
    endDate: '2024-12-15',
    progress: 20
  },
  {
    id: 3,
    name: 'CRM Integration',
    description: 'Integration of new CRM system with existing infrastructure',
    status: 'Completed',
    priority: 'High',
    budget: '$25,000',
    spent: '$23,500',
    team: ['Sarah Johnson', 'Lisa Thompson'],
    startDate: '2023-10-01',
    endDate: '2024-01-31',
    progress: 100
  },
  {
    id: 4,
    name: 'Data Analytics Dashboard',
    description: 'Real-time analytics dashboard for business intelligence',
    status: 'On Hold',
    priority: 'Low',
    budget: '$35,000',
    spent: '$5,000',
    team: ['Michael Chen', 'Emily Rodriguez'],
    startDate: '2024-02-15',
    endDate: '2024-08-30',
    progress: 10
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Progress':
      return 'bg-blue-600 text-blue-100';
    case 'Completed':
      return 'bg-green-600 text-green-100';
    case 'Planning':
      return 'bg-yellow-600 text-yellow-100';
    case 'On Hold':
      return 'bg-red-600 text-red-100';
    default:
      return 'bg-slate-600 text-slate-100';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Low':
      return 'bg-green-100 text-green-800 border-green-200';
    default:
      return 'bg-slate-100 text-slate-800 border-slate-200';
  }
};

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const statuses = ['All', 'In Progress', 'Planning', 'Completed', 'On Hold'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Project Management</h1>
            <p className="text-slate-400">Track and manage all company projects</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
            <Plus className="h-5 w-5" />
            New Project
          </button>
        </div>
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-white text-lg mb-2">{project.name}</h3>
                <p className="text-slate-400 text-sm mb-3">{project.description}</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className={`px-2 py-1 rounded border text-xs font-medium ${getPriorityColor(project.priority)}`}>
                    {project.priority} Priority
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-slate-300 mb-2">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2 text-slate-300">
                <DollarSign className="h-4 w-4" />
                <div className="text-sm">
                  <span className="block text-slate-400">Budget</span>
                  <span className="text-white">{project.budget}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <DollarSign className="h-4 w-4" />
                <div className="text-sm">
                  <span className="block text-slate-400">Spent</span>
                  <span className="text-white">{project.spent}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="h-4 w-4" />
                <div className="text-sm">
                  <span className="block text-slate-400">Start Date</span>
                  <span className="text-white">{new Date(project.startDate).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="h-4 w-4" />
                <div className="text-sm">
                  <span className="block text-slate-400">End Date</span>
                  <span className="text-white">{new Date(project.endDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Users className="h-4 w-4" />
              <div className="text-sm">
                <span className="block text-slate-400 mb-1">Team</span>
                <div className="flex flex-wrap gap-1">
                  {project.team.map((member, index) => (
                    <span key={index} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">No projects found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}