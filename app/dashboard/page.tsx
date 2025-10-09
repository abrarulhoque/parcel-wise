'use client';

import { motion } from 'framer-motion';
import { Package, TrendingUp, Truck, DollarSign, Plus, Upload, Printer, FileText, Clock, CheckCircle, XCircle } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';

export default function DashboardPage() {
  const stats = [
    {
      icon: Package,
      label: 'Totaal verzendingen',
      value: '1,247',
      change: '+12.5% ten opzichte van vorige maand',
      color: 'from-primary-blue to-accent-blue'
    },
    {
      icon: Clock,
      label: 'Actieve bestellingen',
      value: '89',
      change: 'In afwachting van label aanmaak',
      color: 'from-primary-blue to-accent-blue'
    },
    {
      icon: Truck,
      label: 'Onderweg',
      value: '342',
      change: '98% op tijd bezorgd',
      color: 'from-primary-blue to-accent-blue'
    },
    {
      icon: DollarSign,
      label: 'Kostenbesparingen',
      value: '€3,459',
      change: '38% besparing deze maand',
      color: 'from-primary-blue to-accent-blue'
    },
  ];

  const recentOrders = [
    { id: '#12345', customer: 'Emma de Vries', destination: 'Amsterdam', status: 'pending', method: 'PostNL Standard', date: '2025-10-08' },
    { id: '#12344', customer: 'Lucas Bakker', destination: 'Rotterdam', status: 'in-transit', method: 'PostNL Next Day', date: '2025-10-07' },
    { id: '#12343', customer: 'Sophie Jansen', destination: 'Utrecht', status: 'delivered', method: 'PostNL Standard', date: '2025-10-07' },
    { id: '#12342', customer: 'Noah Visser', destination: 'Den Haag', status: 'label-created', method: 'PostNL Same Day', date: '2025-10-06' },
    { id: '#12341', customer: 'Mila de Jong', destination: 'Eindhoven', status: 'in-transit', method: 'PostNL Standard', date: '2025-10-06' },
    { id: '#12340', customer: 'Daan Peters', destination: 'Groningen', status: 'delivered', method: 'PostNL Next Day', date: '2025-10-05' },
    { id: '#12339', customer: 'Fleur van Dijk', destination: 'Tilburg', status: 'exception', method: 'PostNL Standard', date: '2025-10-05' },
    { id: '#12338', customer: 'Sem Mulder', destination: 'Almere', status: 'delivered', method: 'PostNL Standard', date: '2025-10-04' },
  ];

  const activityData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    shipments: Math.floor(Math.random() * 40) + 20
  }));

  const recentActivity = [
    { text: 'Bestelling #12457 succesvol afgeleverd', time: '5 min geleden', type: 'success' },
    { text: '5 nieuwe bestellingen geïmporteerd', time: '15 min geleden', type: 'info' },
    { text: 'Label aangemaakt voor bestelling #12458', time: '1 uur geleden', type: 'info' },
    { text: 'Factuur #INV-2025-045 beschikbaar', time: '2 uur geleden', type: 'info' },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      'pending': { bg: 'bg-warning/10', text: 'text-warning', label: 'In behandeling' },
      'label-created': { bg: 'bg-secondary-blue/10', text: 'text-secondary-blue', label: 'Label aangemaakt' },
      'in-transit': { bg: 'bg-primary-blue/10', text: 'text-primary-blue', label: 'Onderweg' },
      'delivered': { bg: 'bg-success/10', text: 'text-success', label: 'Afgeleverd' },
      'exception': { bg: 'bg-error/10', text: 'text-error', label: 'Uitzondering' },
    };
    return badges[status as keyof typeof badges] || badges.pending;
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Overzicht</h1>
          <p className="text-neutral-600">Welkom terug! Dit is wat er gebeurt met je verzendingen.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100"
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

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
        >
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Snelle acties</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/dashboard/create-label">
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                <Plus size={20} />
                Label aanmaken
              </button>
            </Link>
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-neutral-200 text-neutral-700 rounded-lg font-semibold hover:border-secondary-blue hover:text-secondary-blue transition-all">
              <Upload size={20} />
              Bestellingen importeren
            </button>
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-neutral-200 text-neutral-700 rounded-lg font-semibold hover:border-secondary-blue hover:text-secondary-blue transition-all">
              <Printer size={20} />
              Bulk printen
            </button>
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-neutral-200 text-neutral-700 rounded-lg font-semibold hover:border-secondary-blue hover:text-secondary-blue transition-all">
              <FileText size={20} />
              Rapporten
            </button>
          </div>
        </motion.div>

        {/* Recent Orders & Activity */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Orders Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden"
          >
            <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">Recente bestellingen</h2>
                <p className="text-sm text-neutral-500 mt-1">8 van 89 bestellingen weergegeven</p>
              </div>
              <Link href="/dashboard/orders">
                <button className="text-secondary-blue hover:text-primary-blue font-medium text-sm">
                  Bekijk alles →
                </button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase">Bestelling ID</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase">Klant</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase">Bestemming</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase">Methode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {recentOrders.map((order) => {
                    const badge = getStatusBadge(order.status);
                    return (
                      <tr key={order.id} className="hover:bg-neutral-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-neutral-900">{order.id}</td>
                        <td className="px-6 py-4 text-sm text-neutral-600">{order.customer}</td>
                        <td className="px-6 py-4 text-sm text-neutral-600">{order.destination}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
                            {badge.label}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-neutral-600">{order.method}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Recent Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
          >
            <h2 className="text-lg font-semibold text-neutral-900 mb-6">Recente activiteit</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activity.type === 'success' ? 'bg-success/10' : 'bg-secondary-blue/10'
                  }`}>
                    {activity.type === 'success' ? (
                      <CheckCircle className="text-success" size={16} />
                    ) : (
                      <Package className="text-secondary-blue" size={16} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-neutral-900">{activity.text}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Shipping Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">Verzendactiviteit</h2>
              <p className="text-sm text-neutral-500 mt-1">Laatste 30 dagen</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-secondary-blue text-white rounded-lg text-sm font-medium">Dag</button>
              <button className="px-3 py-1.5 bg-neutral-100 text-neutral-600 rounded-lg text-sm font-medium hover:bg-neutral-200">Week</button>
              <button className="px-3 py-1.5 bg-neutral-100 text-neutral-600 rounded-lg text-sm font-medium hover:bg-neutral-200">Maand</button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-1">
            {activityData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center group">
                <div className="relative w-full">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.shipments / 60) * 100}%` }}
                    transition={{ delay: 0.7 + index * 0.02, duration: 0.5 }}
                    className="w-full bg-gradient-to-t from-secondary-blue to-primary-blue rounded-t group-hover:from-primary-blue group-hover:to-secondary-blue transition-all cursor-pointer"
                    style={{ minHeight: '4px' }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap transition-opacity">
                      {data.shipments} verzendingen
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
