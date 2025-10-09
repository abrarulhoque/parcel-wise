'use client';

import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: "We hebben onze verzendtijd met 60% verminderd en de kosten met 35%. De PostNL integratie is naadloos en het dashboard is ongelooflijk intuïtief.",
    name: "Marieke van der Berg",
    company: "DirectSales BV",
    location: "Amsterdam",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    quote: "ParcelWise heeft onze logistieke activiteiten getransformeerd. Alleen de automatiseringsfuncties besparen ons al 10 uur per week. Zeer aanbevolen!",
    name: "Jan de Vries",
    company: "TechStore Online",
    location: "Rotterdam",
    rating: 5,
    avatar: "👨‍💻",
  },
  {
    quote: "Het beste verzendplatform dat we hebben gebruikt. Klantenservice is uitstekend en de analytics helpen ons elke dag slimmere beslissingen te nemen.",
    name: "Sophie Bakker",
    company: "Fashion Hub NL",
    location: "Utrecht",
    rating: 5,
    avatar: "👩‍🎨",
  },
  {
    quote: "Integratie was ongelooflijk eenvoudig. We waren in minder dan een uur operationeel. De bulklabel printfunctie is een game-changer.",
    name: "Michael Peters",
    company: "ElectroShop",
    location: "Den Haag",
    rating: 5,
    avatar: "👨‍💼",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get 3 visible testimonials (current, next, and one after)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Vertrouwd door bedrijven zoals het uwe
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Zie wat onze klanten te zeggen hebben over hun ervaring met ParcelWise
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`relative bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-8 border-2 ${
                  index === 0
                    ? 'border-secondary-blue shadow-2xl scale-105'
                    : 'border-neutral-100 shadow-lg opacity-75'
                } transition-all duration-500`}
              >
                {/* Quote mark decoration */}
                <div className="absolute top-6 right-6 text-6xl text-secondary-blue/10 font-serif">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <Star className="text-secondary-blue fill-secondary-blue" size={20} />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-neutral-700 leading-relaxed mb-6 relative z-10 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary-blue to-primary-blue flex items-center justify-center text-3xl shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-500">
                      {testimonial.company}
                    </div>
                    <div className="text-xs text-neutral-400">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Decorative gradient */}
                {index === 0 && (
                  <motion.div
                    className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-secondary-blue/20 to-primary-blue/20 blur-2xl"
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

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4">
            <motion.button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center hover:border-secondary-blue hover:bg-secondary-blue hover:text-white transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-secondary-blue'
                      : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center hover:border-secondary-blue hover:bg-secondary-blue hover:text-white transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '500+', label: 'Tevreden klanten' },
            { value: '98%', label: 'Tevredenheidspercentage' },
            { value: '1M+', label: 'Labels gemaakt' },
            { value: '4.9/5', label: 'Gemiddelde score' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-secondary-blue mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
