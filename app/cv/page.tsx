import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import CvMarkdownViewer from '@/components/sections/CvMarkdownViewer';
import { getCvMarkdown } from '@/lib/cv-markdown';
import { siteConfig } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'CV in Markdown Format',
  description: `Copy-paste friendly, ATS-optimized Markdown CV for ${siteConfig.name} — ideal for pasting into ChatGPT, Claude, or an ATS for a quick summary.`,
};

export default function CvMarkdownPage() {
  const markdown = getCvMarkdown();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="CV in Markdown Format"
          badge="Markdown CV"
          subtitle="Full CV as clean, ATS-friendly Markdown — copy it straight into ChatGPT or Claude for an instant summary, or download the formatted PDF."
        />
        <CvMarkdownViewer markdown={markdown} />
      </div>
    </div>
  );
}
