'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for small businesses',
    features: [
      'Up to 100 shipments/month',
      'PostNL integration',
      'Basic tracking',
      'Email support',
      'Invoice downloads',
    ],
    popular: false,
    color: 'from-neutral-700 to-neutral-800',
    borderColor: 'border-neutral-200',
  },
  {
    name: 'Professional',
    price: '79',
    description: 'Most popular choice',
    features: [
      'Up to 500 shipments/month',
      'All Starter features',
      'Bulk label printing',
      'Analytics dashboard',
      'Automation rules',
      'Priority support',
      'Custom branding',
    ],
    popular: true,
    color: 'from-primary-orange to-secondary-blue',
    borderColor: 'border-primary-orange',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For high-volume shippers',
    features: [
      'Unlimited shipments',
      'All Professional features',
      'Dedicated account manager',
      'API access',
      'Custom integrations',
      'SLA guarantee',
      'Priority phone support',
    ],
    popular: false,
    color: 'from-purple-600 to-blue-600',
    borderColor: 'border-purple-200',
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Choose the plan that fits your business. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-2xl p-8 border-2 ${tier.borderColor} ${
                tier.popular ? 'shadow-2xl scale-105 z-10' : 'shadow-lg'
              } hover:shadow-2xl transition-all duration-300`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-orange to-secondary-blue text-white px-6 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tier.color} rounded-t-2xl`} />

              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    {tier.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  {tier.price !== 'Custom' ? (
                    <>
                      <span className="text-5xl font-bold text-neutral-900">
                        €{tier.price}
                      </span>
                      <span className="text-neutral-500">/month</span>
                    </>
                  ) : (
                    <span className="text-5xl font-bold text-neutral-900">
                      {tier.price}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.15 + i * 0.05, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="text-white" size={14} />
                      </div>
                      <span className="text-neutral-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    tier.popular
                      ? `bg-gradient-to-r ${tier.color} text-white shadow-lg hover:shadow-xl`
                      : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </motion.button>
              </div>

              {/* Decorative element */}
              {tier.popular && (
                <motion.div
                  className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-primary-orange/20 to-secondary-blue/20 blur-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12 text-neutral-500"
        >
          <p>All plans include 14-day free trial • No credit card required • Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  );
}
