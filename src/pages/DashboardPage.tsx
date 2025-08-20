import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, TrendingUp, Users, DollarSign, Target, Plus, Eye, Calendar, CheckCircle } from 'lucide-react';

const DashboardPage = () => {
  const [userType] = useState<'funder' | 'seeker'>('funder'); // Mock user type

  const stats = [
    {
      label: 'Total Funding',
      value: '$125,000',
      change: '+12%',
      icon: DollarSign,
      color: 'emerald',
    },
    {
      label: 'Active Projects',
      value: '8',
      change: '+2',
      icon: Target,
      color: 'blue',
    },
    {
      label: 'Lives Impacted',
      value: '2,340',
      change: '+15%',
      icon: Users,
      color: 'purple',
    },
    {
      label: 'Success Rate',
      value: '94%',
      change: '+3%',
      icon: TrendingUp,
      color: 'orange',
    },
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Clean Water Initiative - Rural Kenya',
      status: 'Active',
      funding: '$25,000',
      impact: '500 people',
      deadline: '2025-03-15',
      sdg: 'SDG 6: Clean Water',
    },
    {
      id: 2,
      title: 'Education Technology for Underserved Communities',
      status: 'Completed',
      funding: '$18,000',
      impact: '200 students',
      deadline: '2025-01-20',
      sdg: 'SDG 4: Quality Education',
    },
    {
      id: 3,
      title: 'Renewable Energy Solar Farm Project',
      status: 'In Review',
      funding: '$45,000',
      impact: '1,200 people',
      deadline: '2025-04-30',
      sdg: 'SDG 7: Affordable Energy',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      case 'In Review': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {userType === 'funder' ? 'Funder Dashboard' : 'Project Seeker Dashboard'}
          </h1>
          <p className="text-gray-600 mt-2">
            {userType === 'funder' 
              ? 'Track your CSR investments and their social impact'
              : 'Manage your projects and funding applications'
            }
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {userType === 'funder' ? 'Funded Projects' : 'My Projects'}
                  </h2>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all">
                    <Plus className="h-4 w-4" />
                    <span>{userType === 'funder' ? 'Fund Project' : 'Add Project'}</span>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-4 border border-gray-200 rounded-lg hover:border-emerald-200 hover:bg-emerald-50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                          <button className="p-1 text-gray-400 hover:text-emerald-600 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Funding</p>
                          <p className="font-medium text-gray-900">{project.funding}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Impact</p>
                          <p className="font-medium text-gray-900">{project.impact}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Deadline</p>
                          <p className="font-medium text-gray-900">{project.deadline}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">SDG Goal</p>
                          <p className="font-medium text-emerald-600">{project.sdg}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors">
                  <Plus className="h-5 w-5" />
                  <span>Submit New Project</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                  <BarChart className="h-5 w-5" />
                  <span>View Analytics</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                  <Users className="h-5 w-5" />
                  <span>Impact Stories</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Review</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">Project "Clean Water Initiative" received funding</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">Impact report submitted for "Education Tech"</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">New partnership opportunity available</p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SDG Goals Progress */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">SDG Impact</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">SDG 6: Clean Water</span>
                    <span className="text-sm font-medium text-gray-900">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">SDG 4: Education</span>
                    <span className="text-sm font-medium text-gray-900">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">SDG 7: Energy</span>
                    <span className="text-sm font-medium text-gray-900">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;