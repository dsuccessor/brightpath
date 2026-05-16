'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Understand Client Needs',
    description: 'Deep-dive discovery sessions to understand your operational landscape, pain points, and strategic objectives.',
  },
  {
    number: '02',
    title: 'Structure the Solution',
    description: 'Data-driven analysis and solution architecture tailored to your specific requirements and compliance context.',
  },
  {
    number: '03',
    title: 'Connect with Licensed Institutions',
    description: 'Bridge the gap between your needs and licensed financial service providers for compliant execution.',
  },
  {
    number: '04',
    title: 'Execute & Optimize',
    description: 'Ongoing support, performance monitoring, and continuous optimization to deliver sustained results.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden" id="process">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How It Works"
          title="A Structured Path to Optimized Operations"
          subtitle="Our proven four-step methodology ensures clarity, compliance, and measurable outcomes at every stage."
          light
        />

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-8 h-full hover:bg-white/10 transition-colors duration-300">
                  {/* Step number */}
                  <div className="w-14 h-14 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-6">
                    <span className="text-gold-400 font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-navy-800 border border-gold-400/30 flex items-center justify-center">
                      <svg className="w-3 h-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
