'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Package, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-secondary-blue/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-blue/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-secondary-blue/20 text-secondary-blue px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Live Demo
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Alles wat u nodig heeft in één dashboard
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Beheer bestellingen, maak labels, volg zendingen en analyseer prestaties vanuit één intuïtieve interface.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Glass morphism container */}
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-white/20">
            {/* Browser bar */}
            <div className="bg-neutral-800 rounded-t-xl p-3 flex items-center gap-2 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-neutral-700 rounded px-4 py-1 ml-4 text-xs text-neutral-400">
                dashboard.parcelwise.com
              </div>
            </div>

            {/* Dashboard content */}
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-b-xl p-6 space-y-6">
              {/* Stats cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Package, label: 'Totaal zendingen', value: '1,247', change: '+12.5%', color: '[#325C84]' },
                  { icon: TrendingUp, label: 'Actieve bestellingen', value: '89', change: 'Wachten op labels', color: '[#325C84]' },
                  { icon: Users, label: 'Onderweg', value: '342', change: '98% op tijd', color: '[#325C84]' },
                  { icon: DollarSign, label: 'Kostenbesparing', value: '€3,459', change: '38% bespaard', color: '[#325C84]' },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-gradient-to-br from-neutral-700/50 to-neutral-800/50 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all cursor-pointer group"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-neutral-400 mb-1">{stat.label}</div>
                      <div className="text-xs text-secondary-blue">{stat.change}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Chart placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="bg-gradient-to-br from-neutral-700/30 to-neutral-800/30 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Verzendactiviteit</h3>
                  <div className="text-xs text-neutral-400">Laatste 30 dagen</div>
                </div>

                {/* Animated bars */}
                <div className="flex items-end justify-between gap-2 h-32">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const height = Math.random() * 100 + 20;
                    return (
                      <motion.div
                        key={i}
                        className="flex-1 bg-[#325C84] rounded-t"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + i * 0.05, duration: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                      />
                    );
                  })}
                </div>
              </motion.div>

              {/* Orders table preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="bg-gradient-to-br from-neutral-700/30 to-neutral-800/30 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Recente bestellingen</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 bg-neutral-800/50 rounded-lg p-3 cursor-pointer hover:bg-neutral-800 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary-blue" />
                      <div className="flex-1">
                        <div className="h-3 bg-neutral-700 rounded w-24 mb-2" />
                        <div className="h-2 bg-neutral-700/50 rounded w-32" />
                      </div>
                      <div className="px-3 py-1 bg-secondary-blue/20 text-secondary-blue text-xs rounded-full">
                        Onderweg
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating action button */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              className="group bg-[#325C84] text-white px-8 py-4 rounded-full font-semibold shadow-2xl flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Ontdek dashboard
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
