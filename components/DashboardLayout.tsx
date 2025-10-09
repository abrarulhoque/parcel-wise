'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  Tag,
  MapPin,
  BarChart3,
  CreditCard,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overzicht', href: '/dashboard' },
    { icon: Package, label: 'Bestellingen', href: '/dashboard/orders' },
    { icon: Tag, label: 'Label aanmaken', href: '/dashboard/create-label' },
    { icon: MapPin, label: 'Tracking', href: '/dashboard/tracking' },
    { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
    { icon: CreditCard, label: 'Facturering', href: '/dashboard/billing' },
    { icon: Settings, label: 'Instellingen', href: '/dashboard/settings' },
    { icon: HelpCircle, label: 'Help', href: '/dashboard/help' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-secondary-blue to-primary-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-bold text-neutral-900">ParcelWise</span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-neutral-200 z-40 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-neutral-200">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary-blue to-primary-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold text-neutral-900">ParcelWise</span>
            </Link>
          </div>

          {/* Profile Section */}
          <div className="p-6 border-b border-neutral-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-blue to-primary-blue flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-neutral-900 truncate">John Doe</div>
                <div className="text-sm text-neutral-500 truncate">Company Ltd.</div>
              </div>
            </div>
            <div className="mt-3">
              <span className="inline-block px-3 py-1 bg-secondary-blue/10 text-secondary-blue text-xs font-semibold rounded-full">
                Professional abonnement
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-secondary-blue to-primary-blue text-white shadow-md'
                        : 'text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-neutral-200">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-error hover:bg-error/10 transition-all"
            >
              <LogOut size={20} />
              <span className="font-medium">Uitloggen</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-neutral-200 sticky top-0 z-20 mt-14 lg:mt-0">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Search */}
              <div className="hidden md:block flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                  <input
                    type="text"
                    placeholder="Zoek bestellingen, trackingnummers..."
                    className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-4">
                <button className="relative p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                  <Bell size={20} className="text-neutral-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full" />
                </button>
                <div className="hidden md:flex items-center gap-3 pl-4 border-l border-neutral-200">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-secondary-blue to-primary-blue flex items-center justify-center text-white text-sm font-semibold">
                    JD
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">John Doe</div>
                    <div className="text-xs text-neutral-500">john@company.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
