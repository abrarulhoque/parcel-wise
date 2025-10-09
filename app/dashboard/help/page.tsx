'use client';

import { motion } from 'framer-motion';
import { Search, BookOpen, MessageCircle, Mail, Phone, FileText, Video, HelpCircle, ChevronDown, ExternalLink } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const quickLinks = [
    { title: 'Aan de slag handleiding', icon: BookOpen, description: 'Leer de basis van ParcelWise', color: 'from-primary-blue to-accent-blue' },
    { title: 'Video tutorials', icon: Video, description: 'Bekijk stapsgewijze video handleidingen', color: 'from-primary-blue to-accent-blue' },
    { title: 'API documentatie', icon: FileText, description: 'Integreer met onze API', color: 'from-primary-blue to-accent-blue' },
    { title: 'Contact opnemen', icon: MessageCircle, description: 'Krijg hulp van ons team', color: 'from-primary-blue to-accent-blue' },
  ];

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'How do I create my first shipping label?',
          a: 'Navigate to the "Create Label" page from the sidebar menu. Fill in the customer details, delivery address, and package information. Select your preferred shipping method and click "Generate Label". You can then print or download the label directly.'
        },
        {
          q: 'What shipping methods are available?',
          a: 'We offer three PostNL shipping methods: Standard (2-3 business days), Next Day (next business day delivery), and Same Day (same-day delivery for orders before 12 PM). Each method has different pricing and delivery guarantees.'
        },
        {
          q: 'How do I track my shipments?',
          a: 'Go to the "Tracking" page from the sidebar. You can view all active shipments with real-time status updates. Click on any shipment card to see the detailed timeline with all tracking events.'
        },
      ]
    },
    {
      category: 'Billing & Pricing',
      questions: [
        {
          q: 'How does billing work?',
          a: 'ParcelWise operates on a monthly subscription model. Your plan includes unlimited shipping labels and various features based on your tier. Additional services like extra insurance or signature requirements are billed separately per shipment.'
        },
        {
          q: 'Can I change my plan?',
          a: 'Yes! You can upgrade or downgrade your plan at any time from the Billing page. Changes take effect immediately, and billing is prorated for the current month.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, Mastercard, American Express) and SEPA direct debit for European customers. You can manage your payment methods in the Billing section.'
        },
      ]
    },
    {
      category: 'Shipping & Delivery',
      questions: [
        {
          q: 'What areas do you deliver to?',
          a: 'We currently support shipping throughout the Netherlands and to most European countries via PostNL. International shipping outside Europe is available upon request. Check our coverage map for specific areas.'
        },
        {
          q: 'What should I do if a package is delayed?',
          a: 'If a package shows as delayed in the tracking system, first check the detailed timeline for any exception notes. Most delays are resolved within 24 hours. If the delay persists, contact our support team with the tracking number.'
        },
        {
          q: 'How do I handle returns?',
          a: 'Create a return label from the original order page. The process is the same as creating a new label, but select "Return" as the shipment type. You can email the return label directly to your customer or download and print it.'
        },
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          q: 'How do I integrate with my e-commerce platform?',
          a: 'ParcelWise offers plugins for Shopify, WooCommerce, and Magento. For custom integrations, use our REST API. Full documentation is available in the API Documentation section, including authentication guides and code examples.'
        },
        {
          q: 'Can I bulk import orders?',
          a: 'Yes! Use the "Import Orders" button on the dashboard to upload a CSV file with your order details. We support standard formats from major e-commerce platforms. You can also use our API for automated order synchronization.'
        },
        {
          q: 'Is there a mobile app?',
          a: 'Currently, ParcelWise is web-based and fully responsive, working great on mobile browsers. A dedicated mobile app is in development and will be available soon for iOS and Android.'
        },
      ]
    },
  ];

  const supportOptions = [
    {
      title: 'E-mail ondersteuning',
      icon: Mail,
      description: 'Stuur ons een e-mail en we reageren binnen 24 uur',
      action: 'support@parcelwise.com',
      color: 'text-secondary-blue'
    },
    {
      title: 'Live chat',
      icon: MessageCircle,
      description: 'Chat met ons ondersteuningsteam (ma-vr, 9-18 uur)',
      action: 'Chat starten',
      color: 'text-primary-blue'
    },
    {
      title: 'Telefoonondersteuning',
      icon: Phone,
      description: 'Bel ons voor urgente problemen (Professional plan)',
      action: '+31 20 123 4567',
      color: 'text-accent-blue'
    },
  ];

  const resources = [
    { title: 'Kennisbank', link: '#', description: 'Blader door onze uitgebreide handleidingen en artikelen' },
    { title: 'API documentatie', link: '#', description: 'Technische documentatie voor ontwikkelaars' },
    { title: 'Video tutorials', link: '#', description: 'Bekijk stapsgewijze video handleidingen' },
    { title: 'Community forum', link: '#', description: 'Maak contact met andere ParcelWise gebruikers' },
    { title: 'Systeem status', link: '#', description: 'Bekijk onze huidige systeemstatus en uptime' },
    { title: 'Release notes', link: '#', description: 'Blijf op de hoogte van nieuwe functies en verbeteringen' },
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-3">Hoe kunnen we je helpen?</h1>
          <p className="text-lg text-neutral-600">Vind antwoorden, handleidingen en ondersteuningsbronnen</p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={24} />
            <input
              type="text"
              placeholder="Zoeken naar helpartikelen, handleidingen of veelgestelde vragen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-neutral-200 rounded-xl text-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none shadow-sm"
            />
          </div>
        </motion.div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.button
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-all text-left"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{link.title}</h3>
                <p className="text-sm text-neutral-600">{link.description}</p>
              </motion.button>
            );
          })}
        </div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="text-secondary-blue" size={28} />
            <h2 className="text-2xl font-bold text-neutral-900">Veelgestelde vragen</h2>
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <Search className="mx-auto text-neutral-300 mb-3" size={48} />
              <p className="text-neutral-500">Geen veelgestelde vragen gevonden voor je zoekopdracht</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFaqs.map((category, categoryIndex) => (
                <div key={category.category}>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-secondary-blue rounded-full"></span>
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isOpen = openFaq === globalIndex;

                      return (
                        <motion.div
                          key={faqIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="border border-neutral-200 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : globalIndex)}
                            className="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                          >
                            <span className="font-medium text-neutral-900 text-left">{faq.q}</span>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="text-neutral-400 flex-shrink-0" size={20} />
                            </motion.div>
                          </button>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-4 text-neutral-600 leading-relaxed border-t border-neutral-100"
                            >
                              <p className="pt-4">{faq.a}</p>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-secondary-blue to-primary-blue rounded-xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-2">Nog steeds hulp nodig?</h2>
          <p className="text-white/90 mb-8">Ons ondersteuningsteam staat klaar om je te helpen</p>

          <div className="grid md:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
                >
                  <Icon className="mb-3" size={28} />
                  <h3 className="font-semibold mb-2">{option.title}</h3>
                  <p className="text-sm text-white/80 mb-4">{option.description}</p>
                  <button className="text-sm font-medium hover:underline">
                    {option.action} →
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100"
        >
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Aanvullende bronnen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.link}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 p-4 rounded-lg border border-neutral-200 hover:border-secondary-blue hover:bg-secondary-blue/5 transition-all group"
              >
                <ExternalLink className="text-neutral-400 group-hover:text-secondary-blue transition-colors flex-shrink-0 mt-1" size={18} />
                <div className="flex-1">
                  <h3 className="font-medium text-neutral-900 mb-1">{resource.title}</h3>
                  <p className="text-sm text-neutral-600">{resource.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Feedback */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-neutral-50 rounded-xl p-8 text-center border border-neutral-200"
        >
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">Was dit nuttig?</h3>
          <p className="text-neutral-600 mb-6">Help ons onze documentatie te verbeteren</p>
          <div className="flex items-center justify-center gap-3">
            <button className="px-6 py-3 bg-white border-2 border-neutral-200 rounded-lg font-medium text-neutral-700 hover:border-success hover:text-success transition-all">
              👍 Ja, nuttig
            </button>
            <button className="px-6 py-3 bg-white border-2 border-neutral-200 rounded-lg font-medium text-neutral-700 hover:border-error hover:text-error transition-all">
              👎 Kan beter
            </button>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
