import type { Metadata } from "next";
import Link from "next/link";
import { getBlogs } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and insights on technology, software development, and engineering leadership by Rashed Zaman.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <AnimatedSection key={blog.id} delay={(i % 6) * 0.1}>
              <div className="group card-glass overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full">
                {/* Category badge */}
                <div className="p-6 flex flex-col flex-grow">
                  <Badge variant="blue" className="self-start mb-3">{blog.category}</Badge>

                  <Link href={`/blogs/${blog.id}`} className="block mb-3">
                    <h2 className="text-xl font-bold text-blue-300 group-hover:underline underline-offset-4 line-clamp-2">
                      {blog.title}
                    </h2>
                  </Link>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{blog.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="green">{tag}</Badge>
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
      </div>
    </div>
  );
}
