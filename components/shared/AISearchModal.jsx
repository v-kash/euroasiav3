'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ContactButton from '@/components/contact/ContactButton';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiArrowRight, FiZap, FiSend } from 'react-icons/fi';

const allSchemes = [
  { 
    name: 'PMEGP', 
    fullName: 'Prime Minister Employment Generation Programme',
    category: 'Funding', 
    amount: 'Up to ₹50 Lakhs', 
    keywords: ['manufacturing', 'service', 'new business', 'startup', 'loan', 'subsidy', 'employment', 'pmegp'],
    description: 'Subsidy up to 35% for setting up new micro enterprises',
    href: '/services/pmegp'
  },
  { 
    name: 'MUDRA Loan', 
    fullName: 'Micro Units Development & Refinance Agency',
    category: 'Funding', 
    amount: 'Up to ₹20 Lakhs', 
    keywords: ['small business', 'working capital', 'shishu', 'kishore', 'tarun', 'loan', 'mudra'],
    description: 'Collateral-free loans for micro enterprises',
    href: '/services/mudra'
  },
  { 
    name: 'Startup India', 
    fullName: 'Startup India Recognition (DPIIT)',
    category: 'Registration', 
    amount: 'Tax Benefits + Funding Access', 
    keywords: ['startup', 'dpiit', 'innovation', 'technology', 'tax exemption', '80-iac', 'recognition'],
    description: 'Official recognition with tax benefits and funding access',
    href: '/services/startup-india'
  },
  { 
    name: 'ZED Certification', 
    fullName: 'Zero Defect Zero Effect',
    category: 'Quality', 
    amount: '₹5 Lakh Subsidy', 
    keywords: ['zero defect', 'quality', 'manufacturing', 'export', 'certification', 'zed'],
    description: 'Quality certification with government subsidy',
    href: '/services/zed-certification'
  },
  { 
    name: 'CGTMSE', 
    fullName: 'Credit Guarantee Fund Trust for MSEs',
    category: 'Funding', 
    amount: 'Up to ₹10 Crore', 
    keywords: ['collateral free', 'guarantee', 'loan', 'credit', 'bank', 'cgtmse'],
    description: 'Collateral-free credit facility for MSMEs',
    href: '/services/cgtmse'
  },
  { 
    name: '80-IAC Tax Exemption', 
    fullName: 'Income Tax Exemption for Startups',
    category: 'Tax', 
    amount: '100% Tax Exempt for 3 Years', 
    keywords: ['tax', 'income tax', 'startup', 'exemption', 'angel tax', '80iac', '80-iac'],
    description: '100% income tax exemption for eligible startups',
    href: '/services/80-iac'
  },
  { 
    name: 'Stand-Up India', 
    fullName: 'Stand-Up India Scheme',
    category: 'Funding', 
    amount: '₹10 Lakh – ₹1 Crore', 
    keywords: ['women', 'sc', 'st', 'entrepreneur', 'greenfield', 'loan', 'standup'],
    description: 'Loans for SC/ST and women entrepreneurs',
    href: '/services/stand-up-india'
  },
  { 
    name: 'GEM Registration', 
    fullName: 'Government e-Marketplace',
    category: 'Marketplace', 
    amount: 'Access to Govt Orders', 
    keywords: ['government', 'tender', 'marketplace', 'vendor', 'seller', 'orders', 'gem'],
    description: 'Sell directly to government departments',
    href: '/services/gem-registration'
  },
  { 
    name: 'Udyam MSME', 
    fullName: 'Udyam Registration (MSME)',
    category: 'Registration', 
    amount: 'Priority Lending + Benefits', 
    keywords: ['msme', 'micro', 'small', 'medium', 'registration', 'udyog', 'udyam'],
    description: 'Official MSME registration with multiple benefits',
    href: '/services/udyam-registration'
  },
  { 
    name: 'IEC Code', 
    fullName: 'Import Export Code',
    category: 'Export', 
    amount: 'Export Benefits', 
    keywords: ['import', 'export', 'international', 'trade', 'dgft', 'customs', 'iec'],
    description: 'Mandatory code for import/export business',
    href: '/services/iec-registration'
  },
  { 
    name: 'FSSAI License', 
    fullName: 'Food Safety License',
    category: 'License', 
    amount: 'Mandatory Compliance', 
    keywords: ['food', 'fssai', 'license', 'safety', 'restaurant', 'manufacturing'],
    description: 'Mandatory license for food businesses',
    href: '/services/fssai-license'
  },
  { 
    name: 'ISO Certification', 
    fullName: 'ISO Quality Certification',
    category: 'Certification', 
    amount: 'Quality Standards', 
    keywords: ['iso', 'quality', 'certification', '9001', '14001', '22000'],
    description: 'International quality management certification',
    href: '/services/iso-certification'
  },
];

const suggestedQueries = [
  'I need funding for my startup',
  'Tax exemption for new business',
  'Loan without collateral',
  'Women entrepreneur schemes',
  'How to register my MSME?',
];

