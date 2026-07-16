'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { Copy, Check, Download } from 'lucide-react';
import { siteConfig } from '@/lib/utils';

interface CvMarkdownViewerProps {
  markdown: string;
}

const mdComponents = {
  h1: (props: React.ComponentProps<'h1'>) => (
    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-2" {...props} />
  ),
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2 className="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-3 pb-2 border-b border-black/[0.08] dark:border-white/[0.08]" {...props} />
  ),
  h3: (props: React.ComponentProps<'h3'>) => (
    <h3 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-5 mb-1" {...props} />
  ),
  p: (props: React.ComponentProps<'p'>) => (
    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3" {...props} />
  ),
  ul: (props: React.ComponentProps<'ul'>) => (
    <ul className="list-disc pl-5 space-y-1.5 mb-3" {...props} />
  ),
  li: (props: React.ComponentProps<'li'>) => (
    <li className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" {...props} />
  ),
  strong: (props: React.ComponentProps<'strong'>) => (
    <strong className="font-semibold text-gray-900 dark:text-white" {...props} />
  ),
  em: (props: React.ComponentProps<'em'>) => (
    <em className="text-xs text-gray-500 dark:text-gray-400 not-italic" {...props} />
  ),
  a: (props: React.ComponentProps<'a'>) => (
    <a className="text-indigo-600 dark:text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  hr: () => <hr className="my-6 border-black/[0.06] dark:border-white/[0.06]" />,
};

export default function CvMarkdownViewer({ markdown }: CvMarkdownViewerProps) {
  const [copied, setCopied] = useState(false);

  const copyMarkdown = async () => {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button
          onClick={copyMarkdown}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied!' : 'Copy Markdown'}
        </button>
        <Link
          href={siteConfig.cvPath}
          target="_blank"
          download
          className="btn-outline"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </Link>
       
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="card-glass overflow-hidden flex flex-col">
          <div className="px-4 py-2.5 border-b border-black/[0.06] dark:border-white/[0.06] text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Markdown Source
          </div>
          <pre className="p-4 text-xs leading-relaxed text-gray-700 dark:text-gray-300 overflow-auto whitespace-pre-wrap max-h-[75vh]">
            {markdown}
          </pre>
        </div>

        <div className="card-glass overflow-hidden flex flex-col">
          <div className="px-4 py-2.5 border-b border-black/[0.06] dark:border-white/[0.06] text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Preview
          </div>
          <div className="p-5 overflow-auto max-h-[75vh]">
            <ReactMarkdown components={mdComponents}>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
