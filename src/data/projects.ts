import { Project, FeaturedProject } from '@/types';

export const featuredProject: FeaturedProject = {
  id: 'erp-revamp',
  name: 'ERP Tool – Revamp',
  description:
    'A comprehensive revamp of an enterprise ERP platform, modernizing the HR and administration modules to improve functionality, maintainability, and user experience. The platform integrates the GitHub GraphQL API to surface employee pull request activity and uses AI-powered analysis to evaluate submitted code changes and generate quality scores.',
  technologies: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'GitHub GraphQL API', 'AI'],
  highlights: [
    'Revamped HR and administration modules for improved functionality and UX.',
    'Integrated GitHub GraphQL API to retrieve and display employee pull request details, changes, and review status.',
    'Implemented AI-powered pull request analysis that evaluates submitted changes and generates quality scores.',
    'Improved maintainability by refactoring legacy code into modular, reusable components.',
  ],
  featured: true,
  workflow: {
    source: 'GitHub GraphQL API',
    sourceDetails: [
      'Employee pull requests',
      'Code changes',
      'Review status',
      'PR metadata',
    ],
    arrow: '→',
    target: 'AI PR Analysis',
    targetDetails: [
      'Code evaluation',
      'Quality scoring',
      'Developer insights',
    ],
  },
};

export const projects: Project[] = [
  {
    id: 'money-lending',
    name: 'Money Lending Processing Tool',
    description:
      'A full-stack financial lending platform integrating multiple third-party banking and payment APIs to manage merchant information, syndicate ratings, and end-to-end payment workflows.',
    technologies: ['Next.js', 'Node.js', 'TypeScript'],
    highlights: [
      'Integrated Actum API, Mercury API, and LendSaaS API for banking and payment processing.',
      'Built frontend and backend workflows for merchant onboarding and payment management.',
      'Implemented robust API response handling and error management for third-party services.',
      'Managed syndicate rating workflows and merchant information flows.',
    ],
    featured: false,
  },
  {
    id: 'borrowing-platform',
    name: 'Borrowing Platform',
    description:
      'A platform for managing item lending, borrowing, returns, and availability. Features role-based dashboards for regular users and administrators with real-time status updates.',
    technologies: ['React', 'Node.js'],
    highlights: [
      'Built user and administrator dashboards with role-based access control.',
      'Developed backend APIs to handle borrowing, return, and availability workflows.',
      'Implemented real-time status updates for active lending activities.',
      'Designed intuitive UI flows for item request, approval, and return processes.',
    ],
    featured: false,
  },
  {
    id: 'school-management',
    name: 'School Management Platform',
    description:
      'A multi-role enterprise school management platform serving administrators, schools, parents, and students — each with dedicated portals, protected routes, and tailored workflows.',
    technologies: ['Next.js', 'Node.js'],
    highlights: [
      'Built separate role-based portals for administrators, schools, parents, and students.',
      'Implemented protected routes and authentication workflows for multi-role access.',
      'Developed API integrations for school data, user management, and communications.',
      'Ensured secure and clean navigation between role-specific views.',
    ],
    featured: false,
  },
];