export default function AISearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [chatMode, setChatMode] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setResults([]);
      setChatMode(false);
      setChatHistory([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length > 1) {
      const searchTerms = query.toLowerCase().split(' ');
      const filtered = allSchemes.filter((scheme) => {
        const searchText = `${scheme.name} ${scheme.fullName} ${scheme.category} ${scheme.keywords.join(' ')} ${scheme.description}`.toLowerCase();
        return searchTerms.some((term) => searchText.includes(term));
      });
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSendMessage = () => {
    if (!query.trim()) return;
    
    setChatMode(true);
    const userMessage = query;
    setChatHistory(prev => [...prev, { type: 'user', text: userMessage }]);
    
    const searchTerms = userMessage.toLowerCase().split(' ');
    const matchedSchemes = allSchemes.filter((scheme) => {
      const searchText = `${scheme.name} ${scheme.fullName} ${scheme.category} ${scheme.keywords.join(' ')} ${scheme.description}`.toLowerCase();
      return searchTerms.some((term) => searchText.includes(term));
    });

    let response = '';
    if (matchedSchemes.length > 0) {
      response = `Based on your query, I found ${matchedSchemes.length} relevant scheme(s):\n\n`;
      matchedSchemes.slice(0, 3).forEach(scheme => {
        response += `• **${scheme.name}**: ${scheme.description} (${scheme.amount})\n`;
      });
      response += '\nClick on any scheme below to learn more and apply.';
    } else {
      response = 'I could not find specific schemes matching your query. Please try different keywords like "funding", "loan", "registration", or "tax exemption". You can also contact our experts for personalized guidance.';
    }

    setTimeout(() => {
      setChatHistory(prev => [...prev, { type: 'bot', text: response, schemes: matchedSchemes.slice(0, 3) }]);
    }, 500);
    
    setQuery('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-start justify-center pt-20 px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border-color bg-gradient-to-r from-primary-navy to-secondary-navy">
            <div className="flex items-center text-white">
              <FiZap className="w-5 h-5 mr-2 text-accent" />
              <span className="font-semibold">AI Scheme Finder</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Area */}
          {chatMode && chatHistory.length > 0 && (
            <div className="max-h-[300px] overflow-y-auto p-4 space-y-4 bg-light-bg">
              {chatHistory.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.type === 'user' 
                      ? 'bg-primary-navy text-white' 
                      : 'bg-white border border-border-color'
                  }`}>
                    <p className={`text-sm whitespace-pre-line ${msg.type === 'user' ? 'text-white' : 'text-text-dark'}`}>
                      {msg.text}
                    </p>
                    {msg.schemes && msg.schemes.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {msg.schemes.map((scheme, sIdx) => (
                          <Link
                            key={sIdx}
                            href={scheme.href}
                            onClick={onClose}
                            className="flex items-center justify-between p-3 bg-light-bg rounded-xl hover:bg-accent/10 transition-colors group"
                          >
                            <div>
                              <p className="font-semibold text-primary-navy text-sm">{scheme.name}</p>
                              <p className="text-xs text-text-muted">{scheme.amount}</p>
                            </div>
                            <FiArrowRight className="w-4 h-4 text-accent" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Search Input */}
          <div className="p-4 border-b border-border-color">
            <div className="relative flex items-center">
              <FiSearch className="absolute left-4 w-5 h-5 text-text-muted" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about schemes... e.g., 'I need funding for manufacturing'"
                className="w-full pl-12 pr-12 py-4 text-base border-2 border-border-color rounded-xl focus:border-primary-navy focus:ring-2 focus:ring-primary-navy/20 focus:outline-none transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={!query.trim()}
                className="absolute right-2 p-2 bg-primary-navy text-white rounded-lg hover:bg-secondary-navy disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <FiSend className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results or Suggestions */}
          <div className="max-h-[300px] overflow-y-auto">
            {results.length > 0 ? (
              <div className="p-2">
                <p className="px-4 py-2 text-xs font-semibold text-text-muted uppercase">
                  {results.length} Matching Scheme{results.length > 1 ? 's' : ''}
                </p>
                {results.map((scheme, idx) => (
                  <Link
                    key={idx}
                    href={scheme.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-4 hover:bg-light-bg rounded-xl transition-colors group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-primary-navy group-hover:text-accent-dark transition-colors">
                          {scheme.name}
                        </p>
                        <span className="px-2 py-0.5 bg-primary-navy/10 text-primary-navy text-xs font-medium rounded">
                          {scheme.category}
                        </span>
                      </div>
                      <p className="text-sm text-text-muted">{scheme.description}</p>
                      <p className="text-sm font-semibold text-accent-text mt-1">{scheme.amount}</p>
                    </div>
                    <FiArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            ) : !chatMode && (
              <div className="p-4">
                <p className="text-sm text-text-muted text-center mb-4">Try asking:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {suggestedQueries.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => setQuery(suggestion)}
                      className="px-4 py-2 text-sm bg-light-bg text-text-dark rounded-full hover:bg-primary-navy hover:text-white transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-3 bg-light-bg border-t border-border-color">
            <p className="text-xs text-text-muted text-center">
              Can&apos;t find what you need? <ContactButton onClick={onClose} className="text-primary-navy font-medium hover:underline">Talk to our experts</ContactButton>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
