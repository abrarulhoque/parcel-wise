'use client';

import { motion } from 'framer-motion';
import { Link2, Settings2, Tag, Activity } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Link2,
    title: 'Connect Your Store',
    description: 'Integrate with your e-commerce platform in under 5 minutes. We support Shopify, WooCommerce, Magento, and custom solutions.',
  },
  {
    number: 2,
    icon: Settings2,
    title: 'Configure Settings',
    description: 'Set up your PostNL account, shipping preferences, and automation rules. Our setup wizard guides you through every step.',
  },
  {
    number: 3,
    icon: Tag,
    title: 'Create Labels',
    description: 'Import orders, select shipping options, and generate labels. Print individually or in batches of hundreds.',
  },
  {
    number: 4,
    icon: Activity,
    title: 'Track & Manage',
    description: 'Monitor shipments in real-time, handle exceptions, and access detailed analytics. Keep customers updated automatically.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-orange-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Get started in minutes with our simple four-step process
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-orange via-secondary-blue to-success transform -translate-y-1/2" />

          {/* Steps */}
          <div className="grid lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Number badge */}
                  <motion.div
                    className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary-orange to-secondary-blue flex items-center justify-center mb-6 shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>

                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-orange to-secondary-blue"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center mb-6 border border-neutral-100"
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="text-primary-orange" size={32} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow connector for mobile */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="lg:hidden mt-8 mb-4"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                    >
                      <div className="w-1 h-12 bg-gradient-to-b from-primary-orange to-secondary-blue mx-auto" />
                      <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-secondary-blue mx-auto" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-gradient-to-r from-primary-orange to-secondary-blue text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
