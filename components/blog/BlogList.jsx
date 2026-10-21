'use client';

import { useState, useMemo } from 'react';
import BlogCard from '@/components/shared/BlogCard';
import { FiSearch } from 'react-icons/fi';

const categories = [
  'All',
  'Certifications',
  'Compliance',
  'Tax',
  'Digital Marketing',
  'Tenders',
  'Business Advisory',
];

export default function BlogList({ initialBlogs }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [initialBlogs, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="max-w-xl mb-8">
          <div className="relative">
            <FiSearch aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-navy w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearch}
              aria-label="Search articles"
              className="w-full min-h-[52px] pl-12 pr-4 py-3 rounded-xl border-2 border-primary-navy bg-white text-text-dark placeholder:text-silver-grey shadow-hard-sm focus:outline-none focus:ring-4 focus:ring-accent/30 transition-shadow"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-[#D5DDE9]">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              aria-pressed={selectedCategory === category}
              className={`min-h-[44px] px-5 rounded-full border-2 font-semibold text-sm transition-colors duration-150 ${
                selectedCategory === category
                  ? 'bg-primary-navy border-primary-navy text-white'
                  : 'border-[#D5DDE9] text-primary-navy hover:border-primary-navy'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        {paginatedBlogs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedBlogs.map((blog, index) => (
              <BlogCard key={blog.id || blog.slug} blog={blog} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border-2 border-dashed border-[#D5DDE9] rounded-2xl">
            <p className="text-text-muted text-lg">
              No articles found matching your criteria.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="min-h-[44px] px-5 rounded-full border-2 border-primary-navy text-primary-navy font-semibold text-sm hover:bg-primary-navy hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-primary-navy transition-colors"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                aria-current={currentPage === index + 1 ? 'page' : undefined}
                className={`w-11 h-11 rounded-full border-2 font-ledger font-semibold text-sm transition-colors ${
                  currentPage === index + 1
                    ? 'bg-primary-navy border-primary-navy text-white'
                    : 'border-[#D5DDE9] text-primary-navy hover:border-primary-navy'
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="min-h-[44px] px-5 rounded-full border-2 border-primary-navy text-primary-navy font-semibold text-sm hover:bg-primary-navy hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-primary-navy transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
