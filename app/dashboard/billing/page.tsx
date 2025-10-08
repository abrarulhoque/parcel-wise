'use client';

import { motion } from 'framer-motion';
import { CreditCard, Download, Calendar, TrendingUp, FileText, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';

export default function BillingPage() {
  const [activeTab, setActiveTab] = useState('invoices');

  const currentPlan = {
    name: 'Professional Plan',
    price: '€49',
    billingCycle: 'month',
    features: [
      'Unlimited shipping labels',
      'Advanced analytics',
      'Priority support',
      'Bulk operations',
      'API access',
      'Custom branding',
    ],
    nextBilling: '2025-11-08',
  };

  const usageStats = [
    { label: 'Labels Created', value: '1,247', limit: 'Unlimited', usage: 100 },
    { label: 'API Calls', value: '24,567', limit: '50,000', usage: 49 },
    { label: 'Storage Used', value: '2.4 GB', limit: '10 GB', usage: 24 },
    { label: 'Team Members', value: '3', limit: '10', usage: 30 },
  ];

  const invoices = [
    { id: 'INV-2025-010', date: '2025-10-08', amount: '€49.00', status: 'paid', period: 'Oct 2025', items: 'Professional Plan', pdfUrl: '#' },
    { id: 'INV-2025-009', date: '2025-09-08', amount: '€49.00', status: 'paid', period: 'Sep 2025', items: 'Professional Plan', pdfUrl: '#' },
    { id: 'INV-2025-008', date: '2025-08-08', amount: '€49.00', status: 'paid', period: 'Aug 2025', items: 'Professional Plan', pdfUrl: '#' },
    { id: 'INV-2025-007', date: '2025-07-08', amount: '€49.00', status: 'paid', period: 'Jul 2025', items: 'Professional Plan', pdfUrl: '#' },
    { id: 'INV-2025-006', date: '2025-06-08', amount: '€49.00', status: 'paid', period: 'Jun 2025', items: 'Professional Plan', pdfUrl: '#' },
    { id: 'INV-2025-005', date: '2025-05-08', amount: '€49.00', status: 'paid', period: 'May 2025', items: 'Professional Plan', pdfUrl: '#' },
  ];

  const transactions = [
    { id: 'TXN-45678', date: '2025-10-08', description: 'Monthly subscription - Professional Plan', amount: '€49.00', status: 'completed', method: 'Visa •••• 4242' },
    { id: 'TXN-45677', date: '2025-10-05', description: 'Additional storage (5GB)', amount: '€12.00', status: 'completed', method: 'Visa •••• 4242' },
    { id: 'TXN-45676', date: '2025-09-08', description: 'Monthly subscription - Professional Plan', amount: '€49.00', status: 'completed', method: 'Visa •••• 4242' },
    { id: 'TXN-45675', date: '2025-08-08', description: 'Monthly subscription - Professional Plan', amount: '€49.00', status: 'completed', method: 'Visa •••• 4242' },
    { id: 'TXN-45674', date: '2025-07-15', description: 'Extra API quota (10,000 calls)', amount: '€8.00', status: 'completed', method: 'Visa •••• 4242' },
    { id: 'TXN-45673', date: '2025-07-08', description: 'Monthly subscription - Professional Plan', amount: '€49.00', status: 'completed', method: 'Visa •••• 4242' },
  ];

  const paymentMethods = [
    { id: '1', type: 'Visa', last4: '4242', expiry: '12/2026', isDefault: true },
    { id: '2', type: 'Mastercard', last4: '5555', expiry: '08/2025', isDefault: false },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
      case 'completed':
        return { bg: 'bg-success/10', text: 'text-success', icon: CheckCircle, label: status === 'paid' ? 'Paid' : 'Completed' };
      case 'pending':
        return { bg: 'bg-warning/10', text: 'text-warning', icon: Clock, label: 'Pending' };
      case 'failed':
        return { bg: 'bg-error/10', text: 'text-error', icon: AlertCircle, label: 'Failed' };
      default:
        return { bg: 'bg-neutral-100', text: 'text-neutral-600', icon: Clock, label: status };
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Billing & Payments</h1>
          <p className="text-neutral-600">Manage your subscription, invoices, and payment methods</p>
        </div>

        {/* Current Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-secondary-blue to-primary-blue rounded-xl p-8 text-white shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-3">
                Current Plan
              </div>
              <h2 className="text-3xl font-bold mb-2">{currentPlan.name}</h2>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{currentPlan.price}</span>
                <span className="text-white/80">/{currentPlan.billingCycle}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Calendar size={16} />
                <span>Next billing date: {currentPlan.nextBilling}</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-secondary-blue rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Upgrade Plan
              </motion.button>
              <button className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                Cancel Subscription
              </button>
            </div>
          </div>
        </motion.div>

        {/* Usage Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
        >
          <h2 className="text-lg font-semibold text-neutral-900 mb-6">Current Usage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usageStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-neutral-600">{stat.label}</span>
                  <span className="text-xs text-neutral-500">{stat.limit}</span>
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-3">{stat.value}</div>
                <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.usage}%` }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                    className={`h-full ${
                      stat.usage > 80
                        ? 'bg-error'
                        : stat.usage > 60
                        ? 'bg-warning'
                        : 'bg-gradient-to-r from-secondary-blue to-primary-blue'
                    }`}
                  />
                </div>
                <div className="text-xs text-neutral-500 mt-1">{stat.usage}% used</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-neutral-200">
          <button
            onClick={() => setActiveTab('invoices')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'invoices'
                ? 'text-secondary-blue border-b-2 border-secondary-blue'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Invoices
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'transactions'
                ? 'text-secondary-blue border-b-2 border-secondary-blue'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Transaction History
          </button>
          <button
            onClick={() => setActiveTab('payment-methods')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'payment-methods'
                ? 'text-secondary-blue border-b-2 border-secondary-blue'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Payment Methods
          </button>
        </div>

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
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Invoice ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Period</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Items</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Actions</th>
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
                            Download
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

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50 border-b border-neutral-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Transaction ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Description</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Payment Method</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {transactions.map((transaction, index) => {
                    const badge = getStatusBadge(transaction.status);
                    const StatusIcon = badge.icon;
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
                        <td className="px-6 py-4 text-sm font-semibold text-neutral-900">{transaction.amount}</td>
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

        {/* Payment Methods Tab */}
        {activeTab === 'payment-methods' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
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
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-blue to-primary-blue rounded-lg flex items-center justify-center">
                      <CreditCard className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-neutral-900">{method.type} •••• {method.last4}</h3>
                        {method.isDefault && (
                          <span className="px-2 py-0.5 bg-secondary-blue/10 text-secondary-blue text-xs font-medium rounded-full">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-neutral-500">Expires {method.expiry}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!method.isDefault && (
                      <button className="px-4 py-2 border-2 border-neutral-200 text-neutral-700 rounded-lg font-medium hover:border-secondary-blue hover:text-secondary-blue transition-all">
                        Set as Default
                      </button>
                    )}
                    <button className="px-4 py-2 border-2 border-error/20 text-error rounded-lg font-medium hover:bg-error/10 transition-all">
                      Remove
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
              Add New Payment Method
            </motion.button>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}
