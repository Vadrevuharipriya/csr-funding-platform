import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, TrendingUp, Globe, Shield, Zap, CheckCircle, Star } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: Users,
      title: 'Connect & Collaborate',
      description: 'Bridge the gap between CSR funders and impactful organizations seeking support.',
    },
    {
      icon: Target,
      title: 'SDG Alignment',
      description: 'Align your funding with UN Sustainable Development Goals for maximum impact.',
    },
    {
      icon: TrendingUp,
      title: 'Track Impact',
      description: 'Measure and visualize the real-world impact of your CSR investments.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with organizations and projects from around the world.',
    },
    {
      icon: Shield,
      title: 'Verified Projects',
      description: 'All projects undergo rigorous verification to ensure authenticity.',
    },
    {
      icon: Zap,
      title: 'Quick Deployment',
      description: 'Fast-track funding deployment with streamlined processes.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CSR Director, TechCorp Global',
      content: 'ImpactHub transformed how we approach corporate giving. We\'ve funded 15 projects and reached over 10,000 beneficiaries.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Marcus Johnson',
      role: 'Founder, Green Future Initiative',
      content: 'Within 30 days of joining, we secured funding for our renewable energy project serving rural communities.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Priya Patel',
      role: 'Sustainability Lead, EcoVentures',
      content: 'The platform\'s SDG alignment feature helped us find the perfect funding partners for our education initiatives.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const stats = [
    { value: '$2.5M+', label: 'Funding Deployed' },
    { value: '150+', label: 'Projects Funded' },
    { value: '50K+', label: 'Lives Impacted' },
    { value: '25+', label: 'Countries Reached' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transform CSR Impact Through{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Smart Collaboration
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect purpose-driven organizations with corporate funders. Create measurable social impact aligned with UN SDG goals through our intelligent matching platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  Start Creating Impact
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/projects"
                  className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 flex items-center justify-center"
                >
                  Browse Projects
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-2xl opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl opacity-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything you need for impactful CSR
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides comprehensive tools to streamline CSR funding, track impact, and build meaningful partnerships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-emerald-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by impact leaders worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See how organizations are creating meaningful change through our platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to amplify your social impact?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join thousands of organizations creating positive change through strategic CSR partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </Link>
              <Link
                to="/login"
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;