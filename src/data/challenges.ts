import type { BusinessChallenge } from '../types';

export const challengesData: BusinessChallenge[] = [
  {
    id: 'automate',
    title: 'AUTOMATE',
    summary: 'Reduce manual processes and improve operational efficiency.',
    description: 'Manual approvals, paper-based forms, and repetitive data entry slow business velocity. TQNiA builds automated workflows that eliminate friction and errors.',
    outcomes: [
      'Eliminate manual data entry and repetitive paperwork',
      'Accelerate internal approval cycles by up to 80%',
      'Gain real-time operational visibility across departments'
    ],
    solutionCategories: [
      { title: 'Workflow Automation', description: 'Digital approval flows, task routing, and operational triggers.' },
      { title: 'Business Systems (ERP/CRM)', description: 'Custom administrative systems tailored to internal operations.' },
      { title: 'Executive Dashboards', description: 'Real-time performance indicators and operational metrics.' },
      { title: 'Operational Platforms', description: 'Centralized tools for inventory, workforce, and asset tracking.' }
    ],
    icon: 'Cpu'
  },
  {
    id: 'build',
    title: 'BUILD',
    summary: 'Create a new digital product, platform, or customer experience.',
    description: 'Transform new business models into market-ready digital products. TQNiA provides end-to-end product design, engineering, and architecture.',
    outcomes: [
      'Launch production-grade digital applications from concept to deployment',
      'Ensure high security, performance, and cross-platform reliability',
      'Build custom features tailored specifically around your competitive edge'
    ],
    solutionCategories: [
      { title: 'Custom Software', description: 'Enterprise software engineered for specific business logic.' },
      { title: 'Web Applications', description: 'Modern, high-performance web platforms and customer portals.' },
      { title: 'Mobile Applications', description: 'Native iOS & Android apps designed for smooth user retention.' },
      { title: 'SaaS Platforms', description: 'Multi-tenant cloud platforms designed for scalable subscription models.' }
    ],
    icon: 'Code2'
  },
  {
    id: 'integrate',
    title: 'INTEGRATE',
    summary: 'Connect existing systems, platforms, data, and workflows.',
    description: 'Siloed applications fragment business visibility. We bridge existing software, ERPs, payment providers, and custom APIs into one synchronized network.',
    outcomes: [
      'Sync data instantly between legacy tools and modern applications',
      'Remove duplicate data entry across isolated company systems',
      'Enable seamless third-party service and payment integrations'
    ],
    solutionCategories: [
      { title: 'API Engineering & Gateways', description: 'Secure, high-throughput REST and GraphQL API layer.' },
      { title: 'Third-Party Systems', description: 'Connect CRM, ERP, warehouse, and logistics software.' },
      { title: 'Payment Gateways', description: 'Local Saudi and regional payment processor integrations.' },
      { title: 'Business Platforms', description: 'Unified data hubs for cross-departmental reporting.' }
    ],
    icon: 'Layers'
  },
  {
    id: 'modernize',
    title: 'MODERNIZE',
    summary: 'Replace outdated processes and legacy digital experiences.',
    description: 'Legacy code, sluggish interfaces, and monolithic systems hinder scalability. We refactor technical debt and modernize user experiences for the digital age.',
    outcomes: [
      'Upgrade legacy software to modern cloud architecture',
      'Enhance mobile responsiveness and user interface satisfaction',
      'Maintain operational continuity while migrating legacy data'
    ],
    solutionCategories: [
      { title: 'Legacy Refactoring', description: 'Modernize legacy codebases into modular, scalable architectures.' },
      { title: 'Digital Transformation', description: 'Comprehensive strategy to digitize end-to-end company operations.' },
      { title: 'Cloud Infrastructure', description: 'Migrate server infrastructure to secure, scalable cloud environments.' },
      { title: 'UX/UI Modernization', description: 'Redesign outdated interfaces into sleek, modern experiences.' }
    ],
    icon: 'Zap'
  },
  {
    id: 'grow',
    title: 'GROW',
    summary: 'Build scalable digital capabilities that support the next stage of your business.',
    description: 'Rapid business expansion demands resilient digital infrastructure. We build scalable customer acquisition platforms, multi-channel commerce, and data engines.',
    outcomes: [
      'Expand into digital sales channels and marketplace models',
      'Handle spikes in user traffic and transaction volume with ease',
      'Leverage data analytics to uncover new revenue opportunities'
    ],
    solutionCategories: [
      { title: 'E-Commerce Expansion', description: 'Multi-store, B2B, and B2C digital commerce platforms.' },
      { title: 'SaaS Architecture', description: 'Scale customer onboarding and enterprise cloud services.' },
      { title: 'Scalable Systems', description: 'High-availability infrastructure designed for volume spikes.' },
      { title: 'Data & Analytics', description: 'Business intelligence engines that drive data-informed decisions.' }
    ],
    icon: 'TrendingUp'
  }
];
