'use client';

import { useState, useMemo } from 'react';
import { Star, GitFork, Eye, Clock, ExternalLink, GitBranch, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Repo } from '@/lib/repos';

export type { Repo };

// Relevant to last 2-3 jobs: Tech Lead & PM at Onest Tech, PM at Spondon IT
const JOB_STACK_FILTERS = [
  { label: 'All', value: 'All' },
  { label: '🤖 AI', value: 'AI' },
  { label: 'PHP', value: 'PHP' },
  { label: 'JavaScript', value: 'JavaScript' },
  { label: 'TypeScript', value: 'TypeScript' },
  { label: 'Python', value: 'Python' },
  { label: 'Shell', value: 'Shell' },
  { label: 'HTML', value: 'HTML' },
  { label: 'CSS', value: 'CSS' },
];

// Repos to highlight as featured
const HIGHLIGHTED = new Set([
  'voice-interactive-chatbot',
  'ai-attendance-checker',
  'animal-classifier-with-zero-shot-learning',
  'ai-desktop-assistant',
  'face-recognition-login-html-python',
  'ai-climate-prediction',
  'YouTube-Channel-Analysis',
  'ai-measurement-tailor-shopify-app',
]);

const AI_KEYWORDS = [
  'ai', 'ml', 'machine-learning', 'deep-learning', 'llm', 'gpt', 'chatbot',
  'neural', 'speech-recognition', 'voice-assistant', 'zero-shot', 'pytorch',
  'scikit-learn', 'face-recognition', 'image-classification', 'nlp',
];

function isAIRepo(repo: Repo) {
  const name = repo.name.toLowerCase();
  const desc = (repo.description || '').toLowerCase();
  const topics = repo.topics.map(t => t.toLowerCase());
  return AI_KEYWORDS.some(kw =>
    name.includes(kw) || desc.includes(kw) || topics.includes(kw)
  );
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-500',
  PHP: 'bg-purple-500',
  Go: 'bg-cyan-500',
  Rust: 'bg-orange-600',
  Java: 'bg-red-500',
  'C#': 'bg-violet-500',
  CSS: 'bg-pink-500',
  HTML: 'bg-orange-400',
  Shell: 'bg-gray-500',
  Vue: 'bg-emerald-500',
  Dart: 'bg-sky-500',
};

function timeAgo(dateStr: string) {
  const days = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
  if (days === 0) return 'today';
  if (days === 1) return '1 day ago';
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

const filterCls = (active: boolean, isAI?: boolean) =>
  active
    ? isAI
      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/30'
      : 'bg-indigo-600 text-white'
    : 'bg-black/[0.05] dark:bg-white/[0.07] text-gray-600 dark:text-gray-300 hover:bg-black/[0.1] dark:hover:bg-white/[0.12]';

export default function GitHubRepos({ repos }: { repos: Repo[] }) {
  const [selected, setSelected] = useState('All');

  const filtered = useMemo(() => {
    if (selected === 'All') return repos;
    if (selected === 'AI') return repos.filter(isAIRepo);
    return repos.filter(r => r.language === selected);
  }, [repos, selected]);

  // Highlighted repos float to top when visible
  const sorted = useMemo(() => {
    const highlighted = filtered.filter(r => HIGHLIGHTED.has(r.name));
    const rest = filtered.filter(r => !HIGHLIGHTED.has(r.name));
    return [...highlighted, ...rest];
  }, [filtered]);

  return (
    <>
      <div className="flex flex-wrap gap-2 items-center mb-8">
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mr-1">
          Stack
        </span>
        {JOB_STACK_FILTERS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setSelected(value)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${filterCls(selected === value, value === 'AI')}`}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Showing{' '}
        <span className="font-semibold text-gray-800 dark:text-gray-200">{filtered.length}</span> of{' '}
        <span className="font-semibold text-gray-800 dark:text-gray-200">{repos.length}</span>{' '}
        repositories
        {selected === 'AI' && (
          <span className="ml-2 inline-flex items-center gap-1 text-violet-500 font-medium">
            <Sparkles className="w-3 h-3" /> AI & Machine Learning
          </span>
        )}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sorted.map((repo, i) => {
          const highlighted = HIGHLIGHTED.has(repo.name);
          const ai = isAIRepo(repo);

          return (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className={`relative flex flex-col p-5 rounded-xl border transition-all duration-200 hover:shadow-lg ${
                highlighted
                  ? ai
                    ? 'border-violet-400/50 dark:border-violet-500/40 bg-gradient-to-br from-violet-50/60 to-indigo-50/40 dark:from-violet-950/20 dark:to-indigo-950/10 hover:border-violet-500/70 hover:shadow-violet-200/50 dark:hover:shadow-violet-900/30'
                    : 'border-indigo-400/50 dark:border-indigo-500/40 bg-white/80 dark:bg-white/[0.05] hover:border-indigo-500/70'
                  : 'border-black/[0.07] dark:border-white/[0.07] bg-white/60 dark:bg-white/[0.03] hover:border-indigo-400/40 dark:hover:border-indigo-500/30'
              }`}
            >
              {/* Highlight badge */}
              {highlighted && (
                <span className={`absolute -top-2.5 right-3 inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  ai
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white'
                    : 'bg-indigo-600 text-white'
                }`}>
                  <Zap className="w-2.5 h-2.5" />
                  {ai ? 'AI Featured' : 'Featured'}
                </span>
              )}

              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 min-w-0">
                  <GitBranch className={`w-4 h-4 shrink-0 ${highlighted && ai ? 'text-violet-400' : 'text-gray-400'}`} />
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-semibold truncate transition-colors ${
                      highlighted && ai
                        ? 'text-violet-700 dark:text-violet-300 hover:text-violet-900 dark:hover:text-violet-100'
                        : 'text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    {repo.name}
                  </a>
                </div>
                <div className="flex gap-1 shrink-0">
                  {repo.archived && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
                      archived
                    </span>
                  )}
                  {repo.fork && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500">
                      fork
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-3 flex-1">
                {repo.description || 'No description provided.'}
              </p>

              {repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {repo.topics.slice(0, 4).map(t => (
                    <span
                      key={t}
                      className={`text-[10px] px-2 py-0.5 rounded-full ${
                        highlighted && ai
                          ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400'
                          : 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-black/[0.05] dark:border-white/[0.05]">
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className={`w-2.5 h-2.5 rounded-full ${LANG_COLORS[repo.language] ?? 'bg-gray-400'}`} />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" /> {repo.forks_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {repo.watchers_count}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[10px] text-gray-400">
                    <Clock className="w-3 h-3" /> {timeAgo(repo.pushed_at)}
                  </span>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-500 transition-colors"
                      title="Live demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {sorted.length === 0 && (
        <div className="text-center py-20 text-gray-400">No repositories match the selected filters.</div>
      )}
    </>
  );
}
