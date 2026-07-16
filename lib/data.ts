import { readFileSync } from 'fs';
import path from 'path';
import type {
  Project,
  Blog,
  Experience,
  SkillsData,
  AchievementCategory,
  SocialLink,
  CaseStudy,
} from '@/types';

function readJson<T>(filename: string): T {
  const filePath = path.join(process.cwd(), 'public', 'data', filename);
  return JSON.parse(readFileSync(filePath, 'utf-8')) as T;
}

export function getProjects(): Project[] {
  return readJson<Project[]>('projects.json');
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find(p => p.slug === slug);
}

export function getBlogs(): Blog[] {
  return readJson<Blog[]>('blogs.json');
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return getBlogs().find(b => b.slug === slug);
}

export function getExperience(): Experience[] {
  return readJson<Experience[]>('experience.json');
}

export function getSkills(): SkillsData {
  return readJson<SkillsData>('skills.json');
}

export function getAchievements(): AchievementCategory[] {
  return readJson<AchievementCategory[]>('achivements.json');
}

export function getSocialLinks(): SocialLink[] {
  return readJson<SocialLink[]>('socialLinks.json');
}

export function getCaseStudies(): CaseStudy[] {
  return readJson<CaseStudy[]>('case-studies.json');
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return getCaseStudies().find(cs => cs.slug === slug);
}
