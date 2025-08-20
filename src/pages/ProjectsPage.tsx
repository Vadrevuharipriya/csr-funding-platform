import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Calendar, Users, DollarSign, Target, Heart } from 'lucide-react';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSDG, setSelectedSDG] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const sdgGoals = [
    { id: 'all', name: 'All SDGs', color: 'gray' },
    { id: 'sdg1', name: 'No Poverty', color: 'red' },
    { id: 'sdg3', name: 'Good Health', color: 'green' },
    { id: 'sdg4', name: 'Quality Education', color: 'blue' },
    { id: 'sdg6', name: 'Clean Water', color: 'cyan' },
    { id: 'sdg7', name: 'Affordable Energy', color: 'yellow' },
    { id: 'sdg8', name: 'Decent Work', color: 'purple' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Clean Water Access for Rural Communities',
      organization: 'WaterBridge Foundation',
      description: 'Providing sustainable clean water solutions to 5 rural villages in Kenya through solar-powered water purification systems.',
      location: 'Kenya, East Africa',
      targetFunding: 50000,
      currentFunding: 32000,
      supporters: 127,
      deadline: '2025-04-15',
      sdg: 'sdg6',
      sdgLabel: 'Clean Water & Sanitation',
      impact: '2,500 people will gain access to clean water',
      image: 'https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
    },
    {
      id: 2,
      title: 'Digital Learning Centers for Underserved Youth',
      organization: 'TechForGood Initiative',
      description: 'Establishing computer labs and coding programs in underserved communities to bridge the digital divide.',
      location: 'Mumbai, India',
      targetFunding: 75000,
      currentFunding: 45000,
      supporters: 89,
      deadline: '2025-05-20',
      sdg: 'sdg4',
      sdgLabel: 'Quality Education',
      impact: '500 students will receive digital literacy training',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
    },
    {
      id: 3,
      title: 'Solar Energy for Healthcare Clinics',
      organization: 'Bright Health Solutions',
      description: 'Installing solar power systems in remote healthcare facilities to ensure reliable electricity for medical equipment.',
      location: 'Ghana, West Africa',
      targetFunding: 60000,
      currentFunding: 18000,
      supporters: 56,
      deadline: '2025-06-30',
      sdg: 'sdg7',
      sdgLabel: 'Affordable & Clean Energy',
      impact: '10 clinics serving 8,000 patients will have reliable power',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
    },
    {
      id: 4,
      title: 'Women\'s Entrepreneurship Program',
      organization: 'Empower Women Network',
      description: 'Supporting women entrepreneurs with microloans, training, and mentorship to start sustainable businesses.',
      location: 'Guatemala, Central America',
      targetFunding: 40000,
      currentFunding: 28000,
      supporters: 112,
      deadline: '2025-03-31',
      sdg: 'sdg8',
      sdgLabel: 'Decent Work & Economic Growth',
      impact: '200 women will receive entrepreneurship support',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
    },
    {
      id: 5,
      title: 'Mobile Health Clinics for Remote Areas',
      organization: 'Health Reach Foundation',
      description: 'Deploying mobile medical units to provide healthcare services in remote and underserved communities.',
      location: 'Peru, South America',
      targetFunding: 90000,
      currentFunding: 35000,
      supporters: 73,
      deadline: '2025-07-15',
      sdg: 'sdg3',
      sdgLabel: 'Good Health & Well-being',
      impact: '15,000 people will receive healthcare access',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
    },
    {
      id: 6,
      title: 'Poverty Alleviation Through Agriculture',
      organization: 'Harvest Hope Collective',
      description: 'Training smallholder farmers in sustainable agriculture techniques and providing access to markets.',
      location: 'Bangladesh, South Asia',
      targetFunding: 55000,
      currentFunding: 41000,
      supporters: 98,
      deadline: '2025-04-30',
      sdg: 'sdg1',
      sdgLabel: 'No Poverty',
      impact: '1,000 farming families will increase their income by 40%',
      image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
    },
  ];

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSDG = selectedSDG === 'all' || project.sdg === selectedSDG;
    return matchesSearch && matchesSDG;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Discover Impactful Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Support verified projects that are creating positive change and advancing the UN Sustainable Development Goals.
          </motion.p>
        </div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* SDG Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedSDG}
                onChange={(e) => setSelectedSDG(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none"
              >
                {sdgGoals.map((goal) => (
                  <option key={goal.id} value={goal.id}>
                    {goal.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="newest">Newest First</option>
                <option value="funding">Most Funded</option>
                <option value="deadline">Ending Soon</option>
                <option value="supporters">Most Supporters</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {project.sdgLabel}
                </div>
                {project.verified && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white p-1 rounded-full">
                    <Target className="h-4 w-4" />
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">by {project.organization}</p>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Location and Deadline */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{project.deadline}</span>
                  </div>
                </div>

                {/* Funding Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Funding Progress</span>
                    <span className="font-medium text-gray-900">
                      {Math.round(getProgressPercentage(project.currentFunding, project.targetFunding))}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressPercentage(project.currentFunding, project.targetFunding)}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      {formatCurrency(project.currentFunding)} raised
                    </span>
                    <span className="font-medium text-gray-900">
                      of {formatCurrency(project.targetFunding)}
                    </span>
                  </div>
                </div>

                {/* Impact and Supporters */}
                <div className="mb-6">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Target className="h-4 w-4 mr-1 text-emerald-600" />
                    <span>{project.impact}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1 text-blue-600" />
                    <span>{project.supporters} supporters</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-200 font-medium flex items-center justify-center">
                    <Heart className="h-4 w-4 mr-2" />
                    Support
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {filteredProjects.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Load More Projects
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Target className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;