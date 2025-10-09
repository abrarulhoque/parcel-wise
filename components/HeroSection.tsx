'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-blue/5 via-neutral-50 to-secondary-blue/5 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-secondary-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Slimmer verzenden met{' '}
              <span className="text-secondary-blue">PostNL</span>{' '}
              integratie
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-neutral-500 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Maak verzendlabels, volg bestellingen en beheer uw logistiek in één krachtig dashboard. Bespaar tijd en verlaag kosten met wel 40%.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                className="group bg-gradient-to-r from-primary-blue to-accent-blue text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Maak gratis account aan
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>

              <motion.button
                className="group bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 border-2 border-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                Bekijk demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {/* Floating cards animation */}
            <div className="relative h-[500px] flex items-center justify-center">
              <motion.div
                className="absolute w-64 h-80 bg-white rounded-xl shadow-2xl p-6 border border-neutral-100"
                animate={{
                  y: [0, -20, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-secondary-blue rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-neutral-100 rounded w-3/4"></div>
                    <div className="h-4 bg-neutral-100 rounded w-1/2"></div>
                  </div>
                  <div className="h-24 bg-gradient-to-br from-secondary-blue to-primary-blue rounded-lg opacity-20"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-neutral-100 rounded w-full"></div>
                    <div className="h-3 bg-neutral-100 rounded w-5/6"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute w-64 h-80 bg-white rounded-xl shadow-xl p-6 border border-neutral-100"
                style={{ left: '40%', top: '10%' }}
                animate={{
                  y: [0, 20, 0],
                  rotate: [2, -2, 2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary-blue rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-neutral-100 rounded w-3/4"></div>
                      <div className="h-2 bg-neutral-100 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="h-32 bg-secondary-blue/10 rounded-lg flex items-center justify-center">
                    <div className="text-6xl font-bold text-secondary-blue/30">📦</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-neutral-100 rounded w-full"></div>
                    <div className="h-3 bg-neutral-100 rounded w-4/5"></div>
                    <div className="h-3 bg-neutral-100 rounded w-2/3"></div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute w-16 h-16 bg-primary-blue rounded-lg"
                style={{ right: '10%', top: '20%' }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute w-12 h-12 bg-secondary-blue rounded-full"
                style={{ left: '5%', bottom: '20%' }}
                animate={{
                  y: [0, -30, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-neutral-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
