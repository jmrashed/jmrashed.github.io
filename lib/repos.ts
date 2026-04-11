import reposData from '@/public/data/repos.json';

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  topics: string[];
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

export function getRepos(): Repo[] {
  return reposData as Repo[];
}
