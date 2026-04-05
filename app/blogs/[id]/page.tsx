import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
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

  // Convert markdown-style content to paragraphs
  const paragraphs = blog.content
    .split('\n\n')
    .filter(Boolean)
    .map(p => p.replace(/^#+\s/, '').trim());

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <article className="card-glass p-8">
          <Badge variant="blue" className="mb-4">
            {blog.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-700">
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

          <div className="prose prose-invert max-w-none">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-gray-300 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
