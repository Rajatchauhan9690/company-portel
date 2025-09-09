import React, { useState } from 'react';
import { Building2, Bell, User, BarChart3, Users, FolderOpen, FileText, MessageSquare, Megaphone, Settings } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Employees from './components/Employees';
import Projects from './components/Projects';
import Reports from './components/Reports';
import Feedback from './components/Feedback';
import Announcements from './components/Announcements';
import SettingsPage from './components/Settings';

const navigation = [
  { name: 'Dashboard', icon: BarChart3, key: 'dashboard' },
  { name: 'Employees', icon: Users, key: 'employees' },
  { name: 'Projects', icon: FolderOpen, key: 'projects' },
  { name: 'Reports', icon: FileText, key: 'reports' },
  { name: 'Feedback', icon: MessageSquare, key: 'feedback' },
  { name: 'Announcements', icon: Megaphone, key: 'announcements' },
  { name: 'Settings', icon: Settings, key: 'settings' },
];

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'employees':
        return <Employees />;
      case 'projects':
        return <Projects />;
      case 'reports':
        return <Reports />;
      case 'feedback':
        return <Feedback />;
      case 'announcements':
        return <Announcements />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen bg-slate-900 text-white flex flex-col overflow-hidden">
      <header className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex-shrink-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-blue-500" />
            <h1 className="text-xl font-semibold">Company Portal</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-slate-700 rounded-lg transition-colors">
              <Bell className="h-5 w-5 text-yellow-500" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
              <User className="h-5 w-5 text-purple-500" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <nav className="w-80 bg-slate-800 border-r border-slate-700 flex-shrink-0">
          <div className="p-6">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.key}>
                    <button
                      onClick={() => setActiveTab(item.key)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        activeTab === item.key
                          ? 'bg-blue-600 text-white border-2 border-blue-500'
                          : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        <main className="flex-1 bg-slate-900 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;