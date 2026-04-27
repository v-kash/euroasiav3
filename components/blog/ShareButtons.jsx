'use client';

import { useState } from 'react';
import { FiLinkedin, FiTwitter, FiCopy, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function ShareButtons({ title, slug }) {
  const [copied, setCopied] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.euroasias.com';
  const url = `${baseUrl}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:bg-[#0077B5]',
    },
    {
      name: 'Twitter',
      icon: FiTwitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'hover:bg-[#1DA1F2]',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: 'hover:bg-[#25D366]',
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full bg-light-bg flex items-center justify-center text-text-muted hover:text-white transition-colors ${link.color}`}
          aria-label={`Share on ${link.name}`}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className="w-10 h-10 rounded-full bg-light-bg flex items-center justify-center text-text-muted hover:bg-primary-navy hover:text-white transition-colors"
        aria-label="Copy link"
      >
        {copied ? (
          <FiCheck className="w-5 h-5 text-green-500" />
        ) : (
          <FiCopy className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
