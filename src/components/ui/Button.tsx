'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  id?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  id,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-gold-400 text-navy-900 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20',
    secondary:
      'bg-navy-900 text-white hover:bg-navy-800 hover:shadow-lg hover:shadow-navy-900/30',
    outline:
      'border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900',
    ghost:
      'text-navy-900 hover:bg-navy-50 dark:text-white dark:hover:bg-navy-800',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes} id={id}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      className={classes}
      type={type}
      disabled={disabled}
      id={id}
    >
      {children}
    </motion.button>
  );
}
