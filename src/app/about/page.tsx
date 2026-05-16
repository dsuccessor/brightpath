import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about BrightPath Fin Integrated and Tech Limited — our mission, approach, and commitment to optimizing financial operations worldwide.',
};

export default function AboutPage() {
  return <AboutContent />;
}
