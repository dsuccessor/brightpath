'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'FX & Cross-Border Advisory', href: '/services#fx-advisory' },
    { label: 'Reconciliation & Settlement', href: '/services#reconciliation' },
    { label: 'Fintech Consulting', href: '/services#fintech-consulting' },
    { label: 'Training & Development', href: '/services#training' },
    { label: 'Real Estate Advisory', href: '/services#real-estate' },
  ],
  resources: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Compliance', href: '/about#compliance' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="BrightPath Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">BrightPath</span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-gold-300 font-medium">Fin Integrated & Tech</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Optimizing cross-border payments, strengthening financial operations, and building fintech capacity for institutions worldwide.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'X', 'Email'].map((s) => (
                <a key={s} href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gold-400/20 border border-white/10 hover:border-gold-400/30 flex items-center justify-center transition-all duration-300" aria-label={s}>
                  <span className="text-gray-400 text-xs font-medium">{s[0]}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal + Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.resources.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">{link.label}</Link></li>
              ))}
            </ul>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-4">Stay Updated</h3>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-400/50 transition-colors" aria-label="Email for newsletter" />
              <button type="submit" className="px-4 py-2.5 bg-gold-400 text-navy-900 rounded-lg text-sm font-semibold hover:bg-gold-300 transition-colors">→</button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} BrightPath Fin Integrated and Tech Limited. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Advisory & Consulting Services — Non-Regulated Entity</p>
        </div>
      </div>
    </footer>
  );
}
