import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiTool, FiUsers, FiLayers, FiHardHat, FiTrendingUp, FiMapPin, FiCheckCircle } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiHome,
      title: 'Residential Construction',
      description: 'Custom homes and residential developments built to your specifications',
      features: ['Custom Home Building', 'Home Renovations', 'Kitchen & Bath Remodeling', 'Home Additions']
    },
    {
      icon: FiTool,
      title: 'Commercial Construction',
      description: 'Professional commercial buildings and industrial facilities',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Industrial Facilities']
    },
    {
      icon: FiLayers,
      title: 'Design-Build Services',
      description: 'Complete design and construction services under one roof',
      features: ['Architectural Design', 'Engineering Services', 'Construction Management', 'Interior Design']
    },
    {
      icon: FiHardHat,
      title: 'General Contracting',
      description: 'Full-service general contracting for all types of projects',
      features: ['Project Planning', 'Permit Acquisition', 'Subcontractor Management', 'Quality Control']
    },
    {
      icon: FiTrendingUp,
      title: 'Property Development',
      description: 'Complete property development from land acquisition to completion',
      features: ['Land Development', 'Residential Communities', 'Commercial Complexes', 'Mixed-Use Projects']
    },
    {
      icon: FiUsers,
      title: 'Project Management',
      description: 'Professional project management services for construction projects',
      features: ['Timeline Management', 'Budget Control', 'Quality Assurance', 'Client Communication']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Initial meeting to discuss your vision, requirements, and budget'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Create detailed architectural plans and obtain necessary permits'
    },
    {
      step: '03',
      title: 'Construction',
      description: 'Execute the build with quality materials and skilled craftsmanship'
    },
    {
      step: '04',
      title: 'Quality Check',
      description: 'Comprehensive inspection and quality assurance testing'
    },
    {
      step: '05',
      title: 'Completion',
      description: 'Final walkthrough, handover, and ongoing support'
    }
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
              Our Construction Services
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive construction and building services for residential and commercial projects. From concept to completion, we deliver quality construction with professional expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-200"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-4"
                >
                  <SafeIcon icon={service.icon} className="text-4xl text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-gray-700 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-center">
                      <SafeIcon icon={FiCheckCircle} className="text-blue-600 mr-2 text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Light Blue */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Recent Projects</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Showcase of our recent construction and building projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
                title: 'Luxury Residential Villa',
                location: 'Beverly Hills, CA',
                type: 'Residential',
                size: '4,500 sq ft'
              },
              {
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
                title: 'Modern Office Complex',
                location: 'Downtown LA',
                type: 'Commercial',
                size: '25,000 sq ft'
              },
              {
                image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
                title: 'Apartment Development',
                location: 'Manhattan, NY',
                type: 'Multi-Family',
                size: '50 Units'
              },
              {
                image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop',
                title: 'Corporate Headquarters',
                location: 'Austin, TX',
                type: 'Commercial',
                size: '15,000 sq ft'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-blue-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {project.type}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <div className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center">
                        <SafeIcon icon={FiMapPin} className="mr-1" />
                        {project.location}
                      </span>
                      <span>{project.size}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Dark Blue */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Construction Process</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery on time and within budget
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-300/30">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 shadow-lg"
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-blue-200 text-sm">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-300/20"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-3xl text-center border border-blue-200 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss your construction project and see how we can help bring your vision to life with our professional building and construction services.
            </p>
            <motion.a
              href="#/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg"
            >
              Get Free Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;