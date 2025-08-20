import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Users, TrendingUp, FileText, Video, ExternalLink, Search, Filter } from 'lucide-react';

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 24 },
    { id: 'guides', name: 'Implementation Guides', count: 8 },
    { id: 'templates', name: 'Templates', count: 6 },
    { id: 'webinars', name: 'Webinars', count: 5 },
    { id: 'case-studies', name: 'Case Studies', count: 3 },
    { id: 'tools', name: 'Assessment Tools', count: 2 },
  ];

  const resources = [
    {
      id: 1,
      title: 'CSR Impact Measurement Framework',
      description: 'A comprehensive guide to measuring and reporting the social impact of your CSR initiatives.',
      category: 'guides',
      type: 'PDF Guide',
      downloadCount: 1247,
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
    },
    {
      id: 2,
      title: 'SDG Alignment Workshop Template',
      description: 'Ready-to-use workshop materials for aligning your projects with UN Sustainable Development Goals.',
      category: 'templates',
      type: 'Workshop Kit',
      downloadCount: 892,
      readTime: 'Workshop Kit',
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
    },
    {
      id: 3,
      title: 'Building Effective CSR Partnerships',
      description: 'Learn strategies for creating lasting partnerships between corporations and impact organizations.',
      category: 'webinars',
      type: 'Webinar',
      downloadCount: 2156,
      readTime: '45 min video',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
    },
    {
      id: 4,
      title: 'Project Proposal Template',
      description: 'A professional template for creating compelling CSR project proposals that get funded.',
      category: 'templates',
      type: 'Word Template',
      downloadCount: 1683,
      readTime: 'Template',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
    },
    {
      id: 5,
      title: 'Digital Transformation in Rural Education',
      description: 'Case study: How TechBridge Foundation scaled digital learning across 50 rural schools.',
      category: 'case-studies',
      type: 'Case Study',
      downloadCount: 756,
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
    },
    {
      id: 6,
      title: 'CSR ROI Calculator',
      description: 'Interactive tool to calculate the return on investment for your CSR programs.',
      category: 'tools',
      type: 'Excel Tool',
      downloadCount: 1432,
      readTime: 'Spreadsheet',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
    },
    {
      id: 7,
      title: 'Stakeholder Engagement Strategies',
      description: 'Best practices for engaging communities, partners, and beneficiaries in CSR projects.',
      category: 'guides',
      type: 'PDF Guide',
      downloadCount: 943,
      readTime: '20 min read',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
    },
    {
      id: 8,
      title: 'Monthly CSR Report Template',
      description: 'Streamlined template for creating monthly impact reports for stakeholders.',
      category: 'templates',
      type: 'PowerPoint',
      downloadCount: 1289,
      readTime: 'Template',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const getIcon = (type: string) => {
    switch (type) {
      case 'PDF Guide': return BookOpen;
      case 'Workshop Kit': return Users;
      case 'Webinar': return Video;
      case 'Word Template': return FileText;
      case 'Case Study': return TrendingUp;
      case 'Excel Tool': return TrendingUp;
      case 'PowerPoint': return FileText;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            CSR Resource Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive guides, templates, and tools to maximize the impact of your CSR initiatives. Everything you need to create meaningful change.
          </p>
        </motion.div>

        {/* Featured Resources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => {
              const IconComponent = getIcon(resource.type);
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="h-5 w-5 text-emerald-600" />
                        <span className="text-sm text-gray-600">{resource.type}</span>
                      </div>
                      <span className="text-sm text-gray-500">{resource.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Download className="h-4 w-4 mr-1" />
                        <span>{resource.downloadCount.toLocaleString()} downloads</span>
                      </div>
                      <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center">
                        Access Resource
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-white min-w-[200px]"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* All Resources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              All Resources
              <span className="text-lg text-gray-500 ml-2">
                ({filteredResources.length} resources)
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResources.map((resource, index) => {
              const IconComponent = getIcon(resource.type);
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <IconComponent className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{resource.type}</span>
                      <div className="text-xs text-gray-500">{resource.readTime}</div>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Download className="h-3 w-3 mr-1" />
                      <span>{resource.downloadCount.toLocaleString()}</span>
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                      Download
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </motion.section>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 to-blue-700 rounded-2xl p-8 mt-16 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Stay Updated with New Resources</h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Get notified when we publish new guides, templates, and tools to help you maximize your CSR impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourcesPage;