import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTarget, FiUsers, FiTrendingUp, FiHeart, FiHome, FiTool } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiTarget,
      title: 'Our Mission',
      description: 'To deliver exceptional construction and building solutions that exceed client expectations and create lasting value.'
    },
    {
      icon: FiUsers,
      title: 'Our Team',
      description: 'A dedicated team of experienced contractors, architects, and project managers committed to excellence.'
    },
    {
      icon: FiTrendingUp,
      title: 'Our Vision',
      description: 'To be the leading construction company known for innovation, quality, and sustainable building practices.'
    },
    {
      icon: FiHeart,
      title: 'Our Values',
      description: 'Integrity, safety, quality craftsmanship, and environmental responsibility drive everything we do.'
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
              About MB Development LLC
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              We are a passionate team of builders and contractors dedicated to creating exceptional residential and commercial properties that stand the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section - White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-3xl border border-blue-200 shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Story</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Founded with a vision to transform the construction industry through innovative building techniques and exceptional craftsmanship, MB Development LLC has been at the forefront of residential and commercial construction for over 5 years.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We started as a small team of passionate builders who believed that every structure deserves the highest quality construction. Today, we've grown into a trusted partner for homeowners and businesses seeking premium construction services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our commitment to excellence, attention to detail, and customer-first approach has earned us the trust of over 150 satisfied clients and 200+ successful construction projects.
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=400&fit=crop"
                    alt="Construction team at work"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - Light Blue */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Core Values</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              The principles that guide our construction projects and define our company culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 border border-blue-200"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-6"
                >
                  <SafeIcon icon={value.icon} className="text-5xl text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section - White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-3xl border border-blue-200 shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=400&fit=crop"
                    alt="Modern building construction"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </motion.div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Expertise</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <SafeIcon icon={FiHome} className="text-2xl text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Residential Construction</h3>
                      <p className="text-gray-700">Custom homes, renovations, additions, and luxury residential developments.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <SafeIcon icon={FiTool} className="text-2xl text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Commercial Construction</h3>
                      <p className="text-gray-700">Office buildings, retail spaces, warehouses, and industrial facilities.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <SafeIcon icon={FiUsers} className="text-2xl text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Project Management</h3>
                      <p className="text-gray-700">Complete project oversight from initial design to final completion and handover.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section - Dark Blue */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm p-12 rounded-3xl text-center border border-blue-300/30"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Why Choose MB Development?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">5+</div>
                <p className="text-blue-200">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">200+</div>
                <p className="text-blue-200">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">150+</div>
                <p className="text-blue-200">Satisfied Clients</p>
              </div>
            </div>
            <p className="text-xl text-blue-100 mt-8 max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern construction techniques to deliver buildings that not only meet your requirements but exceed your expectations in quality, durability, and aesthetic appeal.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;