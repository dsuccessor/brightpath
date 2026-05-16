'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
  {
    quote: 'BrightPath transformed our cross-border payment operations. Their FX advisory saved us significant costs on our Africa-Europe corridors.',
    author: 'Sarah M.',
    role: 'Head of Treasury, West African Bank',
  },
  {
    quote: 'The reconciliation audit uncovered discrepancies we had been missing for months. Their systematic approach was exactly what we needed.',
    author: 'James K.',
    role: 'CFO, Payment Processor',
  },
  {
    quote: 'Their fintech training program elevated our entire operations team. The practical, hands-on approach made all the difference.',
    author: 'Amina O.',
    role: 'VP Operations, Remittance Company',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50/50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Client Impact"
          title="Trusted by Financial Leaders"
          subtitle="Hear from institutions and teams who've partnered with BrightPath."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm card-hover-lift relative"
            >
              {/* Quote mark */}
              <div className="text-gold-400/20 text-6xl font-serif absolute top-4 right-6">&ldquo;</div>
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-900 to-navy-700 flex items-center justify-center">
                  <span className="text-gold-400 font-bold text-sm">{t.author[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{t.author}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
