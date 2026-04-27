"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiX } from "react-icons/fi";

const notifications = [
  {
    service: "Startup India",
    status: "Approved",
    icon: "🚀",
    location: "Mumbai",
  },
  {
    service: "PMEGP",
    status: "Sanctioned ₹15L",
    icon: "📋",
    location: "Delhi",
  },
  {
    service: "MUDRA Loan",
    status: "Approved ₹8L",
    icon: "💰",
    location: "Ahmedabad",
  },
  {
    service: "ZED Certificate",
    status: "Issued",
    icon: "🏆",
    location: "Pune",
  },
  {
    service: "Udyam MSME",
    status: "Registered",
    icon: "✅",
    location: "Bangalore",
  },
  {
    service: "80-IAC Tax",
    status: "Exempted",
    icon: "📊",
    location: "Chennai",
  },
  {
    service: "GEM Portal",
    status: "Approved",
    icon: "🛒",
    location: "Hyderabad",
  },
  { service: "IEC Code", status: "Generated", icon: "🌍", location: "Kolkata" },
  {
    service: "CGTMSE",
    status: "Approved ₹50L",
    icon: "🏦",
    location: "Jaipur",
  },
  {
    service: "Stand-Up India",
    status: "Sanctioned",
    icon: "👩‍💼",
    location: "Surat",
  },
];

export default function FloatingAlerts() {
  const [currentNotification, setCurrentNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomIndex = Math.floor(Math.random() * notifications.length);
      setCurrentNotification(notifications[randomIndex]);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    showNotification();
    const interval = setInterval(showNotification, 8000);

    return () => clearInterval(interval);
  }, []);

  if (!currentNotification) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-20 right-6 z-50 max-w-sm"
        >
          <div className="bg-white rounded-xl shadow-2xl border border-border-color overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-success-green/10 border-b border-success-green/20">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-success-green rounded-full mr-2 animate-pulse"></span>
                <span className="text-xs font-medium text-success-green">
                  Just Now
                </span>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <FiX className="w-3 h-3 text-gray-400" />
              </button>
            </div>
            <div className="p-4 flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-navy/10 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                {currentNotification.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-primary-navy truncate">
                  {currentNotification.service}
                </p>
                <p className="text-sm text-success-green font-medium flex items-center">
                  <FiCheck className="w-3 h-3 mr-1" />
                  {currentNotification.status}
                </p>
                <p className="text-xs text-text-muted">
                  Client from {currentNotification.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
