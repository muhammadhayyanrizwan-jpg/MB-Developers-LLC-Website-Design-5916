import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiMessageSquare, FiHome, FiTool } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email Us',
      details: 'info@mbdevelopment.com',
      subtitle: 'Get a detailed project quote'
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      details: '+1 (555) BUILD-MB',
      subtitle: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: FiMapPin,
      title: 'Visit Our Office',
      details: '123 Construction Ave, New York, NY',
      subtitle: 'Schedule a consultation'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      details: '8:00 AM - 6:00 PM',
      subtitle: 'Monday to Saturday'
    }
  ];

  const projectTypes = [
    'Residential Construction',
    'Commercial Building',
    'Home Renovation',
    'Kitchen Remodeling',
    'Bathroom Remodeling',
    'Home Addition',
    'Office Building',
    'Retail Space',
    'Other'
  ];

  const budgetRanges = [
    'Under $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000 - $1,000,000',
    'Over $1,000,000'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark Blue */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Contact MB Development
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Ready to start your construction project? Get in touch with our team of experts and let's discuss how we can bring your building vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info - White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border border-blue-200"
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiMessageSquare} className="text-3xl text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">Get Free Estimate</h2>
              </div>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-100 border border-green-300 rounded-lg p-4 mb-6"
                >
                  <p className="text-green-700 font-medium">
                    Thank you! Your project inquiry has been submitted. We'll contact you within 24 hours with a detailed estimate.
                  </p>
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-gray-500 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-gray-500 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-gray-500 transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-slate-900 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-900 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-gray-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your construction project, timeline, and any specific requirements..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <SafeIcon icon={FiSend} className="mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Get Free Estimate'}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border border-blue-200">
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Get in Touch</h2>
                <p className="text-gray-700 mb-8">
                  We're here to help you build your dream project. Contact us through any of the following methods:
                </p>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 border border-blue-200"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4"
                      >
                        <SafeIcon icon={info.icon} className="text-xl text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{info.title}</h3>
                        <p className="text-blue-600 font-medium">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Services Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-blue-200 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-slate-900">Our Specialties</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <SafeIcon icon={FiHome} className="text-blue-600 mr-3" />
                    <span className="text-gray-700">Residential</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiTool} className="text-blue-600 mr-3" />
                    <span className="text-gray-700">Commercial</span>
                  </div>
                </div>
              </motion.div>

              {/* Response Promise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl text-center border border-blue-200 shadow-lg"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block mb-4"
                >
                  <SafeIcon icon={FiClock} className="text-4xl text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">24-Hour Response</h3>
                <p className="text-gray-700">
                  We respond to all construction inquiries within 24 hours with a detailed estimate and project timeline.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Light Blue */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Construction FAQs</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Common questions about our construction and building services
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-blue-200 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">How long does construction take?</h3>
                <p className="text-gray-700">Project timelines vary based on size and complexity, typically 3-18 months for major projects.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Do you handle permits?</h3>
                <p className="text-gray-700">Yes, we handle all permit applications and regulatory approvals for your construction project.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What's included in your estimates?</h3>
                <p className="text-gray-700">Our estimates include materials, labor, permits, and project management for transparent pricing.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Do you offer warranties?</h3>
                <p className="text-gray-700">Yes, we provide comprehensive warranties on all construction work and materials used.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;