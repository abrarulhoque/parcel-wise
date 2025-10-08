'use client';

import { motion } from 'framer-motion';
import { Printer, MapPin, TrendingDown, TrendingUp, Settings, FileText } from 'lucide-react';

const features = [
  {
    icon: Printer,
    title: 'Instant Label Creation',
    description: 'Create PostNL shipping labels in seconds. Bulk print up to 500 labels at once with automated address validation.',
    color: 'from-primary-blue to-accent-blue'
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Monitor all shipments in one dashboard. Automatic tracking updates keep you and your customers informed 24/7.',
    color: 'from-primary-blue to-accent-blue'
  },
  {
    icon: TrendingDown,
    title: 'Cost Optimization',
    description: 'Access discounted PostNL rates and smart shipping suggestions. Save up to 40% on domestic and international shipping.',
    color: 'from-primary-blue to-accent-blue'
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Insights',
    description: 'Track carrier performance, shipping costs, and delivery success rates. Make data-driven decisions to improve operations.',
    color: 'from-primary-blue to-accent-blue'
  },
  {
    icon: Settings,
    title: 'Automated Workflows',
    description: 'Set rules to auto-assign shipping methods, generate labels, and send notifications. Reduce manual work by 70%.',
    color: 'from-primary-blue to-accent-blue'
  },
  {
    icon: FileText,
    title: 'Invoice Management',
    description: 'View and download all shipping invoices in one place. Export reports for accounting and reconciliation.',
    color: 'from-primary-blue to-accent-blue'
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Everything You Need to Ship Smarter
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Powerful features designed to streamline your shipping operations and delight your customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-xl p-8 border border-neutral-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-secondary-blue transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative element */}
                  <motion.div
                    className={`absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
