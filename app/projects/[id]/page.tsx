"use client";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../projects-data";

interface Props {
  params: {
    id: string;
  };
}

interface Project {
  "Product Name": string;
  Description: string;
  Category?: string;
  Industry?: string;
  Technology: string[];
  Keywords: string[];
  Features: string[];
  "Target Audience"?: string;
  "Pricing Model"?: string;
  "Estimated Price Range"?: string;
  "Development Time"?: string;
  "Team Size"?: string;
  "Complexity Level"?: string;
  "Market Size"?: string;
  "Growth Rate"?: string;
  "Key Competitors"?: string[];
  "Deployment Options"?: string[];
  Scalability?: string;
  "Security Features"?: string[];
  "Integration Capabilities"?: string[];
  "Support Languages"?: string[];
  "Mobile Support"?: string;
  "Database Requirements"?: string;
  "Server Requirements"?: string;
  Compliance?: string[];
  "ROI Potential"?: string;
  "Market Demand"?: string;
  "Risk Level"?: string;
  "Unique Selling Points"?: string[];
}

export default function ProjectDetails({ params }: Props) {
  const { id } = params;

  const project = projects.find((project: Project) => {
    const slug = project["Product Name"].toLowerCase().replace(/\s+/g, "-");
    return slug === id;
  });

  if (!project) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto p-6 mt-20 text-center"
      >
        <h1 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
          Project Not Found
        </h1>
        <p className="mb-6 text-gray-600">
          Sorry, the project you are looking for does not exist.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          ← Back to Projects
        </Link>
      </motion.main>
    );
  }

  const otherProjects = projects.filter((p) => p["Product Name"] !== project["Product Name"]);

  return (
    <motion.main
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      animate="show"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 mt-20 flex gap-8"
    >
      <div className="w-4/5">
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
            <Link
              href="/projects"
              className="inline-flex items-center text-indigo-100 hover:text-white mb-4 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Projects
            </Link>
            <motion.h1
              variants={fadeIn("up", "spring", 0.3, 1)}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {project["Product Name"]}
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "spring", 0.4, 1)}
              className="text-xl text-indigo-100 max-w-3xl"
            >
              {project.Description}
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {/* Category & Industry */}
            {(project.Category || project.Industry) && (
              <motion.section
                variants={fadeIn("up", "spring", 0.5, 1)}
                className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {project.Category && (
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Category
                    </h2>
                    <p className="text-lg font-medium text-gray-900">
                      {project.Category}
                    </p>
                  </div>
                )}
                {project.Industry && (
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Industry
                    </h2>
                    <p className="text-lg font-medium text-gray-900">
                      {project.Industry}
                    </p>
                  </div>
                )}
              </motion.section>
            )}

            {/* Technologies */}
            <motion.section
              variants={fadeIn("up", "spring", 0.6, 1)}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-indigo-600"
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
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.Technology.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.section>

            {/* Features */}
            <motion.section
              variants={fadeIn("up", "spring", 0.7, 1)}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.Features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    whileHover={{ y: -5 }}
                    className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-lg text-indigo-600 mr-4">
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Keywords */}
            <motion.section
              variants={fadeIn("up", "spring", 0.8, 1)}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                Keywords
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.Keywords.map((keyword) => (
                  <motion.span
                    key={keyword}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
                  >
                    {keyword}
                  </motion.span>
                ))}
              </div>
            </motion.section>

            {/* Business & Market Info */}
            <motion.section
              variants={fadeIn("up", "spring", 0.9, 1)}
              className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  Business Details
                </h2>
                <div className="space-y-4">
                  {project["Target Audience"] && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Target Audience
                      </h3>
                      <p className="text-gray-700">
                        {project["Target Audience"]}
                      </p>
                    </div>
                  )}
                  {project["Pricing Model"] && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Pricing Model
                      </h3>
                      <p className="text-gray-700">
                        {project["Pricing Model"]}
                      </p>
                    </div>
                  )}
                  {project["Estimated Price Range"] && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Price Range
                      </h3>
                      <p className="text-gray-700">
                        {project["Estimated Price Range"]}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  Development Info
                </h2>
                <div className="space-y-4">
                  {project["Development Time"] && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Development Time
                      </h3>
                      <p className="text-gray-700">
                        {project["Development Time"]}
                      </p>
                    </div>
                  )}
                  {project["Team Size"] && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Team Size
                      </h3>
                      <p className="text-gray-700">{project["Team Size"]}</p>
                    </div>
                  )}
                  {project["Complexity Level"] && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Complexity Level
                      </h3>
                      <p className="text-gray-700">
                        {project["Complexity Level"]}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.section>

            {/* Market & Growth */}
            <motion.section
              variants={fadeIn("up", "spring", 1.0, 1)}
              className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  Market Analysis
                </h2>
                <div className="space-y-4">
                  {project["Market Size"] && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Market Size
                      </h3>
                      <p className="text-gray-700">
                        {project["Market Size"]}
                      </p>
                    </div>
                  )}
                  {project["Growth Rate"] && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Growth Rate
                      </h3>
                      <p className="text-gray-700">
                        {project["Growth Rate"]}
                      </p>
                    </div>
                  )}
                  {project["Market Demand"] && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Market Demand
                      </h3>
                      <p className="text-gray-700">
                        {project["Market Demand"]}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  Competitive Landscape
                </h2>
                <div className="space-y-4">
                  {project["Key Competitors"] && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Key Competitors
                      </h3>
                      <ul className="space-y-2">
                        {project["Key Competitors"].map((comp) => (
                          <li key={comp} className="flex items-center">
                            <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                            <span className="text-gray-700">{comp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project["Deployment Options"] && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Deployment Options
                      </h3>
                      <ul className="space-y-2">
                        {project["Deployment Options"].map((dep) => (
                          <li key={dep} className="flex items-center">
                            <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                            <span className="text-gray-700">{dep}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.section>

            {/* Technical Details */}
            <motion.section
              variants={fadeIn("up", "spring", 1.1, 1)}
              className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {project["Integration Capabilities"] && (
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900">
                    Integrations
                  </h2>
                  <ul className="space-y-2">
                    {project["Integration Capabilities"].map((intg) => (
                      <li key={intg} className="flex items-center">
                        <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                        <span className="text-gray-700">{intg}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project["Security Features"] && (
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900">
                    Security
                  </h2>
                  <ul className="space-y-2">
                    {project["Security Features"].map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project["Unique Selling Points"] && (
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900">
                    USPs
                  </h2>
                  <ul className="space-y-2">
                    {project["Unique Selling Points"].map((usp) => (
                      <li key={usp} className="flex items-center">
                        <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                        <span className="text-gray-700">{usp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.section>

            {/* Back Button */}
            <motion.div
              variants={fadeIn("up", "spring", 1.2, 1)}
              className="mt-8"
            >
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to All Projects
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="w-1/5">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Other Projects</h2>
        <div className="space-y-4">
          {otherProjects.map((p) => (
            <Link
              key={p["Product Name"]}
              href={`/projects/${p["Product Name"].toLowerCase().replace(/\s+/g, "-")}`}
              className="block p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="font-semibold text-indigo-600">{p["Product Name"]}</h3>
              <p className="text-sm text-gray-600">{p.Category}</p>
            </Link>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
