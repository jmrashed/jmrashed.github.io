import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, GitFork, ExternalLink } from "lucide-react";
import { getProjectById, getProjects, getBlogs, getCaseStudies } from "@/lib/data";
import Badge from "@/components/ui/Badge";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getProjects().map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(Number(id));
  if (!project) return { title: "Project Not Found" };
  return {
    title: project["Product Name"],
    description: project.Description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(Number(id));
  if (!project) notFound();

  const relatedBlogs = getBlogs().filter((b) => b.product_id === project.id).slice(0, 3);
  const relatedCaseStudies = getCaseStudies().filter((cs) => cs.projectId === project.id).slice(0, 3);

  const infoRows = [
    { label: "Category", value: project.Category },
    { label: "Industry", value: project.Industry },
    { label: "Target Audience", value: project["Target Audience"] },
    { label: "Pricing Model", value: project["Pricing Model"] },
    { label: "Price Range", value: project["Estimated Price Range"] },
    { label: "Development Time", value: project["Development Time"] },
    { label: "Team Size", value: project["Team Size"] },
    { label: "Market Size", value: project["Market Size"] },
    { label: "Growth Rate", value: project["Growth Rate"] },
    { label: "Market Demand", value: project["Market Demand"] },
    { label: "Risk Level", value: project["Risk Level"] },
    { label: "ROI Potential", value: project["ROI Potential"] },
    { label: "Scalability", value: project.Scalability },
    { label: "Mobile Support", value: project["Mobile Support"] },
    { label: "Database", value: project["Database Requirements"] },
    { label: "Server", value: project["Server Requirements"] },
  ].filter((r) => r.value);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/projects" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        {/* Header */}
        <div className="card-glass p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">{project["Product Name"]}</h1>
              <p className="text-gray-400">{project.Category} · {project.Industry}</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              {project.github && (
                <Link href={project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-sm font-semibold">
                  <GitFork className="w-4 h-4" /> GitHub
                </Link>
              )}
              {project.live_demo && (
                <Link href={project.live_demo} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg text-sm font-semibold transition-all">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </Link>
              )}
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.Description}</p>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-sm uppercase font-semibold text-blue-400 mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.Technology.map((tech) => (
                <Badge key={tech} variant="blue">{tech}</Badge>
              ))}
            </div>
          </div>

          {/* Impact */}
          {project.impact && (
            <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
              <h3 className="text-sm uppercase font-semibold text-blue-400 mb-2">Impact</h3>
              <p className="text-gray-300 text-sm">{project.impact}</p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Features */}
          {project.Features && project.Features.length > 0 && (
            <div className="card-glass p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {project.Features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-green-400 mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Project info */}
          <div className="card-glass p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">Project Details</h3>
            <dl className="space-y-2">
              {infoRows.slice(0, 8).map((row) => (
                <div key={row.label} className="flex justify-between gap-4 text-sm">
                  <dt className="text-gray-400 flex-shrink-0">{row.label}</dt>
                  <dd className="text-gray-200 text-right">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* USPs */}
        {project["Unique Selling Points"] && project["Unique Selling Points"].length > 0 && (
          <div className="card-glass p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-300 mb-4">Unique Selling Points</h3>
            <div className="flex flex-wrap gap-3">
              {project["Unique Selling Points"].map((usp) => (
                <Badge key={usp} variant="orange">{usp}</Badge>
              ))}
            </div>
          </div>
        )}

        {/* Related blogs */}
        {relatedBlogs.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Related Blog Posts</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedBlogs.map((blog) => (
                <Link key={blog.id} href={`/blogs/${blog.id}`}
                  className="card-glass p-4 hover:border-blue-400/50 transition-all block">
                  <h4 className="text-blue-300 font-semibold text-sm mb-2 line-clamp-2">{blog.title}</h4>
                  <p className="text-gray-400 text-xs line-clamp-2">{blog.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related case studies */}
        {relatedCaseStudies.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Related Case Studies</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedCaseStudies.map((cs) => (
                <Link key={cs.id} href={`/case-studies/${cs.id}`}
                  className="card-glass p-4 hover:border-blue-400/50 transition-all block">
                  <h4 className="text-blue-300 font-semibold text-sm mb-2">{cs.title}</h4>
                  <p className="text-gray-400 text-xs">Client: {cs.client}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
