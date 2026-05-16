'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href = '/services',
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="block group">
        <div className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-sm card-hover-lift overflow-hidden h-full">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-navy-900/5 flex items-center justify-center mb-6 group-hover:bg-gold-400/10 transition-colors duration-300">
            <div className="text-navy-900 group-hover:text-gold-400 transition-colors duration-300">
              {icon}
            </div>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            {description}
          </p>

          {/* Arrow */}
          <div className="mt-6 flex items-center text-gold-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
            Learn more
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
