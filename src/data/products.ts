import type { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 't-store',
    name: 'T STORE',
    category: 'MULTI-VENDOR E-COMMERCE PLATFORM',
    headline: 'BUILD YOUR OWN MARKETPLACE.',
    subheadline: 'A complete multi-vendor commerce platform designed to launch, operate, and scale digital marketplaces.',
    description: 'T STORE is TQNiA’s ready-to-deploy multi-vendor e-commerce platform. Built for high scalability, central vendor control, automated commission processing, and unified customer checkout.',
    businessValue: [
      'Launch faster with proven marketplace architecture',
      'Manage multiple vendors centrally from one enterprise portal',
      'Flexible commission rates & automated vendor payouts',
      'Customizable product catalog, inventory & promotional engines'
    ],
    features: [
      { title: 'Multi-Vendor Management', description: 'Centralized admin controls for onboarded vendors, approvals, and performance tracking.' },
      { title: 'Vendor Portal & Dashboard', description: 'Self-service dashboard for merchants to manage catalog, stock, pricing, and fulfillment.' },
      { title: 'Order & Inventory Sync', description: 'Real-time multi-warehouse inventory updates, order routing, and delivery status.' },
      { title: 'Payment & Commission Engine', description: 'Automated revenue splits, payment gateway integrations, and financial reporting.' },
      { title: 'Promotions & Loyalty', description: 'Coupon creation, flash sales, customer rewards, and marketing campaign tools.' },
      { title: 'Customer Experience Suite', description: 'Fast mobile web checkout, order tracking, search filters, and multi-language support.' }
    ],
    flow: [
      { step: '01', label: 'Vendor Onboarding', description: 'Merchant registers and configures product catalog & pricing.' },
      { step: '02', label: 'T STORE Hub', description: 'Platform verifies stock, applies commissions, and publishes listings.' },
      { step: '03', label: 'Customer Order', description: 'User browses, selects products, and completes unified multi-vendor payment.' },
      { step: '04', label: 'Fulfillment & Analytics', description: 'Automated order dispatch, payout generation, and admin reporting.' }
    ],
    primaryCta: 'Explore T STORE',
    secondaryCta: 'Request a Demo',
    accentColor: '#E92929',
    accentBg: 'rgba(233, 41, 41, 0.15)',
    badge: 'Multi-Vendor Platform'
  },
  {
    id: 't-food',
    name: 'T FOOD',
    category: 'RESTAURANT & FOOD ORDERING PLATFORM',
    headline: 'YOUR DIGITAL FOOD BUSINESS. END TO END.',
    subheadline: 'A complete restaurant ecosystem connecting customers, kitchens, order management, and delivery dispatch.',
    description: 'T FOOD empowers restaurant groups, food halls, and dark kitchens with a full digital ordering infrastructure. Eliminate third-party commissions by owning your customer relationship and operational pipeline.',
    businessValue: [
      'Own your customer data and avoid high aggregator commissions',
      'Streamline kitchen display workflows and order preparation times',
      'Integrate online ordering directly into POS & delivery networks',
      'Enable seamless multi-branch menu & pricing customization'
    ],
    features: [
      { title: 'Customer Ordering App & Web', description: 'Branded web and mobile ordering with custom menu customization & modifiers.' },
      { title: 'Restaurant Management Portal', description: 'Real-time menu updates, branch hours, item availability, and price tiers.' },
      { title: 'Kitchen Display System (KDS)', description: 'Order routing to prep stations with target timing and order priority visualizer.' },
      { title: 'Delivery & Driver Dispatch', description: 'Automated driver assignment, real-time GPS delivery tracking, and ETA metrics.' },
      { title: 'Promotions & Dining Rewards', description: 'Targeted discounts, combo deals, push notifications, and customer loyalty retention.' },
      { title: 'Analytics & Sales Intelligence', description: 'Peak hour analytics, best-seller reports, ingredient usage, and revenue metrics.' }
    ],
    flow: [
      { step: '01', label: 'Customer Order', description: 'Customer selects items & customizes modifiers on mobile portal.' },
      { step: '02', label: 'T FOOD Engine', description: 'Platform processes payment, routes ticket to nearest branch KDS.' },
      { step: '03', label: 'Kitchen & Dispatch', description: 'Kitchen prepares dish; driver receives route dispatch alert.' },
      { step: '04', label: 'Delivery & Feedback', description: 'Live order tracking to doorstep with customer rating feedback.' }
    ],
    primaryCta: 'Explore T FOOD',
    secondaryCta: 'Request a Demo',
    accentColor: '#E92929',
    accentBg: 'rgba(233, 41, 41, 0.15)',
    badge: 'Restaurant Ecosystem'
  },
  {
    id: 't-real-estate',
    name: 'T REAL ESTATE',
    category: 'REAL ESTATE MANAGEMENT SYSTEM',
    headline: 'TURN PROPERTY OPERATIONS INTO A DIGITAL EXPERIENCE.',
    subheadline: 'A comprehensive real estate platform simplifying property portfolios, lease contracts, tenant billing, and maintenance.',
    description: 'T REAL ESTATE transforms property management into a automated, transparent digital workflow. Designed for commercial developers, residential managers, and asset holding companies across Saudi Arabia and the region.',
    businessValue: [
      'Centralize property, unit, tenant, and lease tracking',
      'Automate payment reminders, installment tracking & invoices',
      'Accelerate maintenance request resolution with tenant portal',
      'Instant financial visibility into occupancy, yields & arrears'
    ],
    features: [
      { title: 'Property & Unit Portfolio', description: 'Complete inventory of buildings, floors, residential/commercial units, and specs.' },
      { title: 'Lease & Contract Engine', description: 'Digital contract generation, renewal alerts, rent escalation, and document vault.' },
      { title: 'Tenant Portal & App', description: 'Self-service bill payments, lease view, digital document requests, and notifications.' },
      { title: 'Maintenance Management', description: 'Work order ticket creation, vendor allocation, SLA tracking, and status updates.' },
      { title: 'Payment & Collection Dashboard', description: 'Automated installment tracking, overdue collection alerts, and bank reconciliation.' },
      { title: 'Executive Portfolio Analytics', description: 'Real-time occupancy rates, yield calculations, cashflow forecasts, and audit trails.' }
    ],
    flow: [
      { step: '01', label: 'Unit Listing & Lease', description: 'Property manager assigns unit and registers lease contract digital terms.' },
      { step: '02', label: 'T REAL ESTATE Core', description: 'System generates billing schedule, payment reminders, and tenant access.' },
      { step: '03', label: 'Tenant Interaction', description: 'Tenant pays installment via portal or submits maintenance work request.' },
      { step: '04', label: 'Operations & Reporting', description: 'Automatic payment ledger update, contractor dispatch, and asset yield report.' }
    ],
    primaryCta: 'Explore T REAL ESTATE',
    secondaryCta: 'Request a Demo',
    accentColor: '#E92929',
    accentBg: 'rgba(233, 41, 41, 0.15)',
    badge: 'Property Management'
  }
];
