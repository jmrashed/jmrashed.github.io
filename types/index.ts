// Project types
export interface Project {
  id: number;
  'Product Name': string;
  Description: string;
  Category: string;
  Industry: string;
  Technology: string[];
  Keywords?: string[];
  Features?: string[];
  'Target Audience'?: string;
  'Pricing Model'?: string;
  'Estimated Price Range'?: string;
  'Development Time'?: string;
  'Team Size'?: string;
  'Complexity Level'?: string;
  'Market Size'?: string;
  'Growth Rate'?: string;
  'Key Competitors'?: string[];
  'Deployment Options'?: string[];
  Scalability?: string;
  'Security Features'?: string[];
  'Integration Capabilities'?: string[];
  'Support Languages'?: string[];
  'Mobile Support'?: string;
  'Database Requirements'?: string;
  'Server Requirements'?: string;
  Compliance?: string[];
  'ROI Potential'?: string;
  'Market Demand'?: string;
  'Risk Level'?: string;
  'Unique Selling Points'?: string[];
  role?: string;
  tech_stack_summary?: string[];
  impact?: string;
  github?: string;
  CodeLink?: string;
  live_demo?: string;
}

// Blog types
export interface Blog {
  id: string;
  product_id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  tags: string[];
  category: string;
  status: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

// Experience types
export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  stack: string[];
  skills: string[];
  responsibilities: string[];
  icon?: string;
}

// Skills types
export interface Skill {
  name: string;
  icon_class: string;
  icon_color: string;
}

export interface SkillCategory {
  category: string;
  icon_class: string;
  icon_color: string;
  border_color: string;
  background_gradient: string;
  skills: Skill[];
}

export interface LeadershipSkill {
  name: string;
  background_gradient: string;
  border_color: string;
  text_color: string;
}

export interface SkillsData {
  technical_skills: SkillCategory[];
  leadership_skills: LeadershipSkill[];
  remote_tools: Skill[];
}

// Achievement types
export interface AchievementItem {
  id: number;
  title: string;
  description: string;
}

export interface AchievementCategory {
  category: string;
  items: AchievementItem[];
}

// Social link types
export interface SocialLink {
  name: string;
  url: string;
  description: string;
  type: string;
  icon: string;
  colorClass: string;
  target: string;
}

// Menu types
export interface MenuItem {
  label: string;
  href: string;
}

// Case study types
export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologiesUsed: string[];
  projectId?: number;
  image?: string;
  duration?: string;
  role?: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
