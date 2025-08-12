import { latestBlogs as blogs } from "@/app/blogs/blogs-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default function BlogPost({ params }: Props) {
  const { slug } = params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-12 px-6 mt-10 bg-white rounded-lg shadow-md">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blogs
        </Link>
      </div>

      {/* Title */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold leading-tight mb-3 text-gray-900">{blog.title}</h1>
        <p className="text-lg text-gray-600">{blog.subtitle}</p>
      </header>

      {/* Metadata */}
      <section className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
        <time dateTime={blog.date} className="capitalize">
          Published:{" "}
          {new Date(blog.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span>•</span>
        <time dateTime={blog.lastUpdated} className="capitalize">
          Updated:{" "}
          {new Date(blog.lastUpdated).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span>•</span>
        <span>{blog.readTime}</span>
        <span>•</span>
        <span className="capitalize">{blog.difficulty}</span>
        <span>•</span>
        <span>
          Category:{" "}
          <Link
            href={`/blog/category/${blog.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-indigo-600 hover:underline"
          >
            {blog.category}
          </Link>
        </span>
        <span>•</span>
        <span>
          Subcategory:{" "}
          <Link
            href={`/blog/subcategory/${blog.subcategory.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-indigo-600 hover:underline"
          >
            {blog.subcategory}
          </Link>
        </span>
      </section>

      {/* Featured Image */}
      {blog.image && (
        <figure className="mb-10">
          <Image
            src={blog.image}
            alt={blog.imageAlt || blog.title}
            width={900}
            height={500}
            className="rounded-lg object-cover w-full max-h-[400px]"
            priority
          />
          {blog.imageAlt && (
            <figcaption className="text-sm text-gray-400 mt-2 text-center italic">
              {blog.imageAlt}
            </figcaption>
          )}
        </figure>
      )}

      {/* Full Description / Content */}
      <section className="prose prose-indigo max-w-none text-gray-800 mb-14">
        <p>{blog.fullDescription}</p>
        {/* You can enhance this section to parse markdown or rich content */}
      </section>

      {/* Tags */}
      {blog.tags?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Tags</h2>
          <ul className="flex flex-wrap gap-3">
            {blog.tags.map((tag) => (
              <li
                key={tag}
                className="bg-indigo-100 text-indigo-700 rounded-full px-4 py-1 text-sm font-medium select-none"
              >
                {tag}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
