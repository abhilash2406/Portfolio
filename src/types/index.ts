export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  highlights: {
    label: string;
    points: string[];
  }[];
  technologies: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export interface FeaturedProject extends Project {
  workflow?: {
    source: string;
    sourceDetails: string[];
    arrow: string;
    target: string;
    targetDetails: string[];
  };
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface DevelopmentApproachCard {
  icon: string;
  title: string;
  description: string;
}
