import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import GitHubRepos from '@/components/sections/GitHubRepos';
import { getRepos } from '@/lib/repos';

export const metadata: Metadata = {
  title: 'GitHub',
  description: 'Public GitHub repositories by Rashed Zaman — filtered by language and topic.',
};

export default function GitHubPage() {
  const repos = getRepos();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="GitHub"
          subtitle="Public repositories — latest 50, sorted by most recently updated"
        />
        <GitHubRepos repos={repos} />
      </div>
    </div>
  );
}
