export interface PersonalInfo {
  name: string;
  birthYear: number;
  location: string;
  email: string;
  github: string;
  linkedin: string | null;
  title: string;
  hero: {
    description: string;
    tagline: string;
  };
}

export interface Education {
  current: {
    degree: string;
    status: string;
  };
  previous: string;
  certifications: {
    completed: Certification[];
    planned: Certification[];
    longTerm: string;
  };
  goals?: {
    professional: string;
    objective: string;
  };
}

export interface Certification {
  name: string;
  year: string;
  category: 'web' | 'security' | 'language';
}

export interface SeekingInCompany {
  environment: string;
  values: string[];
}

export interface Skill {
  name: string;
  level?: 'basic' | 'intermediate' | 'advanced';
  years?: string;
  description?: string;
}

export interface AutomationSkills {
  platforms: string[];
  specialties: string[];
  frameworks: string[];
}

export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  languages: Skill[];
  databases: Skill[];
  miscelaneo: AutomationSkills;
  devops: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  complexity: 'basic' | 'intermediate' | 'advanced';
  features: string[];
  status: 'completed' | 'in-progress';
  category: string;
}

export interface Achievement {
  metric: string;
  description: string;
}

export interface BotCategory {
  name: string;
  platform: string;
  technologies: string[];
  features: string[];
  results?: {
    servers: string;
    users: string;
    reduction: string;
  };
  effectiveness?: {
    [key: string]: string;
  };
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  type: 'project' | 'ongoing';
  description: string;
  responsibilities?: string[];
  technologies: string[];
  achievements?: Achievement[];
  categories?: BotCategory[];
  generalAchievements?: Achievement[];
}

export interface Contact {
  finalMessage: string;
  cta: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

export interface PortfolioData {
  personal: PersonalInfo;
  education: Education;
  seekingInCompany: SeekingInCompany;
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  contact: Contact;
}