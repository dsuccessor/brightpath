import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with BrightPath Fin Integrated and Tech Limited. Partner with us for FX advisory, reconciliation, fintech consulting, and more.',
};

export default function ContactPage() {
  return <ContactContent />;
}
