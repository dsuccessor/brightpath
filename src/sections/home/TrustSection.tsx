'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const partners = [
  'Central Bank Partners',
  'Licensed PSPs',
  'Global Remittance Networks',
  'Tier-1 Banks',
  'Fintech Platforms',
  'Payment Processors',
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white relative" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <AnimatedCounter end={150} suffix="+" label="Financial Teams Served" />
          <AnimatedCounter end={45} suffix="+" label="Markets Covered" />
          <AnimatedCounter end={99} suffix="%" label="Client Satisfaction" />
          <AnimatedCounter end={500} suffix="M+" prefix="$" label="Transactions Optimized" />
        </div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-100 pt-12"
        >
          <p className="text-center text-sm text-gray-400 font-medium uppercase tracking-wider mb-8">
            Trusted across the financial ecosystem
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {partners.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-gold-400/30 hover:bg-gold-400/5 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-navy-900/5 flex items-center justify-center">
                  <span className="text-navy-900 font-bold text-xs">{name.split(' ').map(w => w[0]).join('')}</span>
                </div>
                <span className="text-sm font-medium text-gray-600">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
