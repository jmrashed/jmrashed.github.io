import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { getBlogById, getBlogs } from '@/lib/data';
import Badge from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getBlogs().map(b => ({ id: b.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = getBlogById(id);
  if (!blog) return { title: 'Blog Not Found' };
  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description,
    keywords: blog.meta_keywords,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const blog = getBlogById(id);
  if (!blog) notFound();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-400 mb-8 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <article className="card-glass p-8">
          <Badge variant="blue" className="mb-4">
            {blog.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8 pb-8 border-b border-black/[0.06] dark:border-white/[0.06]">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(blog.published_at)}
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4" />
              {blog.tags.map(tag => (
                <Badge key={tag} variant="green">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Rendered markdown */}
          <div className="prose prose-gray dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
            prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed
            prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
            prose-code:text-indigo-600 dark:prose-code:text-indigo-300
            prose-code:bg-indigo-50 dark:prose-code:bg-indigo-950/40
            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
            prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950 prose-pre:rounded-xl prose-pre:p-4
            prose-pre:overflow-x-auto prose-pre:text-sm
            prose-ul:text-gray-600 dark:prose-ul:text-gray-300
            prose-ol:text-gray-600 dark:prose-ol:text-gray-300
            prose-li:my-1
            prose-blockquote:border-l-indigo-500 prose-blockquote:text-gray-500 dark:prose-blockquote:text-gray-400
            prose-a:text-indigo-500 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
            prose-hr:border-black/[0.06] dark:prose-hr:border-white/[0.06]">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
