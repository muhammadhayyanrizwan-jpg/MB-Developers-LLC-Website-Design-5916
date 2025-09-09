import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Centered */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="flex items-center space-x-3">
              <motion.img
                whileHover={{ scale: 1.1, rotate: 5 }}
                src="https://i.ibb.co/cXRxP4JT/MB-Developers-LLC-logo.jpg"
                alt="MB Development LLC"
                className="w-12 h-12 rounded-lg shadow-lg border-2 border-white/20"
              />
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold gradient-text hidden sm:block"
              >
                MB Development LLC
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-lg font-medium transition-all duration-300 hover:text-blue-400 ${
                  location.pathname === item.path ? 'text-blue-400' : 'text-white'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-blue-400 transition-colors"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        className="lg:hidden overflow-hidden glass"
      >
        <div className="container mx-auto px-4 py-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: isMenuOpen ? 0 : -50,
                opacity: isMenuOpen ? 1 : 0
              }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`block py-3 text-lg font-medium transition-all duration-300 hover:text-blue-400 hover:pl-4 ${
                  location.pathname === item.path ? 'text-blue-400 pl-4' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;