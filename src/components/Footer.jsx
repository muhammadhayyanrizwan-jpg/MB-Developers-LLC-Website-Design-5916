import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiHeart } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white mt-20 border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img
                src="https://i.ibb.co/cXRxP4JT/MB-Developers-LLC-logo.jpg"
                alt="MB Development LLC"
                className="w-12 h-12 rounded-lg mr-3 border-2 border-blue-900/20"
              />
              <h3 className="text-xl font-bold text-blue-900">MB Development LLC</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Professional construction and building services with quality craftsmanship and exceptional customer service.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-900">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <SafeIcon icon={FiMail} className="text-blue-600 mr-2" />
                <span className="text-gray-700">info@mbdevelopment.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <SafeIcon icon={FiPhone} className="text-blue-600 mr-2" />
                <span className="text-gray-700">+1 (555) BUILD-MB</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <SafeIcon icon={FiMapPin} className="text-blue-600 mr-2" />
                <span className="text-gray-700">New York, USA</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-900">Services</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Residential Construction</li>
              <li>Commercial Building</li>
              <li>Home Renovations</li>
              <li>Project Management</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-200 mt-8 pt-8 text-center"
        >
          <p className="text-gray-700 mb-2">
            © {currentYear} MB Development LLC. Built with{' '}
            <SafeIcon icon={FiHeart} className="inline text-red-500 mx-1" />
            by our development team.
          </p>
          <p className="text-gray-500 text-sm">
            Licensed & Insured Construction Company
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;