import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore BrightPath\'s comprehensive advisory services — FX & cross-border advisory, reconciliation, fintech consulting, corporate training, and real estate advisory.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}
