'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiArrowRight, FiZap } from 'react-icons/fi';

const allSchemes = [
  // Core Funding Schemes
  { name: 'PMEGP', category: 'Funding', amount: 'Up to ₹50L (Mfg) / ₹20L (Service)', keywords: ['manufacturing', 'service', 'new business', 'startup', 'loan', 'subsidy', 'employment', 'individual', '15%', '35%'], href: '/services/pmegp', eligibility: 'Individual with new business' },
  { name: 'MUDRA Loan', category: 'Funding', amount: 'Up to ₹20 Lakhs', keywords: ['small business', 'working capital', 'shishu', 'kishore', 'tarun', 'loan', 'msme'], href: '/services/mudra', eligibility: 'For MSMEs' },
  { name: 'CGTMSE', category: 'Funding', amount: 'Up to ₹10 Crore', keywords: ['collateral free', 'guarantee', 'loan', 'credit', 'bank', 'large loan'], href: '/services/cgtmse', eligibility: 'Entity age > 2 years' },
  { name: 'Seed Fund', category: 'Funding', amount: '₹20L Grant or ₹50L Debt/Equity', keywords: ['seed', 'early stage', 'dpiit', 'new startup', 'grant', 'equity'], href: '/services/startup-india', eligibility: 'DPIIT registered, Entity age < 2 yrs' },
  { name: 'CGSS Scheme', category: 'Funding', amount: 'Credit Guarantee up to ₹20 Cr', keywords: ['credit guarantee', 'large loan', 'dpiit', 'collateral free'], href: '/contact', eligibility: 'Pvt Ltd, LLP, Partnership with DPIIT' },

  // Grant Schemes
  { name: 'Business for Impact Grant', category: 'Grant', amount: 'Up to ₹2.3 Crore', keywords: ['grant', 'impact', 'social', 'pvt ltd', 'llp', 'partnership'], href: '/contact', eligibility: 'Pvt Ltd, LLP, Partnership & others' },
  { name: 'Global Impact Grant', category: 'Grant', amount: 'Up to ₹20 Crore', keywords: ['global', 'impact', 'large grant', 'ngo', 'foundation', 'section 8'], href: '/contact', eligibility: 'All entity types including NGO, Foundation' },
  { name: 'Spark Grant', category: 'Grant', amount: 'Up to ₹88 Lakhs', keywords: ['women', 'female founder', 'grant', 'women entrepreneur'], href: '/contact', eligibility: 'At least 1 female founder required' },
  { name: 'Growth Grant', category: 'Grant', amount: 'Up to ₹1.7 Crore', keywords: ['young', 'youth', 'under 22', 'young entrepreneur'], href: '/contact', eligibility: 'Applicants must be aged 22 or younger' },
  { name: 'TIDE 2.0', category: 'Grant', amount: 'Up to ₹7 Lakhs', keywords: ['tide', 'technology', 'incubation', 'grant'], href: '/contact', eligibility: 'Pvt Ltd, LLP, Partnership, Proprietorship' },
  { name: 'Idea Grant', category: 'Grant', amount: 'Up to ₹10 Lakhs', keywords: ['idea', 'prototype', 'student', 'innovator', 'early stage'], href: '/contact', eligibility: 'Indian innovators & students, Idea to prototype stage' },

  // Sector Specific
  { name: 'RKVY RAFTAAR', category: 'Agriculture', amount: 'Grant up to ₹25 Lakhs', keywords: ['agriculture', 'agri', 'farming', 'agritech', 'rural'], href: '/contact', eligibility: 'Pvt Ltd, LLP, Partnership, Proprietorship & Individual' },
  { name: 'Agri-Sure Fund', category: 'Agriculture', amount: 'Up to ₹25 Crore (Equity)', keywords: ['agriculture', 'agri', 'equity', 'large funding', 'agritech'], href: '/contact', eligibility: 'DPIIT registered' },
  { name: 'NAIFF', category: 'Agriculture', amount: 'Loan up to ₹2 Cr @ 3% Interest', keywords: ['agriculture', 'loan', 'interest subsidy', 'fpo', 'cooperative'], href: '/contact', eligibility: 'Startups, MSMEs, FPO, SHG, Cooperative' },
  { name: 'Healthcare Innovation Grant', category: 'Healthcare', amount: 'Up to ₹10 Lakhs', keywords: ['healthcare', 'health', 'medical', 'biotech', 'hospital'], href: '/contact', eligibility: 'Startup/Company, Individual' },
  { name: 'Biomanufacturing Grant', category: 'Healthcare', amount: 'Up to ₹50 Lakhs', keywords: ['biomanufacturing', 'biotech', 'pharma', 'manufacturing'], href: '/contact', eligibility: 'Pvt Ltd & LLP' },

  // Registration & Compliance
  { name: 'Startup India (DPIIT)', category: 'Registration', amount: 'Tax Benefits + IPR Support', keywords: ['startup', 'dpiit', 'innovation', 'technology', 'registration'], href: '/services/startup-india', eligibility: 'Innovation-driven company < 10 years' },
  { name: '80-IAC Tax Exemption', category: 'Tax', amount: '100% Tax Free for 3 Years', keywords: ['tax', 'income tax', 'startup', 'exemption', 'angel tax'], href: '/services/80-iac', eligibility: 'DPIIT registered startup' },
  { name: 'ZED Certification', category: 'Quality', amount: '₹5L Subsidy', keywords: ['zero defect', 'quality', 'manufacturing', 'export', 'certification'], href: '/services/zed-certification', eligibility: 'Registered MSME, Manufacturing' },
  { name: 'GEM Registration', category: 'Marketplace', amount: 'Access to Govt Orders', keywords: ['government', 'tender', 'marketplace', 'vendor', 'seller', 'orders'], href: '/services/gem-registration', eligibility: 'GST registered entity' },
  { name: 'Udyam MSME', category: 'Registration', amount: 'Priority Lending', keywords: ['msme', 'micro', 'small', 'medium', 'registration', 'udyam'], href: '/services/msme-registration', eligibility: 'Any business entity' },
  { name: 'IEC Code', category: 'Export', amount: 'Export/Import Benefits', keywords: ['import', 'export', 'international', 'trade', 'dgft', 'customs'], href: '/services/iec-registration', eligibility: 'PAN, Bank Account, Address proof' },

  // State Specific
  { name: 'SRUJAN 2025 (Gujarat)', category: 'State', amount: '₹2.5L to ₹10 Lakhs', keywords: ['gujarat', 'srujan', 'young', 'under 35', 'state scheme'], href: '/contact', eligibility: 'Gujarat based, Age < 35 years' },
  { name: 'Funding Support (Gujarat)', category: 'State', amount: 'Up to ₹30 Lakhs', keywords: ['gujarat', 'state', 'grant'], href: '/contact', eligibility: 'Gujarat based startups only' },
  { name: 'Venture Fund (Maharashtra)', category: 'State', amount: 'Up to ₹10 Crore', keywords: ['maharashtra', 'venture', 'large funding', 'equity'], href: '/contact', eligibility: 'Pvt Ltd (DPIIT), Maharashtra only' },
  { name: 'AI First Fund (Telangana)', category: 'State', amount: 'Up to ₹2 Crore', keywords: ['telangana', 'ai', 'artificial intelligence', 'tech'], href: '/contact', eligibility: 'DPIIT registered, Telangana only' },

  // Special Category
  { name: 'Fund for SC/ST Entrepreneurs', category: 'Special', amount: 'Up to ₹5 Crore (Equity)', keywords: ['sc', 'st', 'scheduled caste', 'scheduled tribe', 'minority'], href: '/contact', eligibility: '100% SC/ST ownership, DPIIT/MSME approved' },
  { name: 'Stand-Up India', category: 'Special', amount: '₹10L to ₹1 Crore', keywords: ['women', 'sc', 'st', 'entrepreneur', 'greenfield'], href: '/services/government-grants', eligibility: 'SC/ST or Women entrepreneur' },
  { name: 'Social Fund', category: 'Social', amount: 'Up to ₹2.63 Crore', keywords: ['ngo', 'non profit', 'social', 'impact', 'foundation'], href: '/contact', eligibility: 'Non-profit, mission-driven for-profit' },

  // Equity & Investment
  { name: 'Evolve-Tech Funding', category: 'Equity', amount: 'Up to ₹25 Lakhs (Equity)', keywords: ['equity', 'tech', 'revenue', 'investment'], href: '/contact', eligibility: 'DPIIT registered, Revenue generating' },
  { name: 'Master Fund', category: 'Funding', amount: 'Up to ₹35 Lakhs', keywords: ['funding', 'pvt ltd', 'llp', 'partnership'], href: '/contact', eligibility: 'Private Limited, LLP, Partnerships' },
  { name: 'Pro-Fund Support', category: 'Funding', amount: '₹2L to ₹30 Lakhs', keywords: ['small funding', 'individual', 'proprietorship', 'early stage'], href: '/contact', eligibility: 'All entity types including Individual' },
  { name: 'Startup Support Scheme (SSS)', category: 'Funding', amount: '₹25L to ₹1 Crore', keywords: ['startup', 'sss', 'funding', 'medium funding'], href: '/contact', eligibility: 'Pvt Ltd, LLP, Partnership, Proprietorship' },
  { name: 'Inno-Preneurs', category: 'Funding', amount: 'Up to ₹5 Crore + ₹50L Reward', keywords: ['innovation', 'innopreneur', 'reward', 'large funding'], href: '/contact', eligibility: 'All entity types' },
];

