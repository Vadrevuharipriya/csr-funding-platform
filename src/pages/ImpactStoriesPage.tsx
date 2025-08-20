import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Target, MapPin, Calendar, Award } from 'lucide-react';

const ImpactStoriesPage = () => {
  const impactStories = [
    {
      id: 1,
      title: 'Transforming Education in Rural Kenya',
      organization: 'TechBridge Foundation',
      location: 'Nakuru County, Kenya',
      category: 'Education Technology',
      duration: '18 months',
      totalImpact: '2,500 students',
      funding: '$45,000',
      sdg: 'SDG 4: Quality Education',
      image: 'https://images.pexels.com/photos/8471923/pexels-photo-8471923.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { metric: 'Students Reached', value: '2,500+', icon: Users },
        { metric: 'Literacy Rate Increase', value: '85%', icon: TrendingUp },
        { metric: 'Schools Connected', value: '15', icon: Target },
        { metric: 'Teachers Trained', value: '120', icon: Award },
      ],
      story: 'When we first arrived in Nakuru County, many children were walking 10+ kilometers to reach the nearest school with basic learning materials. Through our partnership with local CSR funders, we established digital learning centers in 15 rural schools, providing tablets, e-learning content, and teacher training. Today, these students are not only attending school regularly but are also achieving literacy rates that exceed national averages.',
      testimonial: {
        quote: "My daughter now dreams of becoming a software engineer. Before the digital learning center, she had never seen a computer.",
        author: "Grace Wanjiku",
        role: "Parent and Community Leader"
      }
    },
    {
      id: 2,
      title: 'Clean Water Revolution in Cambodia',
      organization: 'PureFlow Initiative',
      location: 'Siem Reap Province, Cambodia',
      category: 'Water & Sanitation',
      duration: '12 months',
      totalImpact: '8,000 people',
      funding: '$65,000',
      sdg: 'SDG 6: Clean Water & Sanitation',
      image: 'https://images.pexels.com/photos/6186518/pexels-photo-6186518.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { metric: 'People Served', value: '8,000+', icon: Users },
        { metric: 'Water Systems Built', value: '25', icon: Target },
        { metric: 'Health Improvement', value: '70%', icon: TrendingUp },
        { metric: 'Villages Connected', value: '12', icon: MapPin },
      ],
      story: 'Waterborne diseases were affecting 6 out of 10 children in rural Siem Reap. Our solar-powered water purification systems have transformed entire communities. Families no longer spend hours each day collecting water from contaminated sources. Children are attending school instead of fetching water, and community health has improved dramatically.',
      testimonial: {
        quote: "Our village is completely different now. The children are healthy, and women have time to start small businesses.",
        author: "Sophea Chen",
        role: "Village Chief"
      }
    },
    {
      id: 3,
      title: 'Renewable Energy for Healthcare',
      organization: 'Solar Health Network',
      location: 'Northern Ghana',
      category: 'Healthcare & Energy',
      duration: '24 months',
      totalImpact: '15,000 patients',
      funding: '$120,000',
      sdg: 'SDG 3 & 7: Health & Clean Energy',
      image: 'https://images.pexels.com/photos/8853482/pexels-photo-8853482.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { metric: 'Patients Served', value: '15,000+', icon: Users },
        { metric: 'Clinics Powered', value: '18', icon: Target },
        { metric: 'Emergency Response Time', value: '40% faster', icon: TrendingUp },
        { metric: 'Maternal Mortality Reduction', value: '60%', icon: Award },
      ],
      story: 'Remote healthcare clinics in Northern Ghana often operated without reliable electricity, making it impossible to store vaccines, run diagnostic equipment, or provide emergency care at night. Our solar energy systems have revolutionized healthcare delivery, enabling 24/7 medical services and dramatically improving maternal health outcomes.',
      testimonial: {
        quote: "We can now deliver babies safely at night and keep medicines properly refrigerated. This project has saved countless lives.",
        author: "Dr. Kwame Asante",
        role: "Head of Rural Health Services"
      }
    }
  ];

  const globalImpact = {
    totalBeneficiaries: '125,000+',
    projectsCompleted: '87',
    countriesReached: '23',
    partnerOrganizations: '45',
    totalFunding: '$2.3M',
    sdgGoalsAdvanced: '12'
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
            Real Impact Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how CSR partnerships are creating lasting change in communities worldwide. Every project tells a story of transformation, hope, and sustainable development.
          </p>
        </motion.div>

        {/* Global Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-emerald-600 to-blue-700 rounded-2xl p-8 mb-12 text-white"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Our Collective Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{globalImpact.totalBeneficiaries}</div>
              <div className="text-emerald-100 text-sm">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{globalImpact.projectsCompleted}</div>
              <div className="text-emerald-100 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{globalImpact.countriesReached}</div>
              <div className="text-emerald-100 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{globalImpact.partnerOrganizations}</div>
              <div className="text-emerald-100 text-sm">Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{globalImpact.totalFunding}</div>
              <div className="text-emerald-100 text-sm">Total Funding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{globalImpact.sdgGoalsAdvanced}</div>
              <div className="text-emerald-100 text-sm">SDG Goals</div>
            </div>
          </div>
        </motion.div>

        {/* Impact Stories */}
        <div className="space-y-16">
          {impactStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                      {story.sdg}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{story.location}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{story.duration}</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {story.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                      by {story.organization}
                    </p>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                        <result.icon className="h-6 w-6 mx-auto mb-2 text-emerald-600" />
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Story */}
                  <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {story.story}
                    </p>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6">
                    <blockquote className="text-gray-800 italic text-lg mb-4">
                      "{story.testimonial.quote}"
                    </blockquote>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">
                        {story.testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {story.testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Category:</span> {story.category}
                      </div>
                      <div>
                        <span className="font-medium">Funding:</span> {story.funding}
                      </div>
                      <div>
                        <span className="font-medium">Total Impact:</span> {story.totalImpact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Your Impact Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations and funders who are making a difference. Your project could be the next success story that transforms lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Submit Your Project
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300">
              Become a Funder
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImpactStoriesPage;