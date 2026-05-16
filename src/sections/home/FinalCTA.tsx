'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="final-cta">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-gold-400/10 text-gold-400 border border-gold-400/20">
            Get Started
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 leading-tight mb-6">
            Partner with BrightPath to{' '}
            <span className="text-gradient-gold">Simplify Global</span>{' '}
            Financial Operations
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you&apos;re optimizing cross-border payments, strengthening reconciliation,
            or building fintech capacity — we&apos;re ready to help you achieve operational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" id="final-cta-partner">
              Partner With Us
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="/services" variant="secondary" size="lg" id="final-cta-services">
              View All Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
