'use client';

import { motion } from 'framer-motion';
import { Package, Search, Filter, Download, Printer, Trash2, Plus, ChevronDown } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';
import { useState } from 'react';

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

  const allOrders = [
    { id: '#12345', customer: 'Emma de Vries', email: 'emma@directsales.nl', destination: 'Amsterdam', address: 'Damstraat 123, 1012 JK', status: 'pending', method: 'PostNL Standard', date: '2025-10-08', time: '14:32', price: '€6.95', weight: '2.5 kg' },
    { id: '#12344', customer: 'Lucas Bakker', email: 'lucas@techstore.nl', destination: 'Rotterdam', address: 'Coolsingel 45, 3011 AD', status: 'in-transit', method: 'PostNL Next Day', date: '2025-10-07', time: '09:15', price: '€8.95', weight: '1.2 kg' },
    { id: '#12343', customer: 'Sophie Jansen', email: 'sophie@fashion.nl', destination: 'Utrecht', address: 'Oudegracht 234, 3511 NP', status: 'delivered', method: 'PostNL Standard', date: '2025-10-07', time: '11:20', price: '€6.95', weight: '0.8 kg' },
    { id: '#12342', customer: 'Noah Visser', email: 'noah@electroshop.nl', destination: 'Den Haag', address: 'Lange Voorhout 12, 2514 ED', status: 'label-created', method: 'PostNL Same Day', date: '2025-10-06', time: '16:45', price: '€12.95', weight: '3.1 kg' },
    { id: '#12341', customer: 'Mila de Jong', email: 'mila@homegoods.nl', destination: 'Eindhoven', address: 'Stratumseind 89, 5611 ET', status: 'in-transit', method: 'PostNL Standard', date: '2025-10-06', time: '10:30', price: '€6.95', weight: '1.5 kg' },
    { id: '#12340', customer: 'Daan Peters', email: 'daan@bookstore.nl', destination: 'Groningen', address: 'Grote Markt 56, 9711 LV', status: 'delivered', method: 'PostNL Next Day', date: '2025-10-05', time: '13:22', price: '€8.95', weight: '2.0 kg' },
    { id: '#12339', customer: 'Fleur van Dijk', email: 'fleur@beauty.nl', destination: 'Tilburg', address: 'Heuvelstraat 23, 5038 AA', status: 'exception', method: 'PostNL Standard', date: '2025-10-05', time: '08:10', price: '€6.95', weight: '0.5 kg' },
    { id: '#12338', customer: 'Sem Mulder', email: 'sem@sports.nl', destination: 'Almere', address: 'Belgiëplein 101, 1334 BA', status: 'delivered', method: 'PostNL Standard', date: '2025-10-04', time: '15:55', price: '€6.95', weight: '4.2 kg' },
    { id: '#12337', customer: 'Eva Hendriks', email: 'eva@crafts.nl', destination: 'Breda', address: 'Ginnekenstraat 67, 4811 JC', status: 'in-transit', method: 'PostNL Next Day', date: '2025-10-04', time: '12:40', price: '€8.95', weight: '1.8 kg' },
    { id: '#12336', customer: 'Luuk Smit', email: 'luuk@gadgets.nl', destination: 'Nijmegen', address: 'Mariënburg 234, 6511 PS', status: 'pending', method: 'PostNL Standard', date: '2025-10-04', time: '09:05', price: '€6.95', weight: '2.3 kg' },
    { id: '#12335', customer: 'Anna Vermeer', email: 'anna@jewelry.nl', destination: 'Apeldoorn', address: 'Hoofdstraat 145, 7311 BD', status: 'label-created', method: 'PostNL Same Day', date: '2025-10-03', time: '17:20', price: '€12.95', weight: '0.3 kg' },
    { id: '#12334', customer: 'Thomas Bosch', email: 'thomas@furniture.nl', destination: 'Haarlem', address: 'Grote Houtstraat 78, 2011 SR', status: 'delivered', method: 'PostNL Standard', date: '2025-10-03', time: '14:15', price: '€6.95', weight: '5.1 kg' },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      'pending': { bg: 'bg-warning/10', text: 'text-warning', label: 'Pending' },
      'label-created': { bg: 'bg-secondary-blue/10', text: 'text-secondary-blue', label: 'Label Created' },
      'in-transit': { bg: 'bg-primary-blue/10', text: 'text-primary-blue', label: 'In Transit' },
      'delivered': { bg: 'bg-success/10', text: 'text-success', label: 'Delivered' },
      'exception': { bg: 'bg-error/10', text: 'text-error', label: 'Exception' },
    };
    return badges[status as keyof typeof badges] || badges.pending;
  };

  const filteredOrders = allOrders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleOrderSelection = (orderId: string) => {
    setSelectedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const toggleSelectAll = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map(order => order.id));
    }
  };

  const statusCounts = {
    all: allOrders.length,
    pending: allOrders.filter(o => o.status === 'pending').length,
    'label-created': allOrders.filter(o => o.status === 'label-created').length,
    'in-transit': allOrders.filter(o => o.status === 'in-transit').length,
    delivered: allOrders.filter(o => o.status === 'delivered').length,
    exception: allOrders.filter(o => o.status === 'exception').length,
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Orders</h1>
            <p className="text-neutral-600">Manage all your shipping orders</p>
          </div>
          <Link href="/dashboard/create-label">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <Plus size={20} />
              Create New Order
            </motion.button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: 'All Orders', count: statusCounts.all, status: 'all' },
            { label: 'Pending', count: statusCounts.pending, status: 'pending' },
            { label: 'Label Created', count: statusCounts['label-created'], status: 'label-created' },
            { label: 'In Transit', count: statusCounts['in-transit'], status: 'in-transit' },
            { label: 'Delivered', count: statusCounts.delivered, status: 'delivered' },
            { label: 'Exceptions', count: statusCounts.exception, status: 'exception' },
          ].map((stat) => (
            <motion.button
              key={stat.status}
              onClick={() => setStatusFilter(stat.status)}
              whileHover={{ y: -2 }}
              className={`p-4 rounded-lg border-2 transition-all ${
                statusFilter === stat.status
                  ? 'border-secondary-blue bg-secondary-blue/5'
                  : 'border-neutral-100 bg-white hover:border-neutral-200'
              }`}
            >
              <div className="text-2xl font-bold text-neutral-900">{stat.count}</div>
              <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
            </motion.button>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
              <input
                type="text"
                placeholder="Search by order ID, customer, or destination..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
              />
            </div>

            {/* Bulk Actions */}
            {selectedOrders.length > 0 && (
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2.5 border-2 border-neutral-200 text-neutral-700 rounded-lg font-medium hover:border-secondary-blue hover:text-secondary-blue transition-all">
                  <Printer size={18} />
                  Print ({selectedOrders.length})
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 border-2 border-neutral-200 text-neutral-700 rounded-lg font-medium hover:border-secondary-blue hover:text-secondary-blue transition-all">
                  <Download size={18} />
                  Export
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 border-2 border-error/20 text-error rounded-lg font-medium hover:bg-error/10 transition-all">
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Orders Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b border-neutral-100">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 text-secondary-blue rounded border-neutral-300 focus:ring-secondary-blue"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Order ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Customer</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Destination</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Date & Time</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Method</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Price</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-6 py-12 text-center">
                      <Package className="mx-auto text-neutral-300 mb-3" size={48} />
                      <p className="text-neutral-500">No orders found</p>
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order) => {
                    const badge = getStatusBadge(order.status);
                    return (
                      <motion.tr
                        key={order.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="hover:bg-neutral-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            checked={selectedOrders.includes(order.id)}
                            onChange={() => toggleOrderSelection(order.id)}
                            className="w-4 h-4 text-secondary-blue rounded border-neutral-300 focus:ring-secondary-blue"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-neutral-900">{order.id}</div>
                          <div className="text-xs text-neutral-500">{order.weight}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-neutral-900">{order.customer}</div>
                          <div className="text-xs text-neutral-500">{order.email}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-neutral-900">{order.destination}</div>
                          <div className="text-xs text-neutral-500">{order.address}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-neutral-900">{order.date}</div>
                          <div className="text-xs text-neutral-500">{order.time}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-neutral-600">{order.method}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
                            {badge.label}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-neutral-900">{order.price}</td>
                        <td className="px-6 py-4">
                          <button className="text-secondary-blue hover:text-primary-blue font-medium text-sm">
                            View Details
                          </button>
                        </td>
                      </motion.tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {filteredOrders.length > 0 && (
            <div className="px-6 py-4 border-t border-neutral-100 flex items-center justify-between">
              <div className="text-sm text-neutral-500">
                Showing {filteredOrders.length} of {allOrders.length} orders
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  Previous
                </button>
                <button className="px-4 py-2 bg-secondary-blue text-white rounded-lg text-sm font-medium">
                  1
                </button>
                <button className="px-4 py-2 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
