'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

const categories = [
  'Certifications',
  'Compliance',
  'Tax',
  'Digital Marketing',
  'Tenders',
  'Business Advisory',
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export default function BlogEditor({ blog }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('edit');
  
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    slug: blog?.slug || '',
    excerpt: blog?.excerpt || '',
    content: blog?.content || '',
    featuredImage: blog?.featuredImage || '',
    category: blog?.category || '',
    author: blog?.author || 'Euroasia Team',
    metaTitle: blog?.metaTitle || '',
    metaDescription: blog?.metaDescription || '',
    keywords: blog?.keywords || '',
    status: blog?.status || 'draft',
  });

  useEffect(() => {
    if (!blog && formData.title && !formData.slug) {
      setFormData(prev => ({ ...prev, slug: slugify(prev.title) }));
    }
  }, [formData.title, blog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (value) => {
    setFormData(prev => ({ ...prev, content: value || '' }));
  };

  const handleSubmit = async (status) => {
    setLoading(true);
    
    const payload = {
      ...formData,
      status,
      publishedAt: status === 'published' ? new Date().toISOString() : null,
    };

    try {
      const url = blog ? `/api/blogs/${blog.id}` : '/api/blogs';
      const method = blog ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push('/admin/blogs');
        router.refresh();
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to save blog');
      }
    } catch (error) {
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Title */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <label className="block text-sm font-medium text-text-dark mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-primary-navy"
            placeholder="Enter blog title"
          />
        </div>

        {/* Slug */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <label className="block text-sm font-medium text-text-dark mb-2">Slug</label>
          <div className="flex items-center">
            <span className="text-text-muted mr-2">/blog/</span>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="flex-1 px-4 py-3 rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-primary-navy"
              placeholder="url-friendly-slug"
            />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <label className="text-sm font-medium text-text-dark">Content</label>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => setActiveTab('edit')}
                className={`px-3 py-1 text-sm rounded-lg ${
                  activeTab === 'edit' ? 'bg-primary-navy text-white' : 'bg-light-bg text-text-muted'
                }`}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 text-sm rounded-lg ${
                  activeTab === 'preview' ? 'bg-primary-navy text-white' : 'bg-light-bg text-text-muted'
                }`}
              >
                Preview
              </button>
            </div>
          </div>
          <div data-color-mode="light">
            <MDEditor
              value={formData.content}
              onChange={handleContentChange}
              preview={activeTab === 'preview' ? 'preview' : 'edit'}
              height={400}
            />
          </div>
        </div>

        {/* Excerpt */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <label className="block text-sm font-medium text-text-dark mb-2">Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-primary-navy resize-none"
            placeholder="Brief summary of the blog post"
          />
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-primary-navy mb-4">Publish</h3>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleSubmit('draft')}
              disabled={loading}
              className="w-full py-3 border-2 border-primary-navy text-primary-navy font-semibold rounded-lg hover:bg-primary-navy hover:text-white transition-colors disabled:opacity-50"
            >
              Save as Draft
            </button>
            <button
              type="button"
              onClick={() => handleSubmit('published')}
              disabled={loading}
              className="w-full py-3 bg-primary-navy text-white font-semibold rounded-lg hover:bg-secondary-navy transition-colors disabled:opacity-50"
            >
              {blog?.status === 'published' ? 'Update' : 'Publish'}
            </button>
          </div>
        </div>

        {/* Category */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <label className="block text-sm font-medium text-text-dark mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-primary-navy bg-white"
          >
            <option value="">Select category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Featured Image */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <label className="block text-sm font-medium text-text-dark mb-2">Featured Image URL</label>
          <input
            type="text"
            name="featuredImage"
            value={formData.featuredImage}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-primary-navy"
            placeholder="https://..."
          />
          {formData.featuredImage && (
            <img
              src={formData.featuredImage}
              alt="Preview"
              className="mt-3 w-full h-32 object-cover rounded-lg"
            />
          )}
        </div>

        {/* Author */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <label className="block text-sm font-medium text-text-dark mb-2">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-primary-navy"
          />
        </div>

        {/* SEO */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-primary-navy mb-4">SEO Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">Meta Title</label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-primary-navy"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">Meta Description</label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-3 rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-primary-navy resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">Keywords</label>
              <input
                type="text"
                name="keywords"
                value={formData.keywords}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-primary-navy"
                placeholder="keyword1, keyword2, keyword3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
