import type { Metadata } from 'next';
import CareersContent from './CareersContent';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join BrightPath and build the future of financial operations and cross-border payments. Explore open roles and our culture of excellence.',
};

export default function CareersPage() {
  return <CareersContent />;
}
