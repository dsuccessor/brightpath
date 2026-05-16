'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const services = [
  {
    id: 'fx-advisory',
    title: 'FX & Cross-Border Advisory',
    problem: 'Financial institutions and global businesses struggle with volatile FX rates, inefficient corridor routing, and opaque pricing across cross-border payment channels.',
    solution: 'We provide strategic FX advisory including corridor analysis, rate benchmarking, counterparty evaluation, and payment flow optimization to reduce costs and improve settlement speed.',
    benefits: ['Reduced FX conversion costs by up to 30%', 'Optimized payment corridor routing', 'Enhanced counterparty risk management', 'Real-time market intelligence'],
    useCases: ['Banks expanding into new remittance corridors', 'E-commerce platforms managing multi-currency settlements', 'Multinational corporations optimizing treasury operations'],
    icon: '🌍',
    color: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    id: 'reconciliation',
    title: 'Reconciliation & Settlement',
    problem: 'High-transaction organizations lose millions annually to undetected discrepancies, delayed settlements, and manual reconciliation processes that fail at scale.',
    solution: 'We conduct systematic reconciliation audits, implement automated matching frameworks, and optimize settlement workflows to ensure every transaction is accounted for.',
    benefits: ['99.9% reconciliation accuracy', 'Automated discrepancy detection', 'Faster settlement cycles', 'Comprehensive audit trails'],
    useCases: ['Payment processors handling millions of daily transactions', 'Banks reconciling interbank settlements', 'Telecoms managing airtime and mobile money flows'],
    icon: '📋',
    color: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    id: 'fintech-consulting',
    title: 'Fintech Consulting & System Audit',
    problem: 'Fintech companies face operational inefficiencies, technical debt, regulatory gaps, and scaling challenges that hinder growth and compliance.',
    solution: 'Our consultants deliver end-to-end system audits, technology assessments, regulatory gap analysis, and operational blueprints for sustainable fintech growth.',
    benefits: ['Complete operational visibility', 'Regulatory compliance roadmap', 'Technology stack optimization', 'Scalability assessment'],
    useCases: ['Fintech startups preparing for licensing', 'PSPs undergoing regulatory audits', 'Payment platforms scaling into new markets'],
    icon: '⚙️',
    color: 'from-violet-500/10 to-purple-500/10',
  },
  {
    id: 'training',
    title: 'Training & Capacity Development',
    problem: 'Financial institutions lack internal expertise in modern payment systems, FX operations, and fintech product management — limiting innovation and operational efficiency.',
    solution: 'We design and deliver corporate training programs covering FX operations, payment infrastructure, compliance frameworks, reconciliation best practices, and fintech product management.',
    benefits: ['Custom curriculum design', 'Hands-on workshop delivery', 'Certification programs', 'Ongoing mentorship'],
    useCases: ['Bank operations teams upskilling in digital payments', 'Compliance teams training on new regulatory frameworks', 'Fintech teams building product management capabilities'],
    icon: '🎓',
    color: 'from-amber-500/10 to-orange-500/10',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Advisory',
    problem: 'Corporate investors and property owners struggle with market analysis, portfolio optimization, and strategic property decisions without specialized advisory support.',
    solution: 'We provide strategic real estate consulting covering market entry analysis, portfolio review, corporate tenancy advisory, and investment structuring.',
    benefits: ['Data-driven market analysis', 'Portfolio optimization strategies', 'Corporate tenancy structuring', 'Investment risk assessment'],
    useCases: ['Corporate organizations seeking office space strategy', 'Investors evaluating real estate portfolios', 'Property owners optimizing tenant mix and returns'],
    icon: '🏢',
    color: 'from-rose-500/10 to-pink-500/10',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' as const },
  transition: { duration: 0.6 },
};

export default function ServicesContent() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold-300 text-sm font-medium mb-6">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Comprehensive{' '}
              <span className="text-gradient-gold">Advisory</span>{' '}
              Solutions
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              From cross-border payment optimization to fintech capacity building — explore our five core advisory pillars designed to transform financial operations.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section key={service.id} id={service.id} className={`py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left — Info */}
              <motion.div {...fadeUp}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-900">{service.title}</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-red-500/70 mb-2">The Challenge</h3>
                    <p className="text-gray-600 leading-relaxed">{service.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-600 mb-2">Our Solution</h3>
                    <p className="text-gray-600 leading-relaxed">{service.solution}</p>
                  </div>
                </div>
              </motion.div>

              {/* Right — Benefits & Use Cases */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-6">
                  <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold-400/10 flex items-center justify-center"><span className="text-gold-400 text-xs">✓</span></span>
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-navy-900 rounded-2xl p-8">
                  <h3 className="font-bold text-white mb-4">Use Cases</h3>
                  <ul className="space-y-3">
                    {service.useCases.map((u) => (
                      <li key={u} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-1.5" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">Let&apos;s discuss how our advisory services can be tailored to your specific needs.</p>
            <Button href="/contact" variant="primary" size="lg" id="services-cta">Partner With Us</Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
