'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const notifications = [
  { service: 'Startup India', status: 'Approved', icon: '🚀' },
  { service: 'PMEGP', status: 'Processing', icon: '📋' },
  { service: 'MUDRA Loan', status: 'Sanctioned', icon: '💰' },
  { service: 'ZED Certificate', status: 'Issued', icon: '🏆' },
  { service: 'Udyam MSME', status: 'Registered', icon: '✅' },
  { service: '80-IAC Tax', status: 'Exempted', icon: '📊' },
  { service: 'GEM Portal', status: 'Approved', icon: '🛒' },
  { service: 'IEC Code', status: 'Generated', icon: '🌍' },
];

export default function LiveNotifications() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = notifications[currentIndex];

  return (
    <div className="bg-white rounded-xl p-4 shadow-xl max-w-[220px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex items-start space-x-3"
        >
          <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
            {current.icon}
          </div>
          <div>
            <p className="text-xs text-text-muted">Just Now</p>
            <p className="text-sm font-semibold text-primary-navy">
              {current.service}
            </p>
            <p className="text-xs text-success-green font-medium flex items-center">
              <FiCheck className="w-3 h-3 mr-1" />
              {current.status}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
