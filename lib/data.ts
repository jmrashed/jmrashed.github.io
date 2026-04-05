import { readFileSync } from "fs";
import path from "path";
import type {
  Project,
  Blog,
  Experience,
  SkillsData,
  AchievementCategory,
  SocialLink,
  CaseStudy,
} from "@/types";

function readJson<T>(filename: string): T {
  const filePath = path.join(process.cwd(), "public", "data", filename);
  return JSON.parse(readFileSync(filePath, "utf-8")) as T;
}

export function getProjects(): Project[] {
  return readJson<Project[]>("projects.json");
}

export function getProjectById(id: number): Project | undefined {
  return getProjects().find((p) => p.id === id);
}

export function getBlogs(): Blog[] {
  return readJson<Blog[]>("blogs.json");
}

export function getBlogById(id: string): Blog | undefined {
  return getBlogs().find((b) => b.id === id);
}

export function getExperience(): Experience[] {
  return readJson<Experience[]>("experience.json");
}

export function getSkills(): SkillsData {
  return readJson<SkillsData>("skills.json");
}

export function getAchievements(): AchievementCategory[] {
  return readJson<AchievementCategory[]>("achivements.json");
}

export function getSocialLinks(): SocialLink[] {
  return readJson<SocialLink[]>("socialLinks.json");
}

export function getCaseStudies(): CaseStudy[] {
  return readJson<CaseStudy[]>("case-studies.json");
}

export function getCaseStudyById(id: number): CaseStudy | undefined {
  return getCaseStudies().find((cs) => cs.id === id);
}
