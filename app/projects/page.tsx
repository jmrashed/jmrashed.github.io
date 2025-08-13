"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { projects } from "./projects-data";

export default function ProjectsPage() {
  const allTechnologies = [
    "Laravel", "React", "MySQL", "Node.js", "OpenCV", 
    "TensorFlow", "Python", "MongoDB", "Java", 
    "Spring Boot", "PostgreSQL", "Microservices", 
    "Kubernetes", "PHP", "Django", "Blockchain APIs",
    "WebSocket"
  ];

  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (selectedTechnologies.length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        selectedTechnologies.every((tech) => project.Technology.includes(tech))
      );
      setFilteredProjects(filtered);
    }
  }, [selectedTechnologies]);

  const handleTechnologyChange = (technology: string) => {
    setSelectedTechnologies((prevSelected) =>
      prevSelected.includes(technology)
        ? prevSelected.filter((tech) => tech !== technology)
        : [...prevSelected, technology]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 text-gray-900">
      <Navbar />

      <main className="pt-24 px-4 sm:px-6 max-w-7xl mx-auto pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Product Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our innovative projects built with cutting-edge technologies
          </p>
        </div>

        {/* Technology Filters */}
        <section className="mb-12 p-6 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v5H3V4zM3 14h18v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" />
              </svg>
              Filter by Technology
            </h2>

            {selectedTechnologies.length > 0 && (
              <button
                onClick={() => setSelectedTechnologies([])}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-lg shadow transition-all duration-200 hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Reset Filters
              </button>
            )}
          </div>

          {/* Technology Chips */}
          <div className="flex flex-wrap gap-3">
            {allTechnologies.map((tech) => {
              const isSelected = selectedTechnologies.includes(tech);
              return (
                <label
                  key={tech}
                  className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-full border-2 transition-all duration-300 shadow-sm select-none
                    ${
                      isSelected
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-600 shadow-md transform scale-105"
                        : "bg-white text-gray-800 border-gray-200 hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-md"
                    }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleTechnologyChange(tech)}
                    className="hidden"
                  />
                  <span
                    className={`flex items-center justify-center h-5 w-5 rounded-full border transition-all duration-200
                      ${
                        isSelected
                          ? "bg-white text-indigo-600 border-white"
                          : "bg-white border-gray-300"
                      }`}
                  >
                    {isSelected && (
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className="text-sm font-medium">{tech}</span>
                </label>
              );
            })}
          </div>
        </section>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project["Product Name"]}
                className="relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-6 flex flex-col h-full z-10">
                  {/* Project title */}
                  <a
                    href={`/projects/${project["Product Name"].toLowerCase().replace(/ /g, '-')}`}
                    className="group-hover:text-indigo-600 transition-colors duration-300"
                  >
                    <h2 className="text-xl font-bold mb-3 text-gray-800">{project["Product Name"]}</h2>
                  </a>

                  {/* Description */}
                  <p className="text-gray-600 mb-5 flex-grow leading-relaxed">
                    {project.Description}
                  </p>

                  {/* Technologies */}
                  <section className="mb-4">
                    <h3 className="font-semibold text-xs text-gray-500 uppercase mb-2 tracking-wider">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.Technology.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs font-medium px-3 py-1 rounded-full border
                            ${
                              selectedTechnologies.includes(tech)
                                ? "bg-indigo-600 text-white border-indigo-700 shadow-inner"
                                : "bg-indigo-100 text-indigo-700 border-indigo-200"
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Keywords */}
                  <section className="mb-4">
                    <h3 className="font-semibold text-xs text-gray-500 uppercase mb-2 tracking-wider">
                      Keywords
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.Keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full border border-green-200"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </section>

                {/* Features Section */}
<section className="mt-6">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-semibold text-gray-800 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
      Key Features
    </h3>
    <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
      {project.Features.length} features
    </span>
  </div>

  <div className="space-y-3">
    {project.Features.map((feature, index) => (
      <div
        key={index}
        className="group flex items-start p-3 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors duration-200"
      >
        <div className="flex-shrink-0 mt-0.5">
          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-indigo-100 text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-800 group-hover:text-indigo-700 transition-colors">
            {feature}
          </p>
          {/* Optional: Add feature descriptions if available in your data */}
          {/* {feature.description && (
            <p className="text-xs text-gray-500 mt-1">
              {feature.description}
            </p>
          )} */}
        </div>
      </div>
    ))}
  </div>

  {/* For ERP systems with many features, consider this alternative carousel view */}
  {project.Category === "Enterprise Software" && (
    <div className="mt-6">
      <div className="flex overflow-x-auto pb-4 -mx-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-indigo-100">
        {project.Features.map((feature, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 px-2 snap-start"
          >
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center mb-2">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 mr-3">
                  <span className="font-medium text-sm">{index + 1}</span>
                </div>
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {feature}
                </h4>
              </div>
              {/* Optional metrics for enterprise features */}
              <div className="flex items-center mt-3 text-xs text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Implementation: 2-4 weeks</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</section>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="max-w-md mx-auto">
              <svg
                className="w-16 h-16 mx-auto text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No projects found
              </h3>
              <p className="mt-2 text-gray-500">
                Try adjusting your technology filters to find matching projects.
              </p>
              <button
                onClick={() => setSelectedTechnologies([])}
                className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}