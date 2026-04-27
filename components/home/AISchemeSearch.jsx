'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiArrowRight, FiZap } from 'react-icons/fi';

const allSchemes = [
  { name: 'PMEGP', category: 'Funding', amount: 'Up to ₹25 Lakhs', keywords: ['manufacturing', 'service', 'new business', 'startup', 'loan', 'subsidy', 'employment'], href: '/schemes/pmegp' },
  { name: 'MUDRA Loan', category: 'Funding', amount: 'Up to ₹10 Lakhs', keywords: ['small business', 'working capital', 'shishu', 'kishore', 'tarun', 'loan'], href: '/schemes/mudra' },
  { name: 'Startup India', category: 'Registration', amount: 'Tax Benefits', keywords: ['startup', 'dpiit', 'innovation', 'technology', 'tax exemption', '80-iac'], href: '/schemes/startup-india' },
  { name: 'ZED Certification', category: 'Quality', amount: '₹5L Subsidy', keywords: ['zero defect', 'quality', 'manufacturing', 'export', 'certification'], href: '/schemes/zed' },
  { name: 'CGTMSE', category: 'Funding', amount: 'Up to ₹2 Crore', keywords: ['collateral free', 'guarantee', 'loan', 'credit', 'bank'], href: '/schemes/cgtmse' },
  { name: '80-IAC Tax Exemption', category: 'Tax', amount: '100% Exempt 3 Years', keywords: ['tax', 'income tax', 'startup', 'exemption', 'angel tax'], href: '/schemes/80-iac' },
  { name: 'Stand-Up India', category: 'Funding', amount: '₹10L – ₹1Cr', keywords: ['women', 'sc', 'st', 'entrepreneur', 'greenfield', 'loan'], href: '/schemes/stand-up-india' },
  { name: 'GEM Registration', category: 'Marketplace', amount: 'Govt Orders', keywords: ['government', 'tender', 'marketplace', 'vendor', 'seller', 'orders'], href: '/schemes/gem' },
  { name: 'Udyam MSME', category: 'Registration', amount: 'Priority Lending', keywords: ['msme', 'micro', 'small', 'medium', 'registration', 'udyog'], href: '/schemes/udyam' },
  { name: 'IEC Code', category: 'Export', amount: 'Export Benefits', keywords: ['import', 'export', 'international', 'trade', 'dgft', 'customs'], href: '/schemes/iec' },
];

const suggestedQueries = [
  'I need funding for my startup',
  'Tax exemption for new business',
  'Loan without collateral',
  'Women entrepreneur schemes',
  'Export business registration',
];

export default function AISchemeSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (query.length > 2) {
      const searchTerms = query.toLowerCase().split(' ');
      const filtered = allSchemes.filter((scheme) => {
        const searchText = `${scheme.name} ${scheme.category} ${scheme.keywords.join(' ')}`.toLowerCase();
        return searchTerms.some((term) => searchText.includes(term));
      });
      setResults(filtered.slice(0, 5));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    inputRef.current?.focus();
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            <FiZap className="w-4 h-4 mr-1" />
            AI-Powered Search
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-3">
            Find the Right Scheme for Your Business
          </h2>
          <p className="text-text-muted">
            Describe your needs and we will match you with the best government schemes
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="relative">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="E.g., I need funding for my manufacturing business..."
              className="w-full pl-14 pr-12 py-5 text-lg border-2 border-border-color rounded-2xl focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FiX className="w-5 h-5 text-text-muted" />
              </button>
            )}
          </div>

          {/* Results Dropdown */}
          <AnimatePresence>
            {isOpen && results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-border-color overflow-hidden z-20"
              >
                <div className="p-2">
                  <p className="px-4 py-2 text-xs font-semibold text-text-muted uppercase">
                    Matching Schemes ({results.length})
                  </p>
                  {results.map((scheme, idx) => (
                    <Link
                      key={idx}
                      href={scheme.href}
                      className="flex items-center justify-between p-4 hover:bg-light-bg rounded-xl transition-colors group"
                    >
                      <div>
                        <p className="font-semibold text-primary-navy group-hover:text-accent transition-colors">
                          {scheme.name}
                        </p>
                        <p className="text-sm text-text-muted">
                          {scheme.category} • {scheme.amount}
                        </p>
                      </div>
                      <FiArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
                <div className="border-t border-border-color p-4 bg-light-bg">
                  <Link
                    href="/schemes"
                    className="text-accent font-medium text-sm hover:underline flex items-center justify-center"
                  >
                    View All 50+ Schemes
                    <FiArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Suggested Queries */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6"
        >
          <p className="text-sm text-text-muted text-center mb-3">Try searching:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {suggestedQueries.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 text-sm bg-light-bg text-text-muted rounded-full hover:bg-accent/10 hover:text-accent transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
