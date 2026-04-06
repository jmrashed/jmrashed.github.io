import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { getCaseStudyById, getCaseStudies } from '@/lib/data';
import Badge from '@/components/ui/Badge';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getCaseStudies().map(cs => ({ id: String(cs.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const cs = getCaseStudyById(Number(id));
  if (!cs) return { title: 'Case Study Not Found' };
  return { title: cs.title, description: cs.challenge.slice(0, 160) };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { id } = await params;
  const cs = getCaseStudyById(Number(id));
  if (!cs) notFound();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>

        <div className="card-glass p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-3">{cs.title}</h1>
          <p className="text-gray-400 mb-6">
            Client: <span className="text-gray-200">{cs.client}</span> · Industry:{' '}
            <span className="text-gray-200">{cs.industry}</span>
            {cs.role && (
              <> · Role: <span className="text-indigo-300">{cs.role}</span></>
            )}
            {cs.duration && (
              <> · Duration: <span className="text-gray-200">{cs.duration}</span></>
            )}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {cs.technologiesUsed.map(tech => (
              <Badge key={tech} variant="blue">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">The Challenge</h3>
              <p className="text-gray-300 leading-relaxed">{cs.challenge}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">The Solution</h3>
              <p className="text-gray-300 leading-relaxed">{cs.solution}</p>
            </div>
          </div>
        </div>

        <div className="card-glass p-8">
          <h3 className="text-2xl font-bold text-blue-300 mb-6">Results & Impact</h3>
          <ul className="space-y-3">
            {cs.results.map((result, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
