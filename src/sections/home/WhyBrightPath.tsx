'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const reasons = [
  {
    title: 'Advisory-Driven',
    description: 'We provide expert guidance without directly handling funds — ensuring objectivity and trust in every engagement.',
    icon: '🎯',
  },
  {
    title: 'Data-Informed',
    description: 'Every recommendation is backed by rigorous data analysis, market intelligence, and quantitative modeling.',
    icon: '📊',
  },
  {
    title: 'Client-Centric',
    description: 'Solutions tailored to each client\u0027s unique operational context, risk profile, and growth objectives.',
    icon: '🤝',
  },
  {
    title: 'Compliance-Conscious',
    description: 'Deep understanding of regulatory landscapes across jurisdictions, ensuring all advisory aligns with compliance requirements.',
    icon: '🛡️',
  },
  {
    title: 'Partnership-Focused',
    description: 'We build long-term relationships, working alongside licensed institutions and clients as strategic partners.',
    icon: '🌐',
  },
];

export default function WhyBrightPath() {
  return (
    <section className="py-24 bg-white" id="why-brightpath">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why BrightPath"
          title="Built on Trust, Driven by Expertise"
          subtitle="We combine deep financial knowledge with operational excellence to deliver measurable outcomes."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-gray-100 hover:border-gold-400/30 bg-white hover:bg-gradient-to-br hover:from-navy-900 hover:to-navy-800 transition-all duration-500 card-hover-lift"
            >
              <div className="text-3xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-bold text-navy-900 group-hover:text-white mb-3 transition-colors duration-500">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-500">
                {reason.description}
              </p>
              {/* Gold corner accent on hover */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-3 right-3 w-8 h-0.5 bg-gold-400 rounded-full" />
                <div className="absolute top-3 right-3 w-0.5 h-8 bg-gold-400 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
