import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDownload, FiX, FiSmartphone } = FiIcons;

const PWAInstallPrompt = ({ onClose }) => {
  const handleInstall = () => {
    // Check if the app can be installed
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
      window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
        window.deferredPrompt = null;
      });
    } else {
      // Fallback for browsers that don't support the install prompt
      alert('To install this app, please use the browser menu and select "Add to Home Screen" or "Install App"');
    }
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="glass p-6 rounded-2xl max-w-sm w-full mx-auto relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <SafeIcon icon={FiX} className="text-xl" />
          </button>

          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-4"
            >
              <SafeIcon icon={FiSmartphone} className="text-6xl text-blue-400 mx-auto" />
            </motion.div>

            <h3 className="text-xl font-bold mb-2 gradient-text">
              Install MB Development App
            </h3>
            <p className="text-gray-400 mb-6">
              Get quick access to our services and stay updated with our latest work!
            </p>

            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleInstall}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <SafeIcon icon={FiDownload} className="mr-2" />
                Install App
              </motion.button>

              <button
                onClick={onClose}
                className="w-full text-gray-400 hover:text-white py-2 transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;