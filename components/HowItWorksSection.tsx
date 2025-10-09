"use client";

import { motion } from "framer-motion";
import { Activity, Printer, Tag, UserPlus } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Maak account aan",
    description:
      "Meld u gratis aan en krijg direct toegang tot alle functies",
  },
  {
    number: 2,
    icon: Tag,
    title: "Voer verzendgegevens in",
    description:
      "Vul afzender- en ontvangersgegevens, pakketdetails in en selecteer uw gewenste PostNL service.",
  },
  {
    number: 3,
    icon: Printer,
    title: "Druk labels af",
    description:
      "Genereer en druk verzendlabels direct af. Download als PDF of druk direct af vanuit uw browser.",
  },
  {
    number: 4,
    icon: Activity,
    title: "Volg zendingen",
    description:
      "Monitor al uw zendingen in real-time met automatische tracking updates en leveringsmeldingen.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-br from-neutral-50 via-neutral-100/30 to-primary-blue/5"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Hoe het werkt
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Begin met verzenden via ParcelWise in slechts vier eenvoudige
            stappen
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#325C84] transform -translate-y-1/2" />

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
                    className="relative z-10 w-20 h-20 rounded-full bg-[#325C84] flex items-center justify-center mb-6 shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>

                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#325C84]"
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
                    <Icon className="text-secondary-blue" size={32} />
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
                      <div className="w-1 h-12 bg-[#325C84] mx-auto" />
                      <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#325C84] mx-auto" />
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
          <motion.a
            href="/register"
            className="inline-block bg-[#325C84] text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin nu
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
