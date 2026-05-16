'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-navy-900/5 border-b border-gray-100'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" id="nav-logo">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="BrightPath Logo" fill className="object-contain" priority />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-lg font-bold leading-tight transition-colors duration-300 ${
                    isScrolled ? 'text-navy-900' : 'text-white'
                  }`}
                >
                  BrightPath
                </span>
                <span
                  className={`text-[10px] tracking-[0.15em] uppercase font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gold-400' : 'text-gold-300'
                  }`}
                >
                  Fin Integrated & Tech
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`nav-${link.label.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    pathname === link.href
                      ? isScrolled
                        ? 'text-gold-400'
                        : 'text-gold-300'
                      : isScrolled
                      ? 'text-gray-600 hover:text-navy-900 hover:bg-gray-50'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/contact" variant="primary" size="sm" id="nav-cta-partner">
                Partner With Us
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-navy-900' : 'text-white'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
              id="nav-mobile-toggle"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-navy-900' : 'bg-white'
                  } ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`}
                />
                <span
                  className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-navy-900' : 'bg-white'
                  } ${isMobileOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-navy-900' : 'bg-white'
                  } ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-8">
                <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          pathname === link.href
                            ? 'bg-gold-400/10 text-gold-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Partner With Us
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
