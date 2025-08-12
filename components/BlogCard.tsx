import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <>
      {blog?.image && (
        <Image
          src={blog.image ?? "/placeholder.jpg"}
          alt={blog?.imageAlt ?? "Blog image"}
          width={400}
          height={225}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      )}
    </>
  );
}
