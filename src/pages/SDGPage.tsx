import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Globe, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

const SDGPage = () => {
  const [selectedSDG, setSelectedSDG] = useState<number | null>(null);

  const sdgGoals = [
    {
      id: 1,
      title: 'No Poverty',
      description: 'End poverty in all its forms everywhere',
      color: 'bg-red-500',
      projects: 12,
      funding: '$245,000',
      impact: '15,000 people',
      partners: ['MicroFinance Plus', 'Rural Development Corp', 'Economic Empowerment Alliance'],
    },
    {
      id: 3,
      title: 'Good Health and Well-being',
      description: 'Ensure healthy lives and promote well-being for all at all ages',
      color: 'bg-green-500',
      projects: 18,
      funding: '$420,000',
      impact: '35,000 patients',
      partners: ['HealthTech Solutions', 'Mobile Clinics International', 'Medical Equipment Foundation'],
    },
    {
      id: 4,
      title: 'Quality Education',
      description: 'Ensure inclusive and equitable quality education and promote lifelong learning',
      color: 'bg-blue-600',
      projects: 25,
      funding: '$380,000',
      impact: '12,000 students',
      partners: ['Digital Learning Initiative', 'School Infrastructure Fund', 'Teacher Training Network'],
    },
    {
      id: 6,
      title: 'Clean Water and Sanitation',
      description: 'Ensure availability and sustainable management of water and sanitation for all',
      color: 'bg-cyan-500',
      projects: 15,
      funding: '$295,000',
      impact: '25,000 people',
      partners: ['AquaTech Solutions', 'Clean Water Alliance', 'Sanitation Systems Global'],
    },
    {
      id: 7,
      title: 'Affordable and Clean Energy',
      description: 'Ensure access to affordable, reliable, sustainable and modern energy for all',
      color: 'bg-yellow-500',
      projects: 10,
      funding: '$520,000',
      impact: '18,000 people',
      partners: ['Solar Energy Collective', 'Renewable Power Initiative', 'Green Energy Solutions'],
    },
    {
      id: 8,
      title: 'Decent Work and Economic Growth',
      description: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment',
      color: 'bg-purple-600',
      projects: 20,
      funding: '$350,000',
      impact: '8,500 jobs created',
      partners: ['Skills Development Hub', 'Entrepreneur Support Network', 'Job Creation Alliance'],
    },
    {
      id: 11,
      title: 'Sustainable Cities and Communities',
      description: 'Make cities and human settlements inclusive, safe, resilient and sustainable',
      color: 'bg-orange-500',
      projects: 8,
      funding: '$180,000',
      impact: '45,000 residents',
      partners: ['Urban Planning Collective', 'Smart City Initiative', 'Community Development Fund'],
    },
    {
      id: 13,
      title: 'Climate Action',
      description: 'Take urgent action to combat climate change and its impacts',
      color: 'bg-green-700',
      projects: 14,
      funding: '$275,000',
      impact: '2.5M tons CO2 reduced',
      partners: ['Climate Solutions Network', 'Carbon Offset Alliance', 'Environmental Action Group'],
    },
  ];

  const partnershipHighlights = [
    {
      title: 'Cross-Sector Collaboration Hub',
      description: 'Connecting corporations, NGOs, and government agencies for maximum SDG impact',
      participants: 45,
      initiatives: 23,
      icon: Users,
    },
    {
      title: 'SDG Impact Accelerator',
      description: 'Fast-tracking high-potential projects that address multiple SDG targets',
      participants: 32,
      initiatives: 15,
      icon: TrendingUp,
    },
    {
      title: 'Global Partnership Network',
      description: 'International collaboration platform for cross-border SDG initiatives',
      participants: 78,
      initiatives: 41,
      icon: Globe,
    },
  ];

  const successStories = [
    {
      title: 'Multi-SDG Water & Education Project',
      location: 'Rural Kenya',
      sdgs: ['SDG 4', 'SDG 6'],
      impact: 'Improved water access increased school attendance by 85%',
      funding: '$125,000',
      image: 'https://images.pexels.com/photos/6186518/pexels-photo-6186518.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Clean Energy Healthcare Initiative',
      location: 'Ghana',
      sdgs: ['SDG 3', 'SDG 7'],
      impact: 'Solar-powered clinics serving 15,000 patients annually',
      funding: '$180,000',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Sustainable Agriculture Program',
      location: 'Bangladesh',
      sdgs: ['SDG 1', 'SDG 8'],
      impact: '1,000 farmers increased income by 40% through sustainable practices',
      funding: '$95,000',
      image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

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
            SDG Partnership Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Align your CSR initiatives with the UN Sustainable Development Goals. Join collaborative partnerships that amplify impact and create lasting change across multiple SDG targets.
          </p>
        </motion.div>

        {/* Global SDG Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 mb-12 text-white"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Our SDG Impact Dashboard</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">122</div>
              <div className="text-blue-100 text-sm">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">$2.67M</div>
              <div className="text-blue-100 text-sm">Total SDG Funding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">145K+</div>
              <div className="text-blue-100 text-sm">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">17/17</div>
              <div className="text-blue-100 text-sm">SDGs Addressed</div>
            </div>
          </div>
        </motion.div>

        {/* SDG Goals Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Active SDG Partnerships
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedSDG(selectedSDG === goal.id ? null : goal.id)}
              >
                <div className={`${goal.color} p-4 text-white`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold">SDG {goal.id}</span>
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{goal.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {goal.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3 text-center mb-4">
                    <div>
                      <div className="font-bold text-gray-900">{goal.projects}</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                    <div>
                      <div className="font-bold text-emerald-600">{goal.funding}</div>
                      <div className="text-xs text-gray-500">Funding</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-600">{goal.impact}</div>
                      <div className="text-xs text-gray-500">Impact</div>
                    </div>
                  </div>

                  {selectedSDG === goal.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100 pt-4 mt-4"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">Key Partners:</h4>
                      <div className="space-y-1">
                        {goal.partners.map((partner, idx) => (
                          <div key={idx} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {partner}
                          </div>
                        ))}
                      </div>
                      <button className="mt-3 text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center">
                        View Projects
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Partnership Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Partnership Collaboration Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipHighlights.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>
                <div className="flex justify-between text-sm">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-emerald-600">{program.participants}</div>
                    <div className="text-gray-500">Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl text-blue-600">{program.initiatives}</div>
                    <div className="text-gray-500">Initiatives</div>
                  </div>
                </div>
                <button className="mt-6 w-full py-2 text-emerald-600 hover:text-emerald-700 font-medium flex items-center justify-center border border-emerald-200 hover:border-emerald-300 rounded-lg transition-colors">
                  Join Partnership
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Success Stories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Cross-SDG Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {story.sdgs.map((sdg) => (
                      <span
                        key={sdg}
                        className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {sdg}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="inline-flex items-center">
                      <Globe className="h-4 w-4 mr-1" />
                      {story.location}
                    </span>
                  </p>
                  <p className="text-gray-700 mb-4">
                    {story.impact}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-emerald-600">{story.funding}</span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Read More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Amplify Your SDG Impact?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join our partnership network and connect with organizations working toward the same SDG goals. Together, we can achieve greater impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
              Join Partnership Network
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300">
              Explore SDG Projects
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SDGPage;