export interface ProductFeature {
  title: string;
  description: string;
}

export interface BusinessFlowStep {
  step: string;
  label: string;
  description: string;
}

export interface Product {
  id: 't-store' | 't-food' | 't-real-estate';
  name: string;
  category: string;
  headline: string;
  subheadline: string;
  description: string;
  businessValue: string[];
  features: ProductFeature[];
  flow: BusinessFlowStep[];
  primaryCta: string;
  secondaryCta: string;
  accentColor: string; // hex or tailwind class
  accentBg: string;
  badge: string;
}

export interface BusinessChallenge {
  id: 'automate' | 'build' | 'integrate' | 'modernize' | 'grow';
  title: string;
  summary: string;
  description: string;
  outcomes: string[];
  solutionCategories: {
    title: string;
    description: string;
  }[];
  icon: string;
}

export interface SolutionPillar {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  technology: string[];
  outcome: string[];
  tag: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  useCases: string[];
  iconName: string;
}

export interface LeadFormData {
  name: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
  lookingFor: string;
  timeline: string;
  challengeDetails: string;
}
