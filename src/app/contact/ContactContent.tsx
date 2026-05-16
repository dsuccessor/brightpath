'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const contactInfo = [
  { label: 'Email', value: 'info@brightpathfintech.com', icon: '✉️', href: 'mailto:info@brightpathfintech.com' },
  { label: 'Phone', value: '+234 (0) 800 BRIGHT', icon: '📞', href: 'tel:+2340800274448' },
  { label: 'Address', value: 'Lagos, Nigeria', icon: '📍', href: '#' },
];

const services = [
  'FX & Cross-Border Advisory',
  'Reconciliation & Settlement',
  'Fintech Consulting & Audit',
  'Training & Capacity Development',
  'Real Estate Advisory',
  'Other',
];

export default function ContactContent() {
  const [formState, setFormState] = useState({
    name: '', email: '', company: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold-300 text-sm font-medium mb-6">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Let&apos;s Start a{' '}
              <span className="text-gradient-gold">Conversation</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you&apos;re exploring advisory services or ready to partner — we&apos;re here to help.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                Reach out to discuss how BrightPath can optimize your financial operations and accelerate growth.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((c) => (
                  <a key={c.label} href={c.href} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-gold-400/30 hover:bg-gold-400/5 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-navy-900/5 group-hover:bg-gold-400/10 flex items-center justify-center transition-colors">
                      <span className="text-xl">{c.icon}</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">{c.label}</div>
                      <div className="text-navy-900 font-semibold">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office hours */}
              <div className="p-6 rounded-2xl bg-navy-900 text-white">
                <h3 className="font-bold mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between"><span>Monday - Friday</span><span className="text-gold-400">9:00 AM - 6:00 PM WAT</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="text-gray-500">By appointment</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-gray-500">Closed</span></div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-12 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <Button onClick={() => setSubmitted(false)} variant="secondary" size="sm">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10 space-y-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Send Us a Message</h3>
                  <p className="text-sm text-gray-500 mb-6">Fill out the form and we&apos;ll be in touch shortly.</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">Full Name *</label>
                      <input id="name" type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy-900 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">Email Address *</label>
                      <input id="email" type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy-900 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" placeholder="john@company.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy-900 mb-2">Company / Organization</label>
                    <input id="company" type="text" value={formState.company} onChange={(e) => setFormState({ ...formState, company: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy-900 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" placeholder="Your company name" />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-navy-900 mb-2">Service of Interest</label>
                    <select id="service" value={formState.service} onChange={(e) => setFormState({ ...formState, service: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy-900 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all">
                      <option value="">Select a service</option>
                      {services.map((s) => (<option key={s} value={s}>{s}</option>))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">Message *</label>
                    <textarea id="message" rows={5} required value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy-900 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all resize-none" placeholder="Tell us about your needs..." />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full" id="contact-submit">
                    Send Message
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
