'use client';

import { motion } from 'framer-motion';
import { Package, TrendingUp, Truck, DollarSign } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      icon: Package,
      label: 'Total Shipments',
      value: '1,247',
      change: '+12.5%',
      color: 'from-secondary-blue to-primary-blue'
    },
    {
      icon: TrendingUp,
      label: 'Active Orders',
      value: '89',
      change: 'Awaiting labels',
      color: 'from-primary-blue to-accent-blue'
    },
    {
      icon: Truck,
      label: 'In Transit',
      value: '342',
      change: '98% on time',
      color: 'from-accent-blue to-secondary-blue'
    },
    {
      icon: DollarSign,
      label: 'Cost Savings',
      value: '€3,459',
      change: '38% savings',
      color: 'from-secondary-blue to-blue-600'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100 to-primary-blue/5">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-blue to-secondary-blue text-white py-8 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-white/90">Welcome back! Here's your shipping overview.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-500 mb-1">{stat.label}</div>
                <div className="text-sm text-secondary-blue font-medium">{stat.change}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-12 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary-blue to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="text-white" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Dashboard Coming Soon!
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              We're building an amazing dashboard experience for you. This is a concept demo showing the login and registration flow.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">📦 Create Labels</h3>
                <p className="text-sm text-neutral-600">Generate shipping labels instantly</p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">📍 Track Shipments</h3>
                <p className="text-sm text-neutral-600">Monitor all your packages in real-time</p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">📊 Analytics</h3>
                <p className="text-sm text-neutral-600">View detailed shipping insights</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
