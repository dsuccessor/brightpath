'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden" id="hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gold-400/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Floating geometric shapes */}
      <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-1/4 right-1/4 w-20 h-20 border border-gold-400/20 rounded-2xl hidden lg:block" />
      <motion.div animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-1/3 right-1/3 w-12 h-12 border border-white/10 rounded-full hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold-300 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                Advisory & Fintech Consulting
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Optimizing{' '}
              <span className="text-gradient-gold">Cross-Border</span>{' '}
              Payments. Strengthening{' '}
              <span className="text-gradient-gold">Financial</span>{' '}
              Operations.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl">
              We help financial institutions, fintechs, and cross-border businesses optimize FX operations, strengthen reconciliation processes, and build capacity through expert advisory and consulting.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" id="hero-cta-partner">
                Partner With Us
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Button>
              <Button href="/services" variant="outline" size="lg" id="hero-cta-services">
                Explore Services
              </Button>
            </motion.div>
          </div>

          {/* Right — Fintech dashboard mockup */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="hidden lg:block">
            <div className="relative">
              {/* Main dashboard card */}
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold text-sm">Transaction Overview</span>
                  <span className="text-gold-400 text-xs font-medium px-3 py-1 rounded-full bg-gold-400/10">Live</span>
                </div>
                {/* Chart bars */}
                <div className="flex items-end gap-2 h-32">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }} className="flex-1 rounded-t-sm bg-gradient-to-t from-gold-400/60 to-gold-300/30" />
                  ))}
                </div>
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {[
                    { label: 'Processed', value: '$2.4B+' },
                    { label: 'Success Rate', value: '99.7%' },
                    { label: 'Markets', value: '45+' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-gold-400 font-bold text-lg">{stat.value}</div>
                      <div className="text-gray-400 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating card - FX Rate */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute -top-6 -right-6 glass-card rounded-xl p-4 min-w-[180px]">
                <div className="text-xs text-gray-400 mb-1">USD → NGN</div>
                <div className="text-white font-bold text-lg">₦1,580.25</div>
                <div className="text-emerald-400 text-xs flex items-center gap-1 mt-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  +0.32% today
                </div>
              </motion.div>

              {/* Floating card - Settlement */}
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute -bottom-4 -left-6 glass-card rounded-xl p-4 min-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs text-gray-400">Settlement Complete</span>
                </div>
                <div className="text-white font-semibold text-sm">GBP 450,000 → EUR</div>
                <div className="text-gray-400 text-xs mt-1">Settled in 1.2s</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