const suggestedQueries = [
  'I need funding for my startup',
  'Grant for women entrepreneur',
  'Loan without collateral',
  'Agriculture business funding',
  'SC/ST entrepreneur schemes',
  'Gujarat based startup schemes',
  'Young entrepreneur under 25',
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
    <section className="py-12 lg:py-16 bg-light-bg border-t border-[#D5DDE9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border-[1.5px] border-primary-navy text-primary-navy rounded-full font-ledger text-xs font-semibold uppercase tracking-[0.12em] mb-5">
            <FiZap aria-hidden="true" className="w-3.5 h-3.5 text-accent-text" />
            AI-Powered Search
          </span>
          <h2 className="font-display font-extrabold text-primary-navy text-3xl md:text-5xl leading-[1.05] tracking-[-0.035em] mb-4">
            Find the Right Scheme for Your Business
          </h2>
          <p className="text-text-muted text-lg">
            Describe your needs and we will match you with the best government schemes
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="relative">
            <FiSearch aria-hidden="true" className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-navy" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="E.g., I need funding for my manufacturing business..."
              aria-label="Search government schemes"
              className="w-full pl-14 pr-14 py-5 text-lg text-primary-navy placeholder:text-text-muted bg-white border-2 border-primary-navy rounded-2xl shadow-hard-sm focus:outline-none focus:ring-4 focus:ring-accent/30 transition-shadow"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center hover:bg-light-bg rounded-full transition-colors"
              >
                <FiX aria-hidden="true" className="w-5 h-5 text-primary-navy" />
              </button>
            )}
          </div>

          {/* Results Dropdown */}
          <AnimatePresence>
            {isOpen && results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl border-2 border-primary-navy shadow-hard overflow-hidden z-20"
              >
                <div className="p-2">
                  <p className="px-4 py-2 font-ledger text-[11px] font-semibold text-text-muted uppercase tracking-[0.12em]">
                    Matching Schemes ({results.length})
                  </p>
                  {results.map((scheme, idx) => (
                    <Link
                      key={idx}
                      href={scheme.href}
                      className="flex items-center justify-between gap-4 p-4 hover:bg-light-bg rounded-xl transition-colors group"
                    >
                      <div>
                        <p className="font-bold text-primary-navy group-hover:text-accent-text transition-colors">
                          {scheme.name}
                        </p>
                        <p className="text-sm text-text-muted">
                          {scheme.category} • {scheme.amount}
                        </p>
                      </div>
                      <FiArrowRight aria-hidden="true" className="w-5 h-5 flex-shrink-0 text-accent-text opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
                <div className="border-t border-[#D5DDE9] p-4 bg-light-bg">
                  <Link
                    href="/schemes"
                    className="text-primary-navy font-semibold text-sm underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-text flex items-center justify-center"
                  >
                    View All 50+ Schemes
                    <FiArrowRight aria-hidden="true" className="w-4 h-4 ml-1" />
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
          className="mt-8"
        >
          <p className="font-ledger text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted text-center mb-3">
            Try searching:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {suggestedQueries.map((suggestion, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSuggestionClick(suggestion)}
                className="min-h-[44px] px-4 text-sm font-medium bg-white border border-[#D5DDE9] text-primary-navy rounded-full hover:border-primary-navy transition-colors"
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
