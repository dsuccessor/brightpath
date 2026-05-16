'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const pillars = [
  { title: 'FX & Cross-Border Advisory', desc: 'Optimizing foreign exchange operations and cross-border payment flows for institutions and global businesses.', icon: '🌍' },
  { title: 'Reconciliation & Settlement', desc: 'Systematic audits, settlement optimization, and discrepancy resolution for financial accuracy.', icon: '📋' },
  { title: 'Fintech Consulting & Audit', desc: 'Technology assessments, system audits, and strategic consulting for operational excellence.', icon: '⚙️' },
  { title: 'Training & Capacity Development', desc: 'Corporate programs building fintech expertise across FX, payments, compliance, and product management.', icon: '🎓' },
  { title: 'Real Estate Advisory', desc: 'Strategic consulting for investors, corporate tenants, and property portfolio management.', icon: '🏢' },
];

const approach = [
  { title: 'Advisory-Driven', desc: 'Expert guidance without directly handling funds — ensuring objectivity and trust.' },
  { title: 'Data-Informed', desc: 'Every recommendation backed by rigorous analysis and market intelligence.' },
  { title: 'Client-Centric', desc: 'Solutions tailored to each client\'s unique operational context and growth goals.' },
  { title: 'Compliance-Conscious', desc: 'Deep regulatory understanding ensuring all advisory aligns with requirements.' },
  { title: 'Partnership-Focused', desc: 'Long-term relationships as strategic partners alongside licensed institutions.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' as const },
  transition: { duration: 0.6 },
};

export default function AboutContent() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold-300 text-sm font-medium mb-6">About BrightPath</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Empowering Financial{' '}
              <span className="text-gradient-gold">Excellence</span> Globally
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              BrightPath Fin Integrated and Tech Limited is an advisory and intermediary firm that optimizes cross-border payments, strengthens financial operations, and builds fintech capacity — without directly holding funds or performing regulated financial services.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white" id="who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <SectionHeading label="Who We Are" title="A Trusted Advisory Partner in Financial Operations" align="left" />
              <p className="text-gray-600 leading-relaxed mb-6">
                BrightPath was founded to bridge the gap between complex financial operations and operational excellence. We serve financial institutions, fintechs, PSPs, remittance companies, and cross-border businesses with strategic advisory that drives measurable results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team combines deep expertise in foreign exchange, payment systems, reconciliation, and fintech product management to deliver solutions that strengthen operations, reduce costs, and accelerate growth.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { val: '150+', label: 'Teams Served' },
                    { val: '45+', label: 'Markets' },
                    { val: '99%', label: 'Satisfaction' },
                    { val: '24/7', label: 'Advisory Support' },
                  ].map((s, i) => (
                    <div key={i} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-gold-400 font-bold text-2xl mb-1">{s.val}</div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-400/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do — 5 Pillars */}
      <section className="py-24 bg-gray-50/50" id="what-we-do">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="What We Do" title="Five Pillars of Advisory Excellence" subtitle="Our services span the full spectrum of financial operations and fintech capacity building." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm card-hover-lift">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white" id="approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Approach" title="Principled Advisory, Measurable Impact" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approach.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-gold-400/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-gold-400 font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-2">{a.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden" id="compliance">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-sm font-medium mb-8">
              🛡️ Compliance & Regulatory Transparency
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Commitment to Transparency</h2>
            <div className="glass-card rounded-2xl p-8 md:p-12 text-left space-y-4">
              <p className="text-gray-300 leading-relaxed">
                BrightPath Fin Integrated and Tech Limited operates strictly as an <strong className="text-white">advisory and consulting firm</strong>. We do not hold client funds, process payments, or perform any regulated financial services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                All transaction execution and fund handling are carried out by <strong className="text-white">licensed and regulated financial institutions</strong> that we connect our clients with. Our role is to advise, structure, and optimize — never to act as a financial intermediary in a regulated capacity.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This structure ensures that our advisory remains <strong className="text-white">objective, compliant, and aligned</strong> with the regulatory frameworks of every jurisdiction we operate in.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Ready to Optimize Your Financial Operations?</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">Let&apos;s explore how BrightPath can strengthen your cross-border payments, reconciliation, and fintech capabilities.</p>
            <Button href="/contact" variant="primary" size="lg" id="about-cta-partner">Partner With Us</Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
