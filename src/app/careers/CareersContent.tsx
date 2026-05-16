'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const culture = [
  { title: 'Excellence', desc: 'We pursue the highest standards in everything we do — from advisory quality to client experience.', icon: '⭐' },
  { title: 'Accountability', desc: 'We own our outcomes and are transparent in our processes, decisions, and commitments.', icon: '🎯' },
  { title: 'Innovation', desc: 'We challenge conventional thinking and embrace new approaches to solve complex financial problems.', icon: '💡' },
  { title: 'Integrity', desc: 'We operate with unwavering honesty, ethical standards, and respect for every stakeholder.', icon: '🛡️' },
];

const roles = [
  { title: 'FX Operations Analyst', type: 'Full-time', location: 'Lagos / Remote', dept: 'Advisory' },
  { title: 'Reconciliation Specialist', type: 'Full-time', location: 'Lagos', dept: 'Operations' },
  { title: 'Fintech Consultant', type: 'Full-time', location: 'Remote', dept: 'Consulting' },
  { title: 'Training Coordinator', type: 'Full-time', location: 'Lagos / Remote', dept: 'Training' },
  { title: 'Business Development Manager', type: 'Full-time', location: 'Lagos', dept: 'Growth' },
];

const lookingFor = [
  'Deep understanding of financial services, payments, or fintech',
  'Strong analytical and problem-solving capabilities',
  'Excellent communication and stakeholder management skills',
  'Comfort with ambiguity and fast-paced environments',
  'Commitment to continuous learning and professional growth',
];

const appProcess = [
  { step: '01', title: 'Apply Online', desc: 'Submit your CV and a brief cover note highlighting your relevant experience.' },
  { step: '02', title: 'Initial Screening', desc: 'Our team reviews your application and reaches out for a brief introductory call.' },
  { step: '03', title: 'Technical Assessment', desc: 'A case study or practical assessment relevant to the role you\'re applying for.' },
  { step: '04', title: 'Final Interview', desc: 'Meet the team leadership for a culture-fit and strategic alignment conversation.' },
  { step: '05', title: 'Offer & Onboarding', desc: 'Receive your offer and begin a structured onboarding experience.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' as const },
  transition: { duration: 0.6 },
};

export default function CareersContent() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold-300 text-sm font-medium mb-6">Careers</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Build the Future of{' '}
              <span className="text-gradient-gold">Financial Operations</span>{' '}
              and Cross-Border Payments
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Join a team of driven professionals shaping how institutions optimize payments, reconciliation, and fintech capacity worldwide.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Why Work With Us" title="More Than a Job — A Mission" subtitle="At BrightPath, you won't just work in fintech. You'll shape how financial operations are designed, optimized, and scaled across markets." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'High-Impact Work', desc: 'Advisory that directly shapes how institutions operate — your work matters at scale.', icon: '🚀' },
              { title: 'Continuous Growth', desc: 'Access to training, mentorship, and exposure to diverse financial markets and challenges.', icon: '📈' },
              { title: 'Global Exposure', desc: 'Work with clients across Africa, Europe, and emerging markets on complex cross-border challenges.', icon: '🌐' },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 card-hover-lift">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-navy-900 text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Culture" title="Values That Drive Everything We Do" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {culture.map((c, i) => (
              <motion.div key={c.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center card-hover-lift">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-bold text-navy-900 mb-3">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-white" id="open-roles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Open Roles" title="Find Your Place at BrightPath" subtitle="We're looking for talented professionals who are passionate about financial excellence." />
          <div className="space-y-4 max-w-4xl mx-auto">
            {roles.map((role, i) => (
              <motion.div key={role.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl border border-gray-100 hover:border-gold-400/30 hover:shadow-md transition-all duration-300 bg-white">
                <div className="mb-3 sm:mb-0">
                  <h3 className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors">{role.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-navy-900/5 text-navy-700">{role.dept}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-navy-900/5 text-navy-700">{role.type}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-navy-900/5 text-navy-700">{role.location}</span>
                  </div>
                </div>
                <Button href="/contact" variant="outline" size="sm">Apply Now</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <SectionHeading label="What We Look For" title="The BrightPath Profile" align="left" />
              <ul className="space-y-4">
                {lookingFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Application Process */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-xl font-bold text-navy-900 mb-8">Application Process</h3>
              <div className="space-y-6">
                {appProcess.map((step, i) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                      <span className="text-gold-400 font-bold text-sm">{step.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">{step.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                      {i < appProcess.length - 1 && <div className="w-px h-4 bg-gray-200 ml-5 mt-3" />}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
            <p className="text-lg text-gray-300 mb-10">Send your CV and a brief intro to join the BrightPath team.</p>
            <Button href="/contact" variant="primary" size="lg" id="careers-cta">Apply Now</Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
