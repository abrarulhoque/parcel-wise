'use client';

import { motion } from 'framer-motion';
import { Printer, MapPin, TrendingDown, TrendingUp, Settings, FileText } from 'lucide-react';

const features = [
  {
    icon: Printer,
    title: 'Direct label aanmaken',
    description: 'Maak PostNL verzendlabels in seconden. Druk tot 500 labels tegelijk af met geautomatiseerde adresvalidatie.',
    color: '[#325C84]'
  },
  {
    icon: MapPin,
    title: 'Live tracking',
    description: 'Monitor alle zendingen in één dashboard. Automatische tracking updates houden u en uw klanten 24/7 op de hoogte.',
    color: '[#325C84]'
  },
  {
    icon: TrendingDown,
    title: 'Kostenoptimalisatie',
    description: 'Profiteer van gereduceerde PostNL-tarieven en slimme verzendadviezen. Verstuur sneller, slimmer en efficiënter – zowel nationaal als internationaal.',
    color: '[#325C84]'
  },
  {
    icon: TrendingUp,
    title: 'Data & Inzichten',
    description: 'Krijg duidelijk inzicht in vervoerdersprestaties, verzendkosten en afleveringssucces. Maak datagedreven keuzes om je resultaten te verbeteren.',
    color: '[#325C84]'
  },
  {
    icon: Settings,
    title: 'Geautomatiseerde workflows',
    description: 'Regel verzendmethoden en meldingen efficiënt en behoud volledige controle over handmatige labelaanmaak.',
    color: '[#325C84]'
  },
  {
    icon: FileText,
    title: 'Factuurbeheer',
    description: 'Bekijk en download verzendfacturen op één plek. Exporteer eenvoudig rapporten voor je boekhouding.',
    color: '[#325C84]'
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
            Alles wat u nodig heeft om slimmer te verzenden
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Ontworpen om uw verzendingen sneller, slimmer en klantgerichter te maken.
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
                className="group relative bg-white rounded-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-lg bg-${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
