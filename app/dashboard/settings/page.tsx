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
    { id: 'profile', label: 'Profiel', icon: User },
    { id: 'company', label: 'Bedrijf', icon: Building2 },
    { id: 'notifications', label: 'Notificaties', icon: Bell },
    { id: 'security', label: 'Beveiliging', icon: Lock },
    { id: 'preferences', label: 'Voorkeuren', icon: Globe },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Instellingen</h1>
          <p className="text-neutral-600">Beheer je accountinstellingen en voorkeuren</p>
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
            <h2 className="text-lg font-semibold text-neutral-900 mb-6">Persoonlijke informatie</h2>
            <div className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary-blue to-primary-blue flex items-center justify-center text-white text-3xl font-bold">
                  JD
                </div>
                <div>
                  <button className="px-4 py-2 bg-secondary-blue text-white rounded-lg font-medium hover:shadow-lg transition-all">
                    Avatar wijzigen
                  </button>
                  <p className="text-sm text-neutral-500 mt-2">JPG, PNG of GIF. Max grootte 2MB.</p>
                </div>
              </div>

              {/* Form */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Voornaam</label>
                  <input
                    type="text"
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Achternaam</label>
                  <input
                    type="text"
                    value={profileData.lastName}
                    onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">E-mailadres</label>
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
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Telefoonnummer</label>
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
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Functietitel</label>
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
                  {isSaving ? 'Opslaan...' : 'Wijzigingen opslaan'}
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
            <h2 className="text-lg font-semibold text-neutral-900 mb-6">Bedrijfsinformatie</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Bedrijfsnaam</label>
                  <input
                    type="text"
                    value={companyData.companyName}
                    onChange={(e) => setCompanyData({ ...companyData, companyName: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">BTW-nummer</label>
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
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Straat en huisnummer</label>
                  <input
                    type="text"
                    value={companyData.address}
                    onChange={(e) => setCompanyData({ ...companyData, address: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Postcode</label>
                  <input
                    type="text"
                    value={companyData.postalCode}
                    onChange={(e) => setCompanyData({ ...companyData, postalCode: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Plaats</label>
                  <input
                    type="text"
                    value={companyData.city}
                    onChange={(e) => setCompanyData({ ...companyData, city: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Land</label>
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
                  {isSaving ? 'Opslaan...' : 'Wijzigingen opslaan'}
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
            <h2 className="text-lg font-semibold text-neutral-900 mb-6">Notificatievoorkeuren</h2>
            <div className="space-y-8">
              {/* Email Notifications */}
              <div>
                <h3 className="font-medium text-neutral-900 mb-4 flex items-center gap-2">
                  <Mail size={18} className="text-secondary-blue" />
                  E-mail notificaties
                </h3>
                <div className="space-y-4">
                  {[
                    { key: 'emailOrderCreated', label: 'Bestelling aangemaakt', description: 'Ontvang een melding wanneer een nieuwe bestelling wordt aangemaakt' },
                    { key: 'emailOrderDelivered', label: 'Bestelling afgeleverd', description: 'Ontvang een melding wanneer een bestelling wordt afgeleverd' },
                    { key: 'emailOrderException', label: 'Bezorguitzonderingen', description: 'Ontvang een melding over bezorgproblemen' },
                    { key: 'emailWeeklyReport', label: 'Weekoverzicht', description: 'Ontvang wekelijkse analytics en prestatierapporten' },
                    { key: 'emailMonthlyReport', label: 'Maandrapport', description: 'Ontvang maandelijkse bedrijfsinzichten' },
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
                  Push notificaties
                </h3>
                <div className="space-y-4">
                  {[
                    { key: 'pushOrderCreated', label: 'Bestelling aangemaakt', description: 'Desktop notificaties voor nieuwe bestellingen' },
                    { key: 'pushOrderDelivered', label: 'Bestelling afgeleverd', description: 'Desktop notificaties voor bezorgingen' },
                    { key: 'pushOrderException', label: 'Bezorguitzonderingen', description: 'Directe meldingen voor problemen' },
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
                  {isSaving ? 'Opslaan...' : 'Wijzigingen opslaan'}
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
              <h2 className="text-lg font-semibold text-neutral-900 mb-6">Wachtwoord wijzigen</h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Huidig wachtwoord</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Nieuw wachtwoord</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Bevestig nieuw wachtwoord</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                  />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  Wachtwoord bijwerken
                </button>
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
              <h2 className="text-lg font-semibold text-neutral-900 mb-2">Tweefactorauthenticatie</h2>
              <p className="text-sm text-neutral-600 mb-6">Voeg een extra beveiligingslaag toe aan je account</p>
              <button className="px-6 py-3 border-2 border-secondary-blue text-secondary-blue rounded-lg font-semibold hover:bg-secondary-blue hover:text-white transition-all">
                2FA inschakelen
              </button>
            </div>

            {/* Active Sessions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
              <h2 className="text-lg font-semibold text-neutral-900 mb-6">Actieve sessies</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div>
                    <div className="font-medium text-neutral-900">Chrome op macOS</div>
                    <div className="text-sm text-neutral-500">Amsterdam, Nederland • Huidige sessie</div>
                  </div>
                  <span className="text-xs text-success font-medium">Nu actief</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div>
                    <div className="font-medium text-neutral-900">Safari op iPhone</div>
                    <div className="text-sm text-neutral-500">Amsterdam, Nederland • 2 uur geleden</div>
                  </div>
                  <button className="text-error text-sm font-medium hover:underline">Intrekken</button>
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
            <h2 className="text-lg font-semibold text-neutral-900 mb-6">Applicatievoorkeuren</h2>
            <div className="space-y-6 max-w-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Taal</label>
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
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Tijdzone</label>
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
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Datumnotatie</label>
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
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Valuta</label>
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
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Standaard verzendmethode</label>
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
                  {isSaving ? 'Opslaan...' : 'Wijzigingen opslaan'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}
