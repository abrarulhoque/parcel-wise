'use client';

import { motion } from 'framer-motion';
import { User, Building2, Bell, Lock, Globe, Palette, Save, Mail, Phone, MapPin } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);

  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@company.com',
    phone: '+31 6 12345678',
    jobTitle: 'Logistics Manager',
  });

  const [companyData, setCompanyData] = useState({
    companyName: 'Company Ltd.',
    vatNumber: 'NL123456789B01',
    address: 'Damstraat 123',
    postalCode: '1012 JK',
    city: 'Amsterdam',
    country: 'Netherlands',
    website: 'www.company.com',
  });

  const [notifications, setNotifications] = useState({
    emailOrderCreated: true,
    emailOrderDelivered: true,
    emailOrderException: true,
    emailWeeklyReport: true,
    emailMonthlyReport: false,
    pushOrderCreated: true,
    pushOrderDelivered: false,
    pushOrderException: true,
  });

  const [preferences, setPreferences] = useState({
    language: 'en',
    timezone: 'Europe/Amsterdam',
    dateFormat: 'DD/MM/YYYY',
    currency: 'EUR',
    defaultShippingMethod: 'standard',
  });

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'company', label: 'Company', icon: Building2 },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'preferences', label: 'Preferences', icon: Globe },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Settings</h1>
          <p className="text-neutral-600">Manage your account settings and preferences</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-neutral-200 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-secondary-blue border-b-2 border-secondary-blue'
                    : 'text-neutral-500 hover:text-neutral-700'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
          >
            <h2 className="text-lg font-semibold text-neutral-900 mb-6">Personal Information</h2>
            <div className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary-blue to-primary-blue flex items-center justify-center text-white text-3xl font-bold">
                  JD
                </div>
                <div>
                  <button className="px-4 py-2 bg-secondary-blue text-white rounded-lg font-medium hover:shadow-lg transition-all">
                    Change Avatar
                  </button>
                  <p className="text-sm text-neutral-500 mt-2">JPG, PNG or GIF. Max size 2MB.</p>
                </div>
              </div>

              {/* Form */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
                  <input
                    type="text"
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    value={profileData.lastName}
                    onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Job Title</label>
                  <input
                    type="text"
                    value={profileData.jobTitle}
                    onChange={(e) => setProfileData({ ...profileData, jobTitle: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <motion.button
                  onClick={handleSave}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSaving}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                >
                  <Save size={18} />
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Company Tab */}
        {activeTab === 'company' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
          >
            <h2 className="text-lg font-semibold text-neutral-900 mb-6">Company Information</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    value={companyData.companyName}
                    onChange={(e) => setCompanyData({ ...companyData, companyName: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">VAT Number</label>
                  <input
                    type="text"
                    value={companyData.vatNumber}
                    onChange={(e) => setCompanyData({ ...companyData, vatNumber: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Website</label>
                  <input
                    type="text"
                    value={companyData.website}
                    onChange={(e) => setCompanyData({ ...companyData, website: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Street Address</label>
                  <input
                    type="text"
                    value={companyData.address}
                    onChange={(e) => setCompanyData({ ...companyData, address: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Postal Code</label>
                  <input
                    type="text"
                    value={companyData.postalCode}
                    onChange={(e) => setCompanyData({ ...companyData, postalCode: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">City</label>
                  <input
                    type="text"
                    value={companyData.city}
                    onChange={(e) => setCompanyData({ ...companyData, city: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Country</label>
                  <select
                    value={companyData.country}
                    onChange={(e) => setCompanyData({ ...companyData, country: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  >
                    <option value="Netherlands">Netherlands</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <motion.button
                  onClick={handleSave}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSaving}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                >
                  <Save size={18} />
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
          >
            <h2 className="text-lg font-semibold text-neutral-900 mb-6">Notification Preferences</h2>
            <div className="space-y-8">
              {/* Email Notifications */}
              <div>
                <h3 className="font-medium text-neutral-900 mb-4 flex items-center gap-2">
                  <Mail size={18} className="text-secondary-blue" />
                  Email Notifications
                </h3>
                <div className="space-y-4">
                  {[
                    { key: 'emailOrderCreated', label: 'Order Created', description: 'Get notified when a new order is created' },
                    { key: 'emailOrderDelivered', label: 'Order Delivered', description: 'Get notified when an order is delivered' },
                    { key: 'emailOrderException', label: 'Delivery Exceptions', description: 'Get notified about delivery issues' },
                    { key: 'emailWeeklyReport', label: 'Weekly Summary', description: 'Receive weekly analytics and performance reports' },
                    { key: 'emailMonthlyReport', label: 'Monthly Report', description: 'Receive monthly business insights' },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-0">
                      <div>
                        <div className="font-medium text-neutral-900">{item.label}</div>
                        <div className="text-sm text-neutral-500">{item.description}</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications[item.key as keyof typeof notifications]}
                          onChange={(e) => setNotifications({ ...notifications, [item.key]: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-secondary-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary-blue"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Push Notifications */}
              <div>
                <h3 className="font-medium text-neutral-900 mb-4 flex items-center gap-2">
                  <Bell size={18} className="text-secondary-blue" />
                  Push Notifications
                </h3>
                <div className="space-y-4">
                  {[
                    { key: 'pushOrderCreated', label: 'Order Created', description: 'Desktop notifications for new orders' },
                    { key: 'pushOrderDelivered', label: 'Order Delivered', description: 'Desktop notifications for deliveries' },
                    { key: 'pushOrderException', label: 'Delivery Exceptions', description: 'Instant alerts for issues' },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-0">
                      <div>
                        <div className="font-medium text-neutral-900">{item.label}</div>
                        <div className="text-sm text-neutral-500">{item.description}</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications[item.key as keyof typeof notifications]}
                          onChange={(e) => setNotifications({ ...notifications, [item.key]: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-secondary-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary-blue"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <motion.button
                  onClick={handleSave}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSaving}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                >
                  <Save size={18} />
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Change Password */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
              <h2 className="text-lg font-semibold text-neutral-900 mb-6">Change Password</h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Current Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  Update Password
                </button>
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
              <h2 className="text-lg font-semibold text-neutral-900 mb-2">Two-Factor Authentication</h2>
              <p className="text-sm text-neutral-600 mb-6">Add an extra layer of security to your account</p>
              <button className="px-6 py-3 border-2 border-secondary-blue text-secondary-blue rounded-lg font-semibold hover:bg-secondary-blue hover:text-white transition-all">
                Enable 2FA
              </button>
            </div>

            {/* Active Sessions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
              <h2 className="text-lg font-semibold text-neutral-900 mb-6">Active Sessions</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div>
                    <div className="font-medium text-neutral-900">Chrome on macOS</div>
                    <div className="text-sm text-neutral-500">Amsterdam, Netherlands • Current session</div>
                  </div>
                  <span className="text-xs text-success font-medium">Active now</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div>
                    <div className="font-medium text-neutral-900">Safari on iPhone</div>
                    <div className="text-sm text-neutral-500">Amsterdam, Netherlands • 2 hours ago</div>
                  </div>
                  <button className="text-error text-sm font-medium hover:underline">Revoke</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Preferences Tab */}
        {activeTab === 'preferences' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
          >
            <h2 className="text-lg font-semibold text-neutral-900 mb-6">Application Preferences</h2>
            <div className="space-y-6 max-w-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Language</label>
                  <select
                    value={preferences.language}
                    onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  >
                    <option value="en">English</option>
                    <option value="nl">Nederlands</option>
                    <option value="de">Deutsch</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Timezone</label>
                  <select
                    value={preferences.timezone}
                    onChange={(e) => setPreferences({ ...preferences, timezone: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  >
                    <option value="Europe/Amsterdam">Europe/Amsterdam (GMT+1)</option>
                    <option value="Europe/London">Europe/London (GMT)</option>
                    <option value="Europe/Paris">Europe/Paris (GMT+1)</option>
                    <option value="Europe/Berlin">Europe/Berlin (GMT+1)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Date Format</label>
                  <select
                    value={preferences.dateFormat}
                    onChange={(e) => setPreferences({ ...preferences, dateFormat: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  >
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Currency</label>
                  <select
                    value={preferences.currency}
                    onChange={(e) => setPreferences({ ...preferences, currency: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  >
                    <option value="EUR">EUR (€)</option>
                    <option value="USD">USD ($)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Default Shipping Method</label>
                  <select
                    value={preferences.defaultShippingMethod}
                    onChange={(e) => setPreferences({ ...preferences, defaultShippingMethod: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  >
                    <option value="standard">PostNL Standard</option>
                    <option value="next-day">PostNL Next Day</option>
                    <option value="same-day">PostNL Same Day</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <motion.button
                  onClick={handleSave}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSaving}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                >
                  <Save size={18} />
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}
