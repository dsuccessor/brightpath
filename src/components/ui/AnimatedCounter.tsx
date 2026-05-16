'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  light?: boolean;
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2,
  label,
  light = false,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div
        className={`text-4xl md:text-5xl font-bold mb-2 ${
          light ? 'text-gold-400' : 'text-gold-400'
        }`}
      >
        {prefix}
        {count}
        {suffix}
      </div>
      <div
        className={`text-sm font-medium tracking-wide uppercase ${
          light ? 'text-gray-300' : 'text-gray-500'
        }`}
      >
        {label}
      </div>
    </motion.div>
  );
}
