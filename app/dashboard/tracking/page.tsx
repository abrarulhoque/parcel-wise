'use client';

import { motion } from 'framer-motion';
import { MapPin, Package, Truck, CheckCircle, Clock, AlertCircle, Search, Calendar } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';

export default function TrackingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedShipment, setSelectedShipment] = useState<string | null>(null);

  const shipments = [
    {
      id: 'PN3YZ789012345',
      orderId: '#12344',
      customer: 'Lucas Bakker',
      destination: 'Rotterdam',
      address: 'Coolsingel 45, 3011 AD Rotterdam',
      status: 'in-transit',
      estimatedDelivery: '2025-10-08',
      currentLocation: 'Distribution Center Rotterdam',
      method: 'PostNL Next Day',
      progress: 60,
      timeline: [
        { status: 'Label Created', location: 'Amsterdam', time: '2025-10-07 09:15', completed: true, icon: Package },
        { status: 'Picked Up', location: 'PostNL Amsterdam', time: '2025-10-07 14:30', completed: true, icon: Truck },
        { status: 'In Transit', location: 'Distribution Center Rotterdam', time: '2025-10-08 08:45', completed: true, icon: Truck },
        { status: 'Out for Delivery', location: 'Rotterdam', time: 'Expected 2025-10-08 12:00', completed: false, icon: Truck },
        { status: 'Delivered', location: 'Rotterdam', time: 'Expected 2025-10-08 17:00', completed: false, icon: CheckCircle },
      ],
    },
    {
      id: 'PN3YZ789012341',
      orderId: '#12341',
      customer: 'Mila de Jong',
      destination: 'Eindhoven',
      address: 'Stratumseind 89, 5611 ET Eindhoven',
      status: 'in-transit',
      estimatedDelivery: '2025-10-09',
      currentLocation: 'Sorting Facility Utrecht',
      method: 'PostNL Standard',
      progress: 40,
      timeline: [
        { status: 'Label Created', location: 'Amsterdam', time: '2025-10-06 10:30', completed: true, icon: Package },
        { status: 'Picked Up', location: 'PostNL Amsterdam', time: '2025-10-06 16:20', completed: true, icon: Truck },
        { status: 'In Transit', location: 'Sorting Facility Utrecht', time: '2025-10-08 07:15', completed: true, icon: Truck },
        { status: 'Out for Delivery', location: 'Eindhoven', time: 'Expected 2025-10-09 10:00', completed: false, icon: Truck },
        { status: 'Delivered', location: 'Eindhoven', time: 'Expected 2025-10-09 18:00', completed: false, icon: CheckCircle },
      ],
    },
    {
      id: 'PN3YZ789012337',
      orderId: '#12337',
      customer: 'Eva Hendriks',
      destination: 'Breda',
      address: 'Ginnekenstraat 67, 4811 JC Breda',
      status: 'in-transit',
      estimatedDelivery: '2025-10-09',
      currentLocation: 'Distribution Center Den Bosch',
      method: 'PostNL Next Day',
      progress: 75,
      timeline: [
        { status: 'Label Created', location: 'Utrecht', time: '2025-10-04 12:40', completed: true, icon: Package },
        { status: 'Picked Up', location: 'PostNL Utrecht', time: '2025-10-04 17:00', completed: true, icon: Truck },
        { status: 'In Transit', location: 'Distribution Center Den Bosch', time: '2025-10-08 09:30', completed: true, icon: Truck },
        { status: 'Out for Delivery', location: 'Breda', time: '2025-10-09 08:00', completed: true, icon: Truck },
        { status: 'Delivered', location: 'Breda', time: 'Expected 2025-10-09 14:00', completed: false, icon: CheckCircle },
      ],
    },
    {
      id: 'PN3YZ789012339',
      orderId: '#12339',
      customer: 'Fleur van Dijk',
      destination: 'Tilburg',
      address: 'Heuvelstraat 23, 5038 AA Tilburg',
      status: 'exception',
      estimatedDelivery: '2025-10-09',
      currentLocation: 'Exception - Address Verification Needed',
      method: 'PostNL Standard',
      progress: 50,
      timeline: [
        { status: 'Label Created', location: 'Rotterdam', time: '2025-10-05 08:10', completed: true, icon: Package },
        { status: 'Picked Up', location: 'PostNL Rotterdam', time: '2025-10-05 15:45', completed: true, icon: Truck },
        { status: 'Exception', location: 'Sorting Facility Tilburg', time: '2025-10-08 11:20', completed: true, icon: AlertCircle },
        { status: 'Address Verification', location: 'Pending customer contact', time: 'In progress', completed: false, icon: Clock },
        { status: 'Delivered', location: 'Tilburg', time: 'Pending resolution', completed: false, icon: CheckCircle },
      ],
    },
  ];

  const filteredShipments = shipments.filter(shipment =>
    shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shipment.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shipment.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-transit':
        return { bg: 'bg-primary-blue/10', text: 'text-primary-blue', border: 'border-primary-blue' };
      case 'delivered':
        return { bg: 'bg-success/10', text: 'text-success', border: 'border-success' };
      case 'exception':
        return { bg: 'bg-error/10', text: 'text-error', border: 'border-error' };
      default:
        return { bg: 'bg-neutral-100', text: 'text-neutral-600', border: 'border-neutral-300' };
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Track Shipments</h1>
          <p className="text-neutral-600">Monitor real-time status of your deliveries</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input
              type="text"
              placeholder="Search by tracking number, order ID, or customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Shipments Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredShipments.map((shipment, index) => {
            const statusColor = getStatusColor(shipment.status);
            const isSelected = selectedShipment === shipment.id;

            return (
              <motion.div
                key={shipment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedShipment(isSelected ? null : shipment.id)}
                className={`bg-white rounded-xl shadow-sm border-2 transition-all cursor-pointer ${
                  isSelected ? 'border-secondary-blue shadow-lg' : 'border-neutral-100 hover:border-neutral-200'
                }`}
              >
                {/* Card Header */}
                <div className="p-6 border-b border-neutral-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-neutral-900">{shipment.id}</h3>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColor.bg} ${statusColor.text}`}>
                          {shipment.status === 'in-transit' ? 'In Transit' : shipment.status === 'exception' ? 'Exception' : 'Delivered'}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-500">Order {shipment.orderId}</p>
                    </div>
                    <Package className={`${statusColor.text}`} size={24} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="text-neutral-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-neutral-900">{shipment.customer}</div>
                        <div className="text-sm text-neutral-500">{shipment.address}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-neutral-400" />
                      <span className="text-sm text-neutral-600">Est. delivery: {shipment.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck size={16} className="text-neutral-400" />
                      <span className="text-sm text-neutral-600">{shipment.method}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-neutral-600">Progress</span>
                      <span className="text-xs font-medium text-secondary-blue">{shipment.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${shipment.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full ${shipment.status === 'exception' ? 'bg-error' : 'bg-gradient-to-r from-secondary-blue to-primary-blue'}`}
                      />
                    </div>
                  </div>

                  <div className={`mt-4 p-3 rounded-lg ${statusColor.bg} flex items-center gap-2`}>
                    <MapPin size={16} className={statusColor.text} />
                    <span className={`text-sm font-medium ${statusColor.text}`}>
                      {shipment.currentLocation}
                    </span>
                  </div>
                </div>

                {/* Timeline - Expanded View */}
                {isSelected && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 overflow-hidden"
                  >
                    <h4 className="font-semibold text-neutral-900 mb-4">Tracking Timeline</h4>
                    <div className="space-y-4">
                      {shipment.timeline.map((event, eventIndex) => {
                        const Icon = event.icon;
                        const isLast = eventIndex === shipment.timeline.length - 1;
                        const isException = event.status === 'Exception';

                        return (
                          <div key={eventIndex} className="relative flex gap-4">
                            {/* Timeline Line */}
                            {!isLast && (
                              <div className={`absolute left-4 top-10 bottom-0 w-0.5 ${
                                event.completed ? 'bg-secondary-blue' : 'bg-neutral-200'
                              }`} />
                            )}

                            {/* Icon */}
                            <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              event.completed
                                ? isException
                                  ? 'bg-error text-white'
                                  : 'bg-secondary-blue text-white'
                                : 'bg-neutral-100 text-neutral-400'
                            }`}>
                              <Icon size={16} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-6">
                              <div className={`font-medium ${
                                event.completed
                                  ? isException ? 'text-error' : 'text-neutral-900'
                                  : 'text-neutral-400'
                              }`}>
                                {event.status}
                              </div>
                              <div className="text-sm text-neutral-500 mt-0.5">{event.location}</div>
                              <div className="text-xs text-neutral-400 mt-1">{event.time}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex gap-3">
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-medium hover:shadow-lg transition-all">
                        View Details
                      </button>
                      <button className="px-4 py-2 border-2 border-neutral-200 text-neutral-700 rounded-lg font-medium hover:border-secondary-blue hover:text-secondary-blue transition-all">
                        Contact Support
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Click to expand hint */}
                {!isSelected && (
                  <div className="px-6 py-3 border-t border-neutral-100 text-center">
                    <span className="text-xs text-neutral-400">Click to view timeline details</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredShipments.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-12 text-center shadow-sm border border-neutral-100"
          >
            <Package className="mx-auto text-neutral-300 mb-4" size={64} />
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">No shipments found</h3>
            <p className="text-neutral-500">Try adjusting your search or create a new shipment</p>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}
