'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  product: [
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Integrations', href: '#' },
    { label: 'API', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Status', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-orange to-secondary-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold">ParcelWise</span>
            </div>

            <p className="text-neutral-400 mb-6 leading-relaxed">
              Ship smarter with PostNL integration. Create labels, track orders, and manage logistics in one powerful dashboard.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <Mail size={18} />
                <a href="mailto:info@parcelwise.com">info@parcelwise.com</a>
              </div>
              <div className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <Phone size={18} />
                <a href="tel:+31201234567">+31 20 123 4567</a>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <MapPin size={18} />
                <span>Amsterdam, Netherlands</span>
              </div>
            </div>
          </motion.div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="font-bold text-lg mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-neutral-800 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} ParcelWise. All rights reserved.
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-gradient-to-br hover:from-primary-orange hover:to-secondary-blue flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>

            {/* Language selector */}
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors text-sm">
                🇳🇱 NL
              </button>
              <button className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors text-sm">
                🇬🇧 EN
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="h-1 bg-gradient-to-r from-primary-orange via-secondary-blue to-success" />
    </footer>
  );
}
