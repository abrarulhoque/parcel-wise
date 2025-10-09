'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Functies', href: '#features' },
    { name: 'Hoe het werkt', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-blue to-primary-blue rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-neutral-900">ParcelWise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-700 hover:text-secondary-blue font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <motion.button
                className="px-6 py-2.5 text-neutral-700 hover:text-secondary-blue font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Inloggen
              </motion.button>
            </Link>
            <Link href="/register">
              <motion.button
                className="px-6 py-2.5 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Aanmelden
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-secondary-blue transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-neutral-700 hover:text-secondary-blue font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-neutral-200">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <button className="w-full px-6 py-2.5 text-neutral-700 hover:text-secondary-blue font-semibold transition-colors text-center border border-neutral-200 rounded-lg">
                  Inloggen
                </button>
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)}>
                <button className="w-full px-6 py-2.5 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-semibold shadow-md">
                  Aanmelden
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
