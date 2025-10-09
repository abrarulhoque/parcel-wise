'use client';

import { motion } from 'framer-motion';
import { CreditCard, Download, Package, TrendingUp, CheckCircle, Clock, AlertCircle, Wallet, DollarSign } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';

export default function BillingPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const accountBalance = {
    current: 245.80,
    lastTopUp: '2025-10-01',
    autoRecharge: true,
    rechargeThreshold: 50,
    rechargeAmount: 200,
  };

  const currentMonthStats = {
    labelsCreated: 342,
    totalSpent: 2854.30,
    averageCost: 8.35,
    lastMonth: 2654.20,
  };

  const labelPricing = [
    { method: 'PostNL Standard', price: '€6.95', description: '2-3 werkdagen bezorging' },
    { method: 'PostNL Next Day', price: '€8.95', description: 'Volgende werkdag bezorging' },
    { method: 'PostNL Same Day', price: '€12.95', description: 'Zelfde dag bezorging (bestellen voor 12:00)' },
  ];

  const additionalServices = [
    { service: 'Extra verzekering', price: '€2.50', description: 'Dekking tot €500' },
    { service: 'Handtekening vereist', price: '€0.50', description: 'Bewijs van aflevering handtekening' },
    { service: 'Leeftijdsverificatie (18+)', price: '€1.00', description: 'Leeftijdsverificatie bij bezorging' },
  ];

  const invoices = [
    { id: 'INV-2025-010', date: '2025-10-08', amount: '€287.45', status: 'paid', period: 'Oct 2025', items: '41 shipping labels', pdfUrl: '#' },
    { id: 'INV-2025-009', date: '2025-09-30', amount: '€2,654.20', status: 'paid', period: 'Sep 2025', items: '312 shipping labels', pdfUrl: '#' },
    { id: 'INV-2025-008', date: '2025-08-31', amount: '€2,198.50', status: 'paid', period: 'Aug 2025', items: '267 shipping labels', pdfUrl: '#' },
    { id: 'INV-2025-007', date: '2025-07-31', amount: '€2,845.75', status: 'paid', period: 'Jul 2025', items: '321 shipping labels', pdfUrl: '#' },
    { id: 'INV-2025-006', date: '2025-06-30', amount: '€2,467.80', status: 'paid', period: 'Jun 2025', items: '289 shipping labels', pdfUrl: '#' },
    { id: 'INV-2025-005', date: '2025-05-31', amount: '€3,124.90', status: 'paid', period: 'May 2025', items: '365 shipping labels', pdfUrl: '#' },
  ];

  const transactions = [
    { id: 'TXN-45678', date: '2025-10-08', description: 'PostNL Next Day - Order #12345', amount: '-€8.95', status: 'completed', method: 'Account Balance' },
    { id: 'TXN-45677', date: '2025-10-08', description: 'PostNL Standard - Order #12344', amount: '-€6.95', status: 'completed', method: 'Account Balance' },
    { id: 'TXN-45676', date: '2025-10-07', description: 'PostNL Same Day - Order #12342', amount: '-€12.95', status: 'completed', method: 'Account Balance' },
    { id: 'TXN-45675', date: '2025-10-06', description: 'Account Top-up', amount: '+€200.00', status: 'completed', method: 'Visa •••• 4242' },
    { id: 'TXN-45674', date: '2025-10-06', description: 'PostNL Standard - Order #12341', amount: '-€6.95', status: 'completed', method: 'Account Balance' },
    { id: 'TXN-45673', date: '2025-10-05', description: 'PostNL Next Day - Order #12340', amount: '-€8.95', status: 'completed', method: 'Account Balance' },
    { id: 'TXN-45672', date: '2025-10-05', description: 'PostNL Standard - Order #12339', amount: '-€6.95', status: 'completed', method: 'Account Balance' },
    { id: 'TXN-45671', date: '2025-10-04', description: 'PostNL Standard - Order #12338', amount: '-€6.95', status: 'completed', method: 'Account Balance' },
  ];

  const paymentMethods = [
    { id: '1', type: 'Visa', last4: '4242', expiry: '12/2026', isDefault: true },
    { id: '2', type: 'Mastercard', last4: '5555', expiry: '08/2025', isDefault: false },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
      case 'completed':
        return { bg: 'bg-success/10', text: 'text-success', icon: CheckCircle, label: status === 'paid' ? 'Betaald' : 'Voltooid' };
      case 'pending':
        return { bg: 'bg-warning/10', text: 'text-warning', icon: Clock, label: 'In behandeling' };
      case 'failed':
        return { bg: 'bg-error/10', text: 'text-error', icon: AlertCircle, label: 'Mislukt' };
      default:
        return { bg: 'bg-neutral-100', text: 'text-neutral-600', icon: Clock, label: status };
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Facturering</h1>
          <p className="text-neutral-600">Pay-as-you-go prijzen - betaal alleen voor de labels die je aanmaakt</p>
        </div>

        {/* Account Balance Card */}
        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-[#325C84] rounded-xl p-8 text-white shadow-lg"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-3">
                  Accountsaldo
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold">€{accountBalance.current.toFixed(2)}</span>
                </div>
                <p className="text-white/80 text-sm">Laatste opwaardering: {accountBalance.lastTopUp}</p>
              </div>
              <Wallet size={48} className="text-white/30" />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-white/80 text-sm mb-1">Automatisch opwaarderen</div>
                <div className="font-semibold">{accountBalance.autoRecharge ? 'Ingeschakeld' : 'Uitgeschakeld'}</div>
                <div className="text-xs text-white/70 mt-1">
                  Wanneer saldo onder €{accountBalance.rechargeThreshold} komt
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-white/80 text-sm mb-1">Opwaarderingsbedrag</div>
                <div className="font-semibold">€{accountBalance.rechargeAmount}</div>
                <div className="text-xs text-white/70 mt-1">Automatisch opwaarderingsbedrag</div>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-secondary-blue rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Saldo opwaarderen
              </motion.button>
              <button className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                Auto-opwaarderen configureren
              </button>
            </div>
          </motion.div>

          {/* Current Month Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
          >
            <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
              <Package className="text-secondary-blue" size={20} />
              Deze maand
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-neutral-600 mb-1">Labels aangemaakt</div>
                <div className="text-2xl font-bold text-neutral-900">{currentMonthStats.labelsCreated}</div>
              </div>
              <div>
                <div className="text-sm text-neutral-600 mb-1">Totaal uitgegeven</div>
                <div className="text-2xl font-bold text-neutral-900">€{currentMonthStats.totalSpent.toFixed(2)}</div>
              </div>
              <div>
                <div className="text-sm text-neutral-600 mb-1">Gemiddelde kosten per label</div>
                <div className="text-2xl font-bold text-neutral-900">€{currentMonthStats.averageCost.toFixed(2)}</div>
              </div>
              <div className="pt-3 border-t border-neutral-100">
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="text-success" size={16} />
                  <span className="text-neutral-600">
                    {((currentMonthStats.totalSpent - currentMonthStats.lastMonth) / currentMonthStats.lastMonth * 100).toFixed(1)}% vs vorige maand
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pricing Tables */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
          >
            <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
              <DollarSign className="text-secondary-blue" size={20} />
              Verzendlabel prijzen
            </h3>
            <div className="space-y-3">
              {labelPricing.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div>
                    <div className="font-medium text-neutral-900">{item.method}</div>
                    <div className="text-sm text-neutral-500">{item.description}</div>
                  </div>
                  <div className="text-xl font-bold" style={{ color: '#486D91' }}>{item.price}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
          >
            <h3 className="font-semibold text-neutral-900 mb-4">Aanvullende diensten</h3>
            <div className="space-y-3">
              {additionalServices.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div>
                    <div className="font-medium text-neutral-900">{item.service}</div>
                    <div className="text-sm text-neutral-500">{item.description}</div>
                  </div>
                  <div className="text-lg font-bold text-neutral-900">{item.price}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-neutral-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'overview'
                ? 'text-secondary-blue border-b-2 border-secondary-blue'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Transactiegeschiedenis
          </button>
          <button
            onClick={() => setActiveTab('invoices')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'invoices'
                ? 'text-secondary-blue border-b-2 border-secondary-blue'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Maandelijkse facturen
          </button>
          <button
            onClick={() => setActiveTab('payment-methods')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'payment-methods'
                ? 'text-secondary-blue border-b-2 border-secondary-blue'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Betaalmethoden
          </button>
        </div>

        {/* Transaction History Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50 border-b border-neutral-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Transactie ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Datum</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Omschrijving</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Betaalmethode</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Bedrag</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {transactions.map((transaction, index) => {
                    const badge = getStatusBadge(transaction.status);
                    const StatusIcon = badge.icon;
                    const isCredit = transaction.amount.startsWith('+');
                    return (
                      <motion.tr
                        key={transaction.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-neutral-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium text-neutral-900">{transaction.id}</td>
                        <td className="px-6 py-4 text-sm text-neutral-600">{transaction.date}</td>
                        <td className="px-6 py-4 text-sm text-neutral-600">{transaction.description}</td>
                        <td className="px-6 py-4 text-sm text-neutral-600">{transaction.method}</td>
                        <td className="px-6 py-4">
                          <span className={`text-sm font-semibold ${isCredit ? 'text-success' : 'text-neutral-900'}`}>
                            {transaction.amount}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
                            <StatusIcon size={12} />
                            {badge.label}
                          </span>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Invoices Tab */}
        {activeTab === 'invoices' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50 border-b border-neutral-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Factuur ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Datum</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Periode</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Items</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Bedrag</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Acties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {invoices.map((invoice, index) => {
                    const badge = getStatusBadge(invoice.status);
                    const StatusIcon = badge.icon;
                    return (
                      <motion.tr
                        key={invoice.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-neutral-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium text-neutral-900">{invoice.id}</td>
                        <td className="px-6 py-4 text-sm text-neutral-600">{invoice.date}</td>
                        <td className="px-6 py-4 text-sm text-neutral-600">{invoice.period}</td>
                        <td className="px-6 py-4 text-sm text-neutral-600">{invoice.items}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-neutral-900">{invoice.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
                            <StatusIcon size={12} />
                            {badge.label}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="flex items-center gap-1 text-secondary-blue hover:text-primary-blue font-medium text-sm">
                            <Download size={16} />
                            Downloaden
                          </button>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Payment Methods Tab */}
        {activeTab === 'payment-methods' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-900">
                <strong>Let op:</strong> Betaalmethoden worden gebruikt voor account opwaarderingen en automatisch opwaarderen. Je betaalt alleen voor de verzendlabels die je aanmaakt.
              </p>
            </div>

            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border-2 border-neutral-100 hover:border-neutral-200 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#325C84] rounded-lg flex items-center justify-center">
                      <CreditCard className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-neutral-900">{method.type} •••• {method.last4}</h3>
                        {method.isDefault && (
                          <span className="px-2 py-0.5 bg-secondary-blue/10 text-secondary-blue text-xs font-medium rounded-full">
                            Standaard
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-neutral-500">Verloopt {method.expiry}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!method.isDefault && (
                      <button className="px-4 py-2 border-2 border-neutral-200 text-neutral-700 rounded-lg font-medium hover:border-secondary-blue hover:text-secondary-blue transition-all">
                        Instellen als standaard
                      </button>
                    )}
                    <button className="px-4 py-2 border-2 border-error/20 text-error rounded-lg font-medium hover:bg-error/10 transition-all">
                      Verwijderen
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-6 border-2 border-dashed border-neutral-300 rounded-xl text-neutral-600 hover:border-secondary-blue hover:text-secondary-blue transition-all flex items-center justify-center gap-2 font-medium"
            >
              <CreditCard size={20} />
              Nieuwe betaalmethode toevoegen
            </motion.button>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}
