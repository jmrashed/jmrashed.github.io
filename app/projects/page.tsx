"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import { projects } from "./projects-data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <main className="pt-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-indigo-700">
           Product Portfolio
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3  mb-5">
          {projects.map((project) => (
            <article
              key={project["Product Name"]}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <a href={`/projects/${project["Product Name"].toLowerCase().replace(/ /g, '-')}`}>
                <h2 className="text-xl font-semibold mb-2 text-indigo-600">
                  {project["Product Name"]}
                </h2>
              </a>

              <p className="text-gray-700 mb-4 flex-grow">{project.Description}</p>

              <section className="mb-3">
                <h3 className="font-semibold text-sm text-gray-600 uppercase mb-1">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.Technology.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section className="mb-3">
                <h3 className="font-semibold text-sm text-gray-600 uppercase mb-1">
                  Keywords
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.Keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="font-semibold text-sm text-gray-600 uppercase mb-1">
                  Features
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-indigo-100">
                  {project.Features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </section>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
