'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Blog } from '@/types';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Badge from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const categories = ['All', ...Array.from(new Set(blogs.map(b => b.category)))];
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? blogs : blogs.filter(b => b.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
              active === cat
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((blog, i) => (
          <AnimatedSection key={blog.id} delay={(i % 6) * 0.1}>
            <div className="group card-glass overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full">
              <div className="p-6 flex flex-col flex-grow">
                <Badge variant="blue" className="self-start mb-3">
                  {blog.category}
                </Badge>

                <Link href={`/blogs/${blog.id}`} className="block mb-3">
                  <h2 className="text-xl font-bold text-blue-300 group-hover:underline underline-offset-4 line-clamp-2">
                    {blog.title}
                  </h2>
                </Link>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{blog.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="green">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700/50">
                  <span className="text-xs text-gray-500">{formatDate(blog.published_at)}</span>
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}
