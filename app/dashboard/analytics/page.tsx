'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Package, DollarSign, Truck, MapPin, Calendar, Download } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('30days');

  const kpiCards = [
    {
      label: 'Total Revenue',
      value: '€24,567',
      change: '+18.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-secondary-blue to-primary-blue'
    },
    {
      label: 'Total Shipments',
      value: '1,247',
      change: '+12.5%',
      trend: 'up',
      icon: Package,
      color: 'from-primary-blue to-accent-blue'
    },
    {
      label: 'Average Delivery Time',
      value: '2.3 days',
      change: '-8.4%',
      trend: 'down',
      icon: Truck,
      color: 'from-accent-blue to-secondary-blue'
    },
    {
      label: 'Success Rate',
      value: '98.2%',
      change: '+2.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-secondary-blue to-blue-600'
    },
  ];

  const monthlyData = [
    { month: 'Jan', shipments: 850, revenue: 18500 },
    { month: 'Feb', shipments: 920, revenue: 19800 },
    { month: 'Mar', shipments: 1050, revenue: 22100 },
    { month: 'Apr', shipments: 980, revenue: 21200 },
    { month: 'May', shipments: 1150, revenue: 24300 },
    { month: 'Jun', shipments: 1100, revenue: 23400 },
    { month: 'Jul', shipments: 1280, revenue: 26800 },
    { month: 'Aug', shipments: 1200, revenue: 25600 },
    { month: 'Sep', shipments: 1320, revenue: 27900 },
    { month: 'Oct', shipments: 1247, revenue: 24567 },
  ];

  const topDestinations = [
    { city: 'Amsterdam', count: 342, percentage: 27.4, revenue: '€7,248' },
    { city: 'Rotterdam', count: 289, percentage: 23.2, revenue: '€6,134' },
    { city: 'Utrecht', count: 198, percentage: 15.9, revenue: '€4,201' },
    { city: 'Den Haag', count: 156, percentage: 12.5, revenue: '€3,312' },
    { city: 'Eindhoven', count: 124, percentage: 9.9, revenue: '€2,631' },
    { city: 'Other', count: 138, percentage: 11.1, revenue: '€2,041' },
  ];

  const shippingMethods = [
    { method: 'PostNL Standard', count: 687, percentage: 55.1, avgCost: '€6.95' },
    { method: 'PostNL Next Day', count: 423, percentage: 33.9, avgCost: '€8.95' },
    { method: 'PostNL Same Day', count: 137, percentage: 11.0, avgCost: '€12.95' },
  ];

  const performanceMetrics = [
    { metric: 'On-time Delivery', value: '98.2%', target: '95%', status: 'excellent' },
    { metric: 'Customer Satisfaction', value: '4.8/5', target: '4.5/5', status: 'excellent' },
    { metric: 'Return Rate', value: '2.1%', target: '<5%', status: 'good' },
    { metric: 'Average Cost per Shipment', value: '€8.24', target: '€9.00', status: 'excellent' },
    { metric: 'Damaged Packages', value: '0.3%', target: '<1%', status: 'excellent' },
    { metric: 'Failed Deliveries', value: '1.8%', target: '<3%', status: 'good' },
  ];

  const maxShipments = Math.max(...monthlyData.map(d => d.shipments));
  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue));

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Analytics & Insights</h1>
            <p className="text-neutral-600">Track your shipping performance and business metrics</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
              <option value="year">This Year</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              <Download size={18} />
              Export Report
            </motion.button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiCards.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${kpi.color} flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-1">{kpi.value}</div>
                <div className="text-sm text-neutral-500 mb-2">{kpi.label}</div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  kpi.trend === 'up' ? 'text-success' : 'text-error'
                }`}>
                  {kpi.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span>{kpi.change} from last month</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Shipments Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">Shipments Overview</h2>
                <p className="text-sm text-neutral-500 mt-1">Monthly shipment volume</p>
              </div>
              <Package className="text-secondary-blue" size={24} />
            </div>
            <div className="h-64 flex items-end justify-between gap-2">
              {monthlyData.map((data, index) => (
                <div key={data.month} className="flex-1 flex flex-col items-center group">
                  <div className="relative w-full">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.shipments / maxShipments) * 100}%` }}
                      transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                      className="w-full bg-gradient-to-t from-secondary-blue to-primary-blue rounded-t group-hover:from-primary-blue group-hover:to-secondary-blue transition-all cursor-pointer"
                      style={{ minHeight: '8px' }}
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-12 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap transition-opacity">
                        {data.shipments} shipments
                      </div>
                    </motion.div>
                  </div>
                  <span className="text-xs text-neutral-500 mt-2">{data.month}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">Revenue Trends</h2>
                <p className="text-sm text-neutral-500 mt-1">Monthly revenue in EUR</p>
              </div>
              <DollarSign className="text-secondary-blue" size={24} />
            </div>
            <div className="h-64 flex items-end justify-between gap-2">
              {monthlyData.map((data, index) => (
                <div key={data.month} className="flex-1 flex flex-col items-center group">
                  <div className="relative w-full">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                      transition={{ delay: 0.6 + index * 0.05, duration: 0.5 }}
                      className="w-full bg-gradient-to-t from-accent-blue to-secondary-blue rounded-t group-hover:from-secondary-blue group-hover:to-accent-blue transition-all cursor-pointer"
                      style={{ minHeight: '8px' }}
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-12 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap transition-opacity">
                        €{(data.revenue / 1000).toFixed(1)}k
                      </div>
                    </motion.div>
                  </div>
                  <span className="text-xs text-neutral-500 mt-2">{data.month}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Destinations and Methods */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Top Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">Top Destinations</h2>
                <p className="text-sm text-neutral-500 mt-1">Most popular delivery locations</p>
              </div>
              <MapPin className="text-secondary-blue" size={24} />
            </div>
            <div className="space-y-4">
              {topDestinations.map((dest, index) => (
                <motion.div
                  key={dest.city}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-neutral-900">{dest.city}</span>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-neutral-900">{dest.count} orders</div>
                        <div className="text-xs text-neutral-500">{dest.revenue}</div>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${dest.percentage}%` }}
                        transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-secondary-blue to-primary-blue"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Shipping Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">Shipping Methods</h2>
                <p className="text-sm text-neutral-500 mt-1">Distribution by delivery speed</p>
              </div>
              <Truck className="text-secondary-blue" size={24} />
            </div>

            {/* Donut Chart Visualization */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  {shippingMethods.map((method, index) => {
                    const prevPercentage = shippingMethods
                      .slice(0, index)
                      .reduce((sum, m) => sum + m.percentage, 0);
                    const circumference = 2 * Math.PI * 40;
                    const offset = circumference - (method.percentage / 100) * circumference;
                    const rotation = (prevPercentage / 100) * 360;

                    return (
                      <motion.circle
                        key={method.method}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={index === 0 ? '#4A8FDB' : index === 1 ? '#2B5A87' : '#3D5E7C'}
                        strokeWidth="20"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                        style={{ transformOrigin: '50% 50%', transform: `rotate(${rotation}deg)` }}
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neutral-900">1,247</div>
                    <div className="text-xs text-neutral-500">Total</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {shippingMethods.map((method, index) => (
                <motion.div
                  key={method.method}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: index === 0 ? '#4A8FDB' : index === 1 ? '#2B5A87' : '#3D5E7C'
                      }}
                    />
                    <span className="text-sm text-neutral-700">{method.method}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-neutral-900">{method.count}</div>
                    <div className="text-xs text-neutral-500">{method.percentage}% • {method.avgCost}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">Performance Metrics</h2>
              <p className="text-sm text-neutral-500 mt-1">Key performance indicators vs targets</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                className="p-4 bg-neutral-50 rounded-lg"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-medium text-neutral-600">{metric.metric}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    metric.status === 'excellent'
                      ? 'bg-success/10 text-success'
                      : 'bg-primary-blue/10 text-primary-blue'
                  }`}>
                    {metric.status}
                  </span>
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">{metric.value}</div>
                <div className="text-xs text-neutral-500">Target: {metric.target}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
