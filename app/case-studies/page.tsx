import type { Metadata } from 'next';
import Link from 'next/link';
import { getCaseStudies } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'In-depth case studies showcasing real-world solutions and measurable impact delivered by Rashed Zaman.',
};

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Case Studies"
          subtitle="In-depth look at real-world challenges, solutions, and measurable outcomes"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <AnimatedSection key={cs.id} delay={(i % 6) * 0.1}>
              <div className="card-glass p-8 flex flex-col h-full hover:border-blue-400/50 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  💡
                </div>
                <Link href={`/case-studies/${cs.id}`} className="block mb-2">
                  <h3 className="text-xl font-bold text-blue-300 hover:underline underline-offset-4 line-clamp-2">
                    {cs.title}
                  </h3>
                </Link>
                <p className="text-gray-400 text-sm mb-3">
                  Client: {cs.client} · {cs.industry}
                </p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">{cs.challenge}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cs.technologiesUsed.slice(0, 3).map(tech => (
                    <Badge key={tech} variant="green">
                      {tech}
                    </Badge>
                  ))}
                  {cs.technologiesUsed.length > 3 && (
                    <Badge variant="blue">+{cs.technologiesUsed.length - 3}</Badge>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
