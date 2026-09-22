import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Abhilash Kumar A | MERN Full Stack Developer',
  description:
    'Full-Stack Developer with 4+ years of experience building scalable web applications using the MERN stack, Next.js, TypeScript, and modern cloud technologies. Based in Kochi, India.',
  keywords: [
    'MERN Stack Developer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Next.js Developer',
    'TypeScript',
    'MongoDB',
    'PostgreSQL',
    'GraphQL',
    'Abhilash Kumar A',
    'Kochi India',
  ],
  authors: [{ name: 'Abhilash Kumar A', url: 'https://linkedin.com/in/abhilash-kumar-a' }],
  openGraph: {
    type: 'website',
    title: 'Abhilash Kumar A | MERN Full Stack Developer',
    description:
      'Full-Stack Developer with 4+ years of experience building scalable web applications using the MERN stack, Next.js, TypeScript, and modern cloud technologies.',
    locale: 'en_IN',
    siteName: 'Abhilash Kumar A – Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhilash Kumar A | MERN Full Stack Developer',
    description:
      'Full-Stack Developer with 4+ years of experience building scalable web applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
