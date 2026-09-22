import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    icon: 'Code2',
    description: 'Core programming languages',
    skills: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: 'Layers',
    description: 'Frontend & backend frameworks',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Redux' },
      { name: 'Zustand' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
    ],
  },
  {
    category: 'Tools & Cloud',
    icon: 'Cloud',
    description: 'Infrastructure, APIs & developer tools',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Firebase' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
      { name: 'WebSockets' },
      { name: 'Stripe' },
      { name: 'Serverless' },
      { name: 'AWS' },
      { name: 'Google Cloud' },
    ],
  },
  {
    category: 'Databases',
    icon: 'Database',
    description: 'SQL & NoSQL data stores',
    skills: [
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    category: 'Testing & Practices',
    icon: 'ShieldCheck',
    description: 'Quality, workflow & collaboration',
    skills: [
      { name: 'Jest' },
      { name: 'Agile / Scrum' },
      { name: 'Microservices' },
      { name: 'Pair Programming' },
      { name: 'Code Reviews' },
    ],
  },
];
