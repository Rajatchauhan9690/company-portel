import React, { useState } from 'react';
import { User, Bell, Shield, Palette, Globe, Database, Save } from 'lucide-react';

const settingsSections = [
  {
    title: 'Profile Settings',
    icon: User,
    items: [
      { label: 'Full Name', type: 'input', value: 'John Doe' },
      { label: 'Email Address', type: 'input', value: 'john.doe@company.com' },
      { label: 'Job Title', type: 'input', value: 'Senior Developer' },
      { label: 'Department', type: 'select', value: 'Engineering', options: ['Engineering', 'Design', 'Sales', 'HR'] }
    ]
  },
  {
    title: 'Notifications',
    icon: Bell,
    items: [
      { label: 'Email Notifications', type: 'toggle', value: true },
      { label: 'Push Notifications', type: 'toggle', value: false },
      { label: 'SMS Alerts', type: 'toggle', value: true },
      { label: 'Weekly Summary', type: 'toggle', value: true }
    ]
  },
  {
    title: 'Privacy & Security',
    icon: Shield,
    items: [
      { label: 'Two-Factor Authentication', type: 'toggle', value: true },
      { label: 'Session Timeout', type: 'select', value: '30 minutes', options: ['15 minutes', '30 minutes', '1 hour', '4 hours'] },
      { label: 'Login Alerts', type: 'toggle', value: true },
      { label: 'Data Export', type: 'button', value: 'Request Data' }
    ]
  },
  {
    title: 'Appearance',
    icon: Palette,
    items: [
      { label: 'Theme', type: 'select', value: 'Dark', options: ['Light', 'Dark', 'Auto'] },
      { label: 'Language', type: 'select', value: 'English', options: ['English', 'Spanish', 'French', 'German'] },
      { label: 'Compact Mode', type: 'toggle', value: false },
      { label: 'Animations', type: 'toggle', value: true }
    ]
  }
];

export default function Settings() {
  const [settings, setSettings] = useState(() => {
    const initialSettings: Record<string, any> = {};
    settingsSections.forEach(section => {
      section.items.forEach(item => {
        initialSettings[item.label] = item.value;
      });
    });
    return initialSettings;
  });

  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = (label: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [label]: value
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    console.log('Saving settings:', settings);
    setHasChanges(false);
  };

  const renderSettingItem = (item: any) => {
    switch (item.type) {
      case 'input':
        return (
          <input
            type="text"
            value={settings[item.label] || ''}
            onChange={(e) => handleChange(item.label, e.target.value)}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        );
      case 'select':
        return (
          <select
            value={settings[item.label] || ''}
            onChange={(e) => handleChange(item.label, e.target.value)}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          >
            {item.options?.map((option: string) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'toggle':
        return (
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings[item.label] || false}
              onChange={(e) => handleChange(item.label, e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        );
      case 'button':
        return (
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            {item.value}
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
            <p className="text-slate-400">Manage your account preferences and system settings</p>
          </div>
          {hasChanges && (
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Save className="h-5 w-5" />
              Save Changes
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {settingsSections.map((section, sectionIndex) => {
          const Icon = section.icon;
          return (
            <div key={sectionIndex} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <Icon className="h-6 w-6 text-blue-500" />
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              </div>
              
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {item.label}
                    </label>
                    {renderSettingItem(item)}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 bg-slate-800 rounded-xl p-6 border border-slate-700">
        <div className="flex items-center gap-3 mb-6">
          <Database className="h-6 w-6 text-blue-500" />
          <h2 className="text-xl font-semibold text-white">System Information</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-slate-400 text-sm">Version</p>
            <p className="text-white font-medium">2.1.0</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Last Updated</p>
            <p className="text-white font-medium">Dec 15, 2024</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Server Status</p>
            <p className="text-green-400 font-medium">Online</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Uptime</p>
            <p className="text-white font-medium">99.9%</p>
          </div>
        </div>
      </div>
    </div>
  );
}