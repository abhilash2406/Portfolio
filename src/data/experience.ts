import { ExperienceItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    id: 'spericorn',
    role: 'MERN Full Stack Developer',
    company: 'Spericorn Technology Pvt. Ltd.',
    location: 'Trivandrum, Kerala, India',
    period: 'July 2022 – September 2026',
    current: true,
    summary:
      'Designing, developing, and maintaining scalable full-stack web applications using the MERN stack and modern technologies including Next.js, TypeScript, GraphQL, and WebSockets.',
    highlights: [
      {
        label: 'Full-Stack Development',
        points: [
          'Developed scalable full-stack web applications using React, Next.js, Node.js, and TypeScript.',
          'Built and maintained microservices-based backend architectures to support modular and maintainable codebases.',
          'Implemented RESTful APIs and GraphQL endpoints consumed by frontend clients.',
          'Integrated WebSockets for real-time communication features across multiple projects.',
          'Led legacy system migration efforts, improving maintainability and modernizing existing codebases.',
          'Participated in Agile/Scrum ceremonies and contributed to sprint planning and retrospectives.',
          'Conducted code reviews, provided technical mentorship to junior developers, and promoted coding best practices.',
        ],
      },
      {
        label: 'Backend Engineering',
        points: [
          'Built high-performance backend services with Node.js and Express, optimized for scalability and reliability.',
          'Implemented Redis caching strategies to reduce database load and improve API response times.',
          'Optimized SQL and NoSQL query performance across MySQL, PostgreSQL, and MongoDB databases.',
          'Applied security best practices including JWT authentication, OAuth2, RBAC, rate limiting, XSS protection, and SQL injection safeguards.',
          'Wrote unit and integration tests using Jest to ensure code correctness and reliability.',
        ],
      },
      {
        label: 'Frontend Engineering',
        points: [
          'Built responsive and accessible React interfaces using Tailwind CSS and Bootstrap.',
          'Developed reusable component libraries and custom hooks following the atomic design approach.',
          'Managed application state with Redux and Zustand across complex multi-role applications.',
          'Ensured cross-browser compatibility and mobile-first responsive design.',
        ],
      },
    ],
    technologies: [
      'React', 'Next.js', 'Node.js', 'TypeScript', 'Express',
      'MongoDB', 'MySQL', 'PostgreSQL', 'REST APIs', 'GraphQL',
      'WebSockets', 'Redis', 'JWT', 'OAuth2', 'RBAC',
      'Redux', 'Zustand', 'Tailwind CSS', 'Bootstrap', 'Jest',
      'Microservices', 'AWS', 'Firebase',
    ],
  },
  {
    id: 'immco',
    role: 'Telecom Engineer',
    company: 'IMMCO Software Solutions Pvt. Ltd.',
    location: 'Kakkanad, Kochi, India',
    period: '2020 – 2021',
    current: false,
    summary:
      'Worked on telecom network planning and infrastructure documentation, contributing to network layout design, site mapping, and geospatial data management.',
    highlights: [
      {
        label: 'Responsibilities',
        points: [
          'Created telecom network layout designs and infrastructure drawings using AutoCAD and MapInfo.',
          'Managed geospatial data for network planning, site mapping, and coverage analysis.',
          'Supported network planning workflows and collaborated with cross-functional teams.',
        ],
      },
    ],
    technologies: ['AutoCAD', 'MapInfo'],
  },
];
