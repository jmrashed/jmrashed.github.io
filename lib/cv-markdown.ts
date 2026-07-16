import { getExperience, getSkills, getAchievements } from '@/lib/data';
import { siteConfig } from '@/lib/utils';

const EDUCATION = 'B.Sc. in Computer Science & Engineering — Stamford University Bangladesh (2015) · CGPA 3.73/4.0';

/**
 * Builds a full, ATS-friendly Markdown version of the CV from the same
 * JSON data sources that power the site's Experience/Skills/About sections —
 * kept in sync automatically, and deliberately excludes phone numbers.
 */
export function getCvMarkdown(): string {
  const experience = getExperience();
  const skills = getSkills();
  const achievements = getAchievements();

  const lines: string[] = [];

  lines.push(`# ${siteConfig.name}`);
  lines.push('');
  lines.push(siteConfig.title.replace(`${siteConfig.name} — `, ''));
  lines.push('');
  lines.push(
    `${siteConfig.location} · ${siteConfig.email} · [LinkedIn](${siteConfig.linkedin}) · [GitHub](${siteConfig.github}) · [Portfolio](${siteConfig.url})`
  );
  lines.push('');
  lines.push('---');
  lines.push('');

  lines.push('## PROFESSIONAL SUMMARY');
  lines.push('');
  lines.push(siteConfig.description);
  lines.push('');
  lines.push('---');
  lines.push('');

  lines.push('## CORE SKILLS');
  lines.push('');
  for (const category of skills.technical_skills) {
    lines.push(`**${category.category}:** ${category.skills.map(s => s.name).join(', ')}`);
    lines.push('');
  }
  lines.push(`**Leadership:** ${skills.leadership_skills.map(s => s.name).join(', ')}`);
  lines.push('');
  lines.push(`**Remote Collaboration Tools:** ${skills.remote_tools.map(s => s.name).join(', ')}`);
  lines.push('');
  lines.push('---');
  lines.push('');

  lines.push('## PROFESSIONAL EXPERIENCE');
  lines.push('');
  for (const job of experience) {
    lines.push(`### ${job.role} | ${job.company}`);
    lines.push(`*${job.duration} — ${job.location}*`);
    lines.push('');
    for (const item of job.responsibilities) {
      lines.push(`- ${item}`);
    }
    lines.push('');
    lines.push(`**Stack:** ${job.stack.join(', ')}`);
    lines.push('');
  }
  lines.push('---');
  lines.push('');

  lines.push('## KEY ACHIEVEMENTS');
  lines.push('');
  for (const category of achievements) {
    lines.push(`### ${category.category}`);
    lines.push('');
    for (const item of category.items) {
      lines.push(`- **${item.title}:** ${item.description}`);
    }
    lines.push('');
  }
  lines.push('---');
  lines.push('');

  lines.push('## EDUCATION & CERTIFICATIONS');
  lines.push('');
  lines.push(`- ${EDUCATION}`);
  for (const cert of skills.certifications) {
    lines.push(`- ${cert.name} — ${cert.provider}${cert.url ? ` ([link](${cert.url}))` : ''}`);
  }
  lines.push('');
  lines.push('---');
  lines.push('');

  lines.push('## AVAILABILITY');
  lines.push('');
  lines.push(`- **Target Roles:** ${siteConfig.targetRoles}`);
  lines.push(`- **Work Modes:** ${siteConfig.workModes}`);
  lines.push(`- **Timezone:** ${siteConfig.timezone}`);
  lines.push('');

  return lines.join('\n');
}
