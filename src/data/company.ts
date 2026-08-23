import type { Industry } from '../types';

export const industriesData: Industry[] = [
  {
    id: 'retail-ecommerce',
    title: 'Retail & E-Commerce',
    description: 'Adaptable multi-store catalogs, vendor marketplaces, and mobile shopping solutions.',
    useCases: ['Multi-Vendor Marketplaces', 'B2B Wholesale Portals', 'Loyalty Programs', 'Omnichannel Catalog Sync'],
    iconName: 'ShoppingBag'
  },
  {
    id: 'food-restaurants',
    title: 'Food & Restaurants',
    description: 'Digital ordering ecosystems, KDS integrations, and delivery dispatch networks.',
    useCases: ['Restaurant Group Web Apps', 'Kitchen Display Systems', 'Direct Delivery Routing', 'Multi-Branch Menus'],
    iconName: 'Utensils'
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Properties',
    description: 'Automated property portfolio management, tenant portals, and lease tracking.',
    useCases: ['Commercial Asset Tracking', 'Residential Tenant Portals', 'Lease Payment Schedules', 'Maintenance Tickets'],
    iconName: 'Building2'
  },
  {
    id: 'professional-services',
    title: 'Professional & Corporate Services',
    description: 'Custom client portals, document automation, and administrative workflow platforms.',
    useCases: ['Client Self-Service Portals', 'Document Approvals', 'Resource Allocation', 'Billing Integration'],
    iconName: 'Briefcase'
  },
  {
    id: 'education-training',
    title: 'Education & Training',
    description: 'Student registration portals, course management systems, and learning workflows.',
    useCases: ['Enrollment Portals', 'Course Scheduling', 'Certification Automation', 'Student Dashboards'],
    iconName: 'GraduationCap'
  },
  {
    id: 'enterprise-growth',
    title: 'Enterprise & Startups',
    description: 'Scalable cloud software foundations engineered for rapid business expansion.',
    useCases: ['SaaS Product MVPs', 'Enterprise System Integrations', 'Legacy Refactoring', 'Cloud Migrations'],
    iconName: 'Building'
  }
];

export const whyTqniaData = [
  {
    number: '01',
    title: 'READY TO DEPLOY',
    description: 'Start with existing, proven digital foundations (T STORE, T FOOD, T REAL ESTATE) instead of spending months starting from zero.'
  },
  {
    number: '02',
    title: 'BUILT TO CUSTOMIZE',
    description: 'Adapt workflows, user roles, branding, integrations, and feature sets directly around the unique way your business operates.'
  },
  {
    number: '03',
    title: 'SCALABLE ARCHITECTURE',
    description: 'Design software solutions built from day one for future expansion, high user concurrency, and multi-region deployment.'
  },
  {
    number: '04',
    title: 'BUSINESS-FIRST FOCUS',
    description: 'Every engineering decision is connected to measurable business value, operational efficiency, and ROI rather than abstract tech trends.'
  },
  {
    number: '05',
    title: 'REGIONAL & SAUDI PRESENCE',
    description: 'Deep understanding of local business requirements, Saudi market dynamics, regional payment gateways, and Vision 2030 digital momentum.'
  },
  {
    number: '06',
    title: 'ONE LONG-TERM PARTNER',
    description: 'From initial discovery and product design to deployment, maintenance, optimization, and scaling — we stand by your business.'
  }
];

export const howWeWorkData = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'We analyze your business model, operational bottlenecks, existing tech stack, and strategic objectives.'
  },
  {
    step: '02',
    title: 'DEFINE',
    description: 'We map out a clear technical blueprint, evaluating whether a ready platform or custom software yields maximum impact.'
  },
  {
    step: '03',
    title: 'DESIGN',
    description: 'We craft high-fidelity UI/UX visual flows, dynamic user journeys, and robust system architecture specs.'
  },
  {
    step: '04',
    title: 'BUILD',
    description: 'Our engineering team develops, integrates APIs, conducts security testing, and iterates with continuous feedback.'
  },
  {
    step: '05',
    title: 'LAUNCH',
    description: 'We deploy to production cloud infrastructure, validate real-world performance, and onboard your operational team.'
  },
  {
    step: '06',
    title: 'GROW',
    description: 'We provide continuous operational support, performance monitoring, feature extension, and proactive scalability upgrades.'
  }
];

export const techCapabilitiesData = [
  { title: 'Cloud Ready', description: 'Containerized deployment for high availability & elastic scaling.', icon: 'Cloud' },
  { title: 'Scalable Architecture', description: 'Modular backend engines built to handle enterprise traffic spikes.', icon: 'Server' },
  { title: 'Secure Infrastructure', description: 'Enterprise-grade encryption, data isolation, and RBAC security.', icon: 'ShieldCheck' },
  { title: 'API & Gateway Ready', description: 'Flexible REST and GraphQL integration layers for third-party tools.', icon: 'Cpu' },
  { title: 'Web & Mobile Ecosystem', description: 'Cross-platform responsive web portals and native mobile apps.', icon: 'Smartphone' },
  { title: 'Data & Intelligence', description: 'Integrated analytics, reporting pipelines, and business intelligence dashboards.', icon: 'BarChart3' }
];

export const saudiPresenceInfo = {
  country: 'Saudi Arabia',
  city: 'Riyadh',
  district: 'Al Sahafa District',
  street: 'King Abdulaziz Road',
  phone: '+966 0565515077',
  email: 'info@tqniait.com',
  website: 'https://home.tqniait.com/',
  tagline: 'BUILT IN RIYADH. READY FOR THE REGION.'
};

export const trustHighlights = [
  { title: 'Long-Term Experience', description: 'Years of trusted digital engineering across technology domains.' },
  { title: 'Saudi Market Focus', description: 'Headquartered in Riyadh with deep regional business insights.' },
  { title: 'Transformation Capabilities', description: 'End-to-end strategy from operational audit to cloud software.' },
  { title: 'Ready Digital Products', description: 'Proven platforms in e-commerce, food ordering, and real estate.' }
];

export const testimonialsData = [
  {
    quote: "TQNiA helped us bridge our fragmented internal processes into a clean, automated digital system. Their team understood our business needs from day one.",
    author: "Enterprise Operations Manager",
    company: "Regional Commercial Group",
    verified: true
  },
  {
    quote: "Deploying T STORE saved us months of development time. We were able to customize the vendor commission logic and launch our multi-seller portal seamlessly.",
    author: "Head of Digital Transformation",
    company: "E-Commerce Venture",
    verified: true
  },
  {
    quote: "The combination of ready-to-deploy platforms and custom development capabilities makes TQNiA an invaluable technology partner for expanding operations.",
    author: "Managing Director",
    company: "Real Estate & Asset Holding Co.",
    verified: true
  }
];
