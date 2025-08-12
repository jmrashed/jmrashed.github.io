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
      <main className="max-w-4xl mx-auto p-6 mt-20 text-center">
        <h1 className="text-3xl font-semibold mb-4 text-red-600">Project Not Found</h1>
        <p className="mb-6 text-gray-600">Sorry, the project you are looking for does not exist.</p>
        <Link href="/projects" className="text-indigo-600 hover:underline font-medium">
          ← Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 mt-20 bg-white rounded-md shadow-md">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{project["Product Name"]}</h1>
      <p className="text-lg text-gray-700 mb-8">{project.Description}</p>

      {/* Optional: Category & Industry */}
      {(project.Category || project.Industry) && (
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.Category && (
            <div>
              <h2 className="text-xl font-semibold mb-1">Category</h2>
              <p className="text-gray-700">{project.Category}</p>
            </div>
          )}
          {project.Industry && (
            <div>
              <h2 className="text-xl font-semibold mb-1">Industry</h2>
              <p className="text-gray-700">{project.Industry}</p>
            </div>
          )}
        </section>
      )}

      {/* Technologies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 border-b border-indigo-600 pb-1">Technologies Used</h2>
        <ul className="flex flex-wrap gap-3">
          {project.Technology.map((tech) => (
            <li
              key={tech}
              className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full select-none"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 border-b border-indigo-600 pb-1">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {project.Features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Keywords */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 border-b border-indigo-600 pb-1">Keywords</h2>
        <ul className="flex flex-wrap gap-3">
          {project.Keywords.map((keyword) => (
            <li
              key={keyword}
              className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full select-none"
            >
              {keyword}
            </li>
          ))}
        </ul>
      </section>

      {/* Business & Market Info */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {project["Target Audience"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Target Audience</h2>
            <p className="text-gray-700">{project["Target Audience"]}</p>
          </div>
        )}

        {project["Pricing Model"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Pricing Model</h2>
            <p className="text-gray-700">{project["Pricing Model"]}</p>
          </div>
        )}

        {project["Estimated Price Range"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Estimated Price Range</h2>
            <p className="text-gray-700">{project["Estimated Price Range"]}</p>
          </div>
        )}

        {project["Development Time"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Development Time</h2>
            <p className="text-gray-700">{project["Development Time"]}</p>
          </div>
        )}

        {project["Team Size"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Team Size</h2>
            <p className="text-gray-700">{project["Team Size"]}</p>
          </div>
        )}

        {project["Complexity Level"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Complexity Level</h2>
            <p className="text-gray-700">{project["Complexity Level"]}</p>
          </div>
        )}
      </section>

      {/* Market & Growth */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {project["Market Size"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Market Size</h2>
            <p className="text-gray-700">{project["Market Size"]}</p>
          </div>
        )}

        {project["Growth Rate"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Growth Rate</h2>
            <p className="text-gray-700">{project["Growth Rate"]}</p>
          </div>
        )}

        {project["Key Competitors"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Key Competitors</h2>
            <ul className="list-disc list-inside text-gray-700">
              {project["Key Competitors"].map((comp) => (
                <li key={comp}>{comp}</li>
              ))}
            </ul>
          </div>
        )}

        {project["Deployment Options"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Deployment Options</h2>
            <ul className="list-disc list-inside text-gray-700">
              {project["Deployment Options"].map((dep) => (
                <li key={dep}>{dep}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Scalability & Security */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.Scalability && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Scalability</h2>
            <p className="text-gray-700">{project.Scalability}</p>
          </div>
        )}

        {project["Security Features"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Security Features</h2>
            <ul className="list-disc list-inside text-gray-700">
              {project["Security Features"].map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Integrations, Languages & Mobile */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {project["Integration Capabilities"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Integration Capabilities</h2>
            <ul className="list-disc list-inside text-gray-700">
              {project["Integration Capabilities"].map((intg) => (
                <li key={intg}>{intg}</li>
              ))}
            </ul>
          </div>
        )}

        {project["Support Languages"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Supported Languages</h2>
            <ul className="list-disc list-inside text-gray-700">
              {project["Support Languages"].map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </div>
        )}

        {project["Mobile Support"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Mobile Support</h2>
            <p className="text-gray-700">{project["Mobile Support"]}</p>
          </div>
        )}
      </section>

      {/* Infrastructure & Compliance */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {project["Database Requirements"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Database Requirements</h2>
            <p className="text-gray-700">{project["Database Requirements"]}</p>
          </div>
        )}

        {project["Server Requirements"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Server Requirements</h2>
            <p className="text-gray-700">{project["Server Requirements"]}</p>
          </div>
        )}

        {project.Compliance && (
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-1">Compliance & Regulations</h2>
            <ul className="list-disc list-inside text-gray-700">
              {project.Compliance.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* ROI, Market Demand, Risk & USP */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {project["ROI Potential"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">ROI Potential</h2>
            <p className="text-gray-700">{project["ROI Potential"]}</p>
          </div>
        )}

        {project["Market Demand"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Market Demand</h2>
            <p className="text-gray-700">{project["Market Demand"]}</p>
          </div>
        )}

        {project["Risk Level"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Risk Level</h2>
            <p className="text-gray-700">{project["Risk Level"]}</p>
          </div>
        )}

        {project["Unique Selling Points"] && (
          <div>
            <h2 className="text-xl font-semibold mb-1">Unique Selling Points</h2>
            <ul className="list-disc list-inside text-gray-700">
              {project["Unique Selling Points"].map((usp) => (
                <li key={usp}>{usp}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <Link
        href="/projects"
        className="inline-block mt-6 text-indigo-600 hover:text-indigo-800 hover:underline font-semibold"
      >
        ← Back to Projects
      </Link>
    </main>
  );
}
