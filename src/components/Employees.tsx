import React, { useState } from 'react';
import { Search, Filter, Plus, Mail, Phone, MapPin } from 'lucide-react';

const employees = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Frontend Developer',
    department: 'Engineering',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    status: 'Active',
    avatar: 'SJ'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Designer',
    department: 'Design',
    email: 'michael.chen@company.com',
    phone: '+1 (555) 234-5678',
    location: 'New York, NY',
    status: 'Active',
    avatar: 'MC'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Sales Manager',
    department: 'Sales',
    email: 'emily.rodriguez@company.com',
    phone: '+1 (555) 345-6789',
    location: 'Austin, TX',
    status: 'Active',
    avatar: 'ER'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'HR Specialist',
    department: 'HR',
    email: 'david.kim@company.com',
    phone: '+1 (555) 456-7890',
    location: 'Seattle, WA',
    status: 'On Leave',
    avatar: 'DK'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Backend Developer',
    department: 'Engineering',
    email: 'lisa.thompson@company.com',
    phone: '+1 (555) 567-8901',
    location: 'Denver, CO',
    status: 'Active',
    avatar: 'LT'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'UX Designer',
    department: 'Design',
    email: 'james.wilson@company.com',
    phone: '+1 (555) 678-9012',
    location: 'Portland, OR',
    status: 'Active',
    avatar: 'JW'
  }
];

export default function Employees() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Engineering', 'Design', 'Sales', 'HR'];

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || employee.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-600 text-green-100';
      case 'On Leave':
        return 'bg-yellow-600 text-yellow-100';
      case 'Inactive':
        return 'bg-red-600 text-red-100';
      default:
        return 'bg-slate-600 text-slate-100';
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Employee Directory</h1>
            <p className="text-slate-400">Manage and view all company employees</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
            <Plus className="h-5 w-5" />
            Add Employee
          </button>
        </div>
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-slate-400" />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map(employee => (
          <div key={employee.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {employee.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{employee.name}</h3>
                  <p className="text-slate-400 text-sm">{employee.role}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(employee.status)}`}>
                {employee.status}
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{employee.email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{employee.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{employee.location}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700">
              <span className="inline-block bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs">
                {employee.department}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">No employees found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}