import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiTool, FiUsers, FiArrowRight, FiStar, FiAward, FiMapPin, FiChevronLeft, FiChevronRight } = FiIcons;

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=800&fit=crop',
      title: 'Premium Construction Services',
      subtitle: 'Building Your Dream Homes & Commercial Spaces',
      description: 'Expert construction and renovation services with over 5 years of experience in residential and commercial projects.'
    },
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=800&fit=crop',
      title: 'Luxury Home Construction',
      subtitle: 'Custom Homes Built to Perfection',
      description: 'From concept to completion, we create stunning residential properties that exceed expectations.'
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop',
      title: 'Commercial Development',
      subtitle: 'Modern Office & Retail Spaces',
      description: 'Professional commercial construction services for offices, retail spaces, and industrial facilities.'
    }
  ];

  const services = [
    {
      icon: FiHome,
      title: 'Residential Construction',
      description: 'Custom homes, renovations, and residential developments'
    },
    {
      icon: FiTool,
      title: 'Commercial Building',
      description: 'Office buildings, retail spaces, and industrial construction'
    },
    {
      icon: FiUsers,
      title: 'Project Management',
      description: 'Complete project oversight from planning to completion'
    }
  ];

  const stats = [
    { icon: FiHome, number: '200+', label: 'Homes Built' },
    { icon: FiUsers, number: '150+', label: 'Happy Clients' },
    { icon: FiAward, number: '5+', label: 'Years Experience' },
    { icon: FiStar, number: '4.9', label: 'Client Rating' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section - Dark Blue Background */}
      <section className="relative h-screen overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-slate-900/70"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold mb-4 text-white"
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
              <motion.h2
                key={`subtitle-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-4xl font-semibold mb-6 text-blue-300"
              >
                {heroSlides[currentSlide].subtitle}
              </motion.h2>
              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl"
              >
                {heroSlides[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg"
                >
                  Get Free Quote
                  <SafeIcon icon={FiArrowRight} className="ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 border border-white/20"
                >
                  View Projects
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
        >
          <SafeIcon icon={FiChevronLeft} className="text-2xl text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
        >
          <SafeIcon icon={FiChevronRight} className="text-2xl text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section - White Background */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Construction Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional building and construction services for residential and commercial projects.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 border border-blue-200"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-6"
                >
                  <SafeIcon icon={service.icon} className="text-5xl text-blue-600" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Gallery - Light Blue Background */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Featured Projects</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Take a look at some of our completed construction projects.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
                title: 'Modern Villa Construction',
                location: 'Beverly Hills, CA'
              },
              {
                image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
                title: 'Luxury Apartment Complex',
                location: 'Manhattan, NY'
              },
              {
                image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop',
                title: 'Commercial Office Building',
                location: 'Downtown LA'
              },
              {
                image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&h=300&fit=crop',
                title: 'Residential Development',
                location: 'Austin, TX'
              },
              {
                image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
                title: 'Custom Home Build',
                location: 'Miami, FL'
              },
              {
                image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
                title: 'Retail Space Construction',
                location: 'Chicago, IL'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-blue-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 flex items-center">
                    <SafeIcon icon={FiMapPin} className="mr-2 text-blue-600" />
                    {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Dark Blue Background */}
      <section className="py-20 bg-slate-900 border-y border-blue-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <SafeIcon icon={stat.icon} className="text-4xl text-blue-300 mx-auto mb-4" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-3xl text-center border border-blue-200 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              Ready to Start Your Construction Project?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's work together to build your dream property with professional construction services and quality craftsmanship.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg"
            >
              Get Free Estimate
              <SafeIcon icon={FiArrowRight} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;