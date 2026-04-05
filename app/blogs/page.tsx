import type { Metadata } from 'next';
import { getBlogs } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import BlogList from '@/components/sections/BlogList';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles and insights on technology, software development, and engineering leadership by Rashed Zaman.',
};

export default function BlogsPage() {
  const blogs = getBlogs();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Blog"
          subtitle="Articles and insights on technology, software development, and engineering leadership"
        />
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
}
