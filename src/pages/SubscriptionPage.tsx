import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, Crown, Shield, Users, TrendingUp, Target } from 'lucide-react';

const SubscriptionPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small organizations getting started with CSR',
      icon: Target,
      color: 'emerald',
      monthly: 49,
      annual: 490,
      features: [
        'Submit up to 3 projects',
        'Basic impact tracking',
        'Community support',
        'Standard project verification',
        'Email notifications',
        'Basic analytics dashboard',
      ],
      limitations: [
        'No priority support',
        'Limited partner matching',
        'No custom branding',
      ],
      popular: false,
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing organizations with multiple CSR initiatives',
      icon: TrendingUp,
      color: 'blue',
      monthly: 149,
      annual: 1490,
      features: [
        'Submit up to 15 projects',
        'Advanced impact analytics',
        'Priority partner matching',
        'Expedited project verification',
        'Email & phone support',
        'Custom impact reports',
        'SDG alignment tools',
        'Partnership collaboration hub',
      ],
      limitations: [
        'No dedicated account manager',
        'Limited white-label options',
      ],
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Comprehensive solution for large corporations and foundations',
      icon: Crown,
      color: 'purple',
      monthly: 349,
      annual: 3490,
      features: [
        'Unlimited project submissions',
        'Custom impact dashboard',
        'Dedicated account manager',
        'White-label platform options',
        '24/7 priority support',
        'Advanced partner network',
        'Custom integrations',
        'Quarterly strategy sessions',
        'Custom impact measurement',
        'Executive reporting suite',
      ],
      limitations: [],
      popular: false,
    },
  ];

  const additionalFeatures = [
    {
      title: 'Advanced Analytics',
      description: 'Comprehensive impact measurement and ROI tracking',
      icon: TrendingUp,
    },
    {
      title: 'Partner Network',
      description: 'Access to verified organizations and projects worldwide',
      icon: Users,
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full audit trails',
      icon: Shield,
    },
    {
      title: 'Priority Support',
      description: 'Dedicated support team for faster issue resolution',
      icon: Zap,
    },
  ];

  const testimonials = [
    {
      quote: "ImpactHub's Professional plan helped us scale our CSR program from 3 to 15 active projects. The impact tracking is incredible.",
      author: "Sarah Chen",
      role: "CSR Director, TechCorp Global",
      company: "Fortune 500 Company",
    },
    {
      quote: "The Enterprise features give us complete visibility into our global CSR portfolio. Worth every penny.",
      author: "Marcus Johnson",
      role: "Head of Sustainability",
      company: "Global Manufacturing Corp",
    },
  ];

  const getPrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.monthly : plan.annual / 12;
  };

  const getSavings = (plan: any) => {
    const monthlyCost = plan.monthly * 12;
    const annualCost = plan.annual;
    return Math.round(((monthlyCost - annualCost) / monthlyCost) * 100);
  };

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' | 'ring') => {
    const colorMap = {
      emerald: {
        bg: 'bg-emerald-500',
        text: 'text-emerald-600',
        border: 'border-emerald-500',
        ring: 'ring-emerald-500',
      },
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-500',
        ring: 'ring-blue-500',
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-600',
        border: 'border-purple-500',
        ring: 'ring-purple-500',
      },
    };
    return colorMap[color as keyof typeof colorMap][type];
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
            Choose Your Impact Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Select the perfect plan to amplify your CSR impact. All plans include access to our global network of verified projects and partners.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${billingCycle === 'annual' ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-1 text-sm text-emerald-600 font-semibold">Save up to 20%</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-sm border-2 p-8 relative hover:shadow-xl transition-all duration-300 ${
                plan.popular
                  ? `${getColorClasses(plan.color, 'border')} shadow-lg`
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${getColorClasses(plan.color, 'bg')} text-white px-4 py-1 rounded-full text-sm font-medium flex items-center`}>
                  <Star className="h-4 w-4 mr-1" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 ${getColorClasses(plan.color, 'bg')} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">${getPrice(plan)}</span>
                  <span className="text-gray-600">/{billingCycle === 'monthly' ? 'month' : 'month'}</span>
                  {billingCycle === 'annual' && (
                    <div className="text-sm text-emerald-600 font-semibold">
                      Save {getSavings(plan)}% annually
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900">What's included:</h4>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className={`h-5 w-5 ${getColorClasses(plan.color, 'text')} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.limitations.length > 0 && (
                  <>
                    <h4 className="font-semibold text-gray-900 mt-6">Limitations:</h4>
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>

              <button
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? `${getColorClasses(plan.color, 'bg')} text-white hover:opacity-90 shadow-lg`
                    : `bg-gray-100 text-gray-900 hover:bg-gray-200 border-2 ${getColorClasses(plan.color, 'border')} hover:${getColorClasses(plan.color, 'text')}`
                }`}
              >
                {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Powerful Features for Maximum Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-emerald-600">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I change plans anytime?
                </h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely through Stripe.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is there a free trial?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.
                </p>
              </div>
            </div>
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
            Ready to Transform Your CSR Impact?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Start your free 14-day trial today. No credit card required. Join thousands of organizations creating meaningful change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SubscriptionPage;