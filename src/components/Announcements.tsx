import React from 'react';
import { Calendar, ExternalLink, Clock, User } from 'lucide-react';

const announcements = [
  {
    id: 1,
    title: 'New HR Policies',
    content: 'Updated leave structure, revised reimbursement limits, and a simpler onboarding checklist.',
    author: 'HR',
    date: 'Effective next week',
    action: 'Read more',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Annual Tech Meetup',
    content: 'Talks, workshops, and demos from product and platform teams. Call for papers opens soon.',
    author: 'Engineering',
    date: 'December 2025',
    action: 'View details',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Holiday Calendar',
    content: 'Proposed regional holiday list published for review. Share feedback by the end of this month.',
    author: 'Admin',
    date: '2026 Preview',
    action: 'Open calendar',
    priority: 'low'
  }
];

const quickLinks = [
  { name: 'Holiday Calendar', url: '#' },
  { name: 'Payroll', url: '#' },
  { name: 'IT Support', url: '#' }
];

const recentUpdates = [
  {
    title: 'Office Renovation Complete',
    time: '2 days ago',
    type: 'Facilities'
  },
  {
    title: 'Q4 Results Published',
    time: '1 week ago',
    type: 'Finance'
  },
  {
    title: 'New Employee Orientation',
    time: '2 weeks ago',
    type: 'HR'
  },
  {
    title: 'Security Policy Update',
    time: '3 weeks ago',
    type: 'IT'
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'border-l-red-500';
    case 'medium':
      return 'border-l-yellow-500';
    case 'low':
      return 'border-l-green-500';
    default:
      return 'border-l-slate-500';
  }
};

export default function Announcements() {
  return (
    <>
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">📢 Latest Announcements</h1>
        <p className="text-slate-400">
          Stay updated with the latest company news, policies, and events.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {announcements.map((announcement) => (
          <div 
            key={announcement.id} 
            className={`bg-slate-800 rounded-xl p-6 border-l-4 ${getPriorityColor(announcement.priority)} border-r border-t border-b border-slate-700 hover:border-slate-600 transition-all hover:transform hover:-translate-y-1`}
          >
            <div className="mb-4">
              <h3 className="font-bold text-white text-lg mb-2">{announcement.title}</h3>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{announcement.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{announcement.author}</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {announcement.content}
              </p>
            </div>
            <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1 transition-colors">
              {announcement.action}
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-white mb-6">QUICK LINKS</h2>
          <div className="space-y-3">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="block bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-blue-500 hover:bg-slate-750 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-medium group-hover:text-blue-300">
                    {link.name}
                  </span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-6">RECENT UPDATES</h2>
          <div className="space-y-4">
            {recentUpdates.map((update, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-white mb-1">{update.title}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-400 text-sm">{update.time}</span>
                      <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded-full text-xs">
                        {update.type}
                      </span>
                    </div>
                  </div>
                  <Calendar className="h-4 w-4 text-slate-400 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold text-white mb-2">Stay in the Loop</h3>
          <p className="text-blue-100 mb-6">
            Subscribe to our internal newsletter to get the latest updates delivered directly to your inbox.
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:border-white focus:ring-1 focus:ring-white outline-none"
            />
            <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}