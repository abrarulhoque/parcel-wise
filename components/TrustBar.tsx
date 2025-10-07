'use client';

import { motion } from 'framer-motion';

const companies = [
  { name: 'Bol.com', logo: '🛍️' },
  { name: 'Coolblue', logo: '💼' },
  { name: 'Wehkamp', logo: '🏪' },
  { name: 'Zalando', logo: '👔' },
  { name: 'MediaMarkt', logo: '📱' },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-neutral-50 border-y border-neutral-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
            Trusted by 500+ Dutch businesses
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-white transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-300">
                  {company.logo}
                </div>
                <span className="text-sm font-semibold text-neutral-400 group-hover:text-neutral-700 transition-colors">
                  {company.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
