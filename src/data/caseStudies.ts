import type { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Enterprise Multi-Vendor Commerce Infrastructure',
    category: 'E-Commerce & Marketplaces',
    challenge: 'A growing commercial brand required a unified digital marketplace to connect independent suppliers, automate vendor commissions, and streamline customer orders through a single checkout.',
    solution: 'Engineered a multi-vendor platform powered by T STORE architecture featuring dedicated vendor portals, automated commission rules, and real-time inventory synchronization.',
    technology: ['T STORE Architecture', 'React Web Platform', 'Cloud Microservices', 'Payment Gateway Integration'],
    outcome: [
      'Centralized multi-vendor operations',
      'Automated commission & payout workflows',
      'Unified customer shopping experience'
    ],
    tag: 'T STORE Implementation'
  },
  {
    id: 'case-2',
    title: 'Digital Ordering & Dispatch System for Multi-Branch Chain',
    category: 'Food & Hospitality Tech',
    challenge: 'A restaurant operator needed to eliminate high third-party delivery fees while providing seamless mobile ordering and direct kitchen dispatch across multiple branch locations.',
    solution: 'Implemented T FOOD platform with customized customer web ordering, kitchen display screens for prep stations, and automated delivery driver routing.',
    technology: ['T FOOD Ecosystem', 'Mobile Ordering Portal', 'Kitchen Display System', 'Driver Dispatch Engine'],
    outcome: [
      'Direct customer ordering relationship',
      'Streamlined kitchen prep workflow',
      'Enhanced delivery dispatch visibility'
    ],
    tag: 'T FOOD Implementation'
  },
  {
    id: 'case-3',
    title: 'Property Portfolio & Lease Management Automation',
    category: 'Real Estate & Property Tech',
    challenge: 'A property manager faced fragmented tenant records, manual lease contract renewals, and delayed maintenance ticket tracking across commercial and residential buildings.',
    solution: 'Deployed T REAL ESTATE system customized with tenant self-service portal, automated billing schedules, contract vault, and work order dispatching.',
    technology: ['T REAL ESTATE System', 'Tenant Self-Service App', 'Automated Billing Ledger', 'Maintenance Ticketing'],
    outcome: [
      'Single source of truth for property portfolio',
      'Automated lease installment reminders',
      'Faster maintenance issue resolution'
    ],
    tag: 'T REAL ESTATE Implementation'
  },
  {
    id: 'case-4',
    title: 'Custom Business Operations & Approval Workflow Platform',
    category: 'Digital Transformation',
    challenge: 'An enterprise entity relied on paper-based approvals and manual spreadsheets to manage inter-departmental operations and project resource requests.',
    solution: 'Designed and built a custom administrative workflow platform with multi-level approval hierarchies, automated document generation, and executive dashboards.',
    technology: ['Custom Software Architecture', 'Workflow Engine', 'Role-Based Access Control', 'Executive Dashboards'],
    outcome: [
      'Eliminated paper-based approval bottlenecks',
      'Provided clear audit trails for management',
      'Accelerated internal task resolution time'
    ],
    tag: 'Custom Engineering'
  }
];
