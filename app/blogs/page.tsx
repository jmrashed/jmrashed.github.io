import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { latestBlogs } from "./blogs-data";

export const metadata: Metadata = {
  title: "Blog Articles",
  description: "Explore our latest blog posts on technology, leadership, and innovation",
};

export default function BlogsPage() {
  return (
    <article className="max-w-7xl mx-auto py-12 px-6 mt-10 bg-white rounded-lg shadow-md">
      <div className="container mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Blog Articles
          </h1>
          <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
            Insights and knowledge from our team
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((blog) => (
            <div
              key={blog.slug}
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-md dark:border-gray-700"
            >
              <Link href={`/blogs/${blog.slug}`} className="group h-full flex flex-col">
                {blog?.image && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={blog.image ?? "/placeholder.jpg"}
                      alt={blog?.imageAlt ?? "Blog image"}
                      width={400}
                      height={225}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="flex-grow p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
                      {blog.category}
                    </span>
                    {blog.difficulty && (
                      <span className="text-sm font-medium px-3 py-1 bg-gray-100 text-gray-800 rounded-full dark:bg-gray-700 dark:text-gray-200">
                        {blog.difficulty}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {blog.title}
                  </h2>

                  {blog.subtitle && (
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {blog.subtitle}
                    </p>
                  )}

                  <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
