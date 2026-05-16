'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-16 ${alignment}`}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-gold-400/10 text-gold-400 border border-gold-400/20">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
