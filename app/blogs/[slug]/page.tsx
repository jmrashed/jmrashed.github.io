import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { getBlogBySlug, getBlogs } from '@/lib/data';
import Badge from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

function readingTime(html: string): number {
  const words = html.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function generateStaticParams() {
  return getBlogs().map(b => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return { title: 'Blog Not Found' };
  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description,
    keywords: blog.meta_keywords,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const related = getBlogs()
    .filter(b => b.id !== blog.id && b.category === blog.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blogs"
          className="group inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-400 mb-8 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Blog
        </Link>

        <article className="card-glass overflow-hidden">
          {/* Header banner */}
          <header className="relative px-6 pt-10 pb-8 sm:px-10 sm:pt-12 sm:pb-10 border-b border-black/[0.06] dark:border-white/[0.06] overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-40"
              style={{
                background:
                  'radial-gradient(ellipse 70% 100% at 20% 0%, rgba(99,102,241,0.14) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 100% 100%, rgba(245,158,11,0.1) 0%, transparent 60%)',
              }}
            />
            <div className="relative">
              <Badge variant="blue" className="mb-4">
                {blog.category}
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold gradient-text mb-5 leading-tight tracking-tight">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400 mb-5">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(blog.published_at)}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-400/50 dark:bg-gray-600" />
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {readingTime(blog.content)} min read
                </span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                {blog.tags.map(tag => (
                  <Badge key={tag} variant="green">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </header>

          {/* Rendered content */}
          <div className="px-6 py-10 sm:px-10">
            <div
              className="blog-content max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </article>

        {/* Footer nav */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 card-glass px-6 py-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Found this useful? Explore more articles on{' '}
            <span className="text-gray-900 dark:text-white font-medium">{blog.category}</span>.
          </p>
          <Link href="/blogs" className="btn-outline text-sm">
            <ArrowLeft className="w-4 h-4" /> All articles
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">More in {blog.category}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {related.map(b => (
                <Link
                  key={b.id}
                  href={`/blogs/${b.slug}`}
                  className="card-glass p-5 hover:border-indigo-400/50 transition-all duration-300 block"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{b.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(b.published_at)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
