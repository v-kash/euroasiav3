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
    <div className="bg-white border-2 border-primary-navy rounded-xl p-4 shadow-hard-sm max-w-[240px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="flex items-start gap-3"
        >
          <div className="w-10 h-10 bg-success-green/10 text-success-green rounded-lg flex items-center justify-center flex-shrink-0">
            <FiCheck aria-hidden="true" className="w-5 h-5" />
          </div>
          <div>
            <p className="font-ledger text-[11px] uppercase tracking-[0.12em] text-text-muted">
              Just Now
            </p>
            <p className="text-sm font-bold text-primary-navy">
              {current.service}
            </p>
            <p className="text-xs text-success-green font-semibold">
              {current.status}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
