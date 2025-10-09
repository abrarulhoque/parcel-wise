'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Package, Truck, Zap, Shield, FileText, Printer, Download, CheckCircle, Home } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CreateLabelPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [labelCreated, setLabelCreated] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [formData, setFormData] = useState({
    // Step 1: Order Details
    fullName: '',
    email: '',
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    country: 'Netherlands',
    weight: '',
    length: '',
    width: '',
    height: '',
    packageType: 'parcel',
    reference: '',

    // Step 2: Shipping Options
    shippingMethod: 'standard',
    extraInsurance: false,
    signatureRequired: false,
    ageVerification: false,
  });

  const shippingMethods = [
    {
      id: 'standard',
      name: 'PostNL Standard',
      icon: Package,
      delivery: '2-3 business days',
      price: 6.95,
      features: ['Track & Trace', 'Signature'],
      badge: 'Most Popular'
    },
    {
      id: 'next-day',
      name: 'PostNL Next Day',
      icon: Truck,
      delivery: 'Next business day',
      price: 9.95,
      features: ['Track & Trace', 'Signature', 'Insurance']
    },
    {
      id: 'same-day',
      name: 'PostNL Same Day',
      icon: Zap,
      delivery: 'Today before 21:00',
      price: 14.95,
      features: ['Track & Trace', 'Signature', 'Insurance', 'Priority']
    }
  ];

  const additionalOptions = [
    { id: 'extraInsurance', label: 'Extra insurance (€500 coverage)', price: 2.50, icon: Shield },
    { id: 'signatureRequired', label: 'Signature on delivery', price: 0.50, icon: FileText },
    { id: 'ageVerification', label: 'Age verification (18+)', price: 1.00, icon: Check },
  ];

  const calculateTotal = () => {
    const method = shippingMethods.find(m => m.id === formData.shippingMethod);
    let total = method?.price || 0;

    if (formData.extraInsurance) total += 2.50;
    if (formData.signatureRequired) total += 0.50;
    if (formData.ageVerification) total += 1.00;

    const vat = total * 0.21;
    return { subtotal: total, vat, total: total + vat };
  };

  const handleSubmit = () => {
    // Generate random tracking number
    const randomTracking = 'PN3YZ' + Math.random().toString().slice(2, 14);
    setTrackingNumber(randomTracking);
    setLabelCreated(true);
    setCurrentStep(4);
  };

  const steps = [
    { number: 1, title: 'Order Details' },
    { number: 2, title: 'Shipping Options' },
    { number: 3, title: 'Review & Print' },
    { number: 4, title: 'Label Created' },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    currentStep > step.number
                      ? 'bg-success text-white'
                      : currentStep === step.number
                      ? 'bg-gradient-to-r from-secondary-blue to-primary-blue text-white'
                      : 'bg-neutral-200 text-neutral-600'
                  }`}>
                    {currentStep > step.number ? <Check size={20} /> : step.number}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <div className={`text-sm font-semibold ${currentStep >= step.number ? 'text-neutral-900' : 'text-neutral-500'}`}>
                      {step.title}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 rounded-full transition-all ${
                    currentStep > step.number ? 'bg-success' : 'bg-neutral-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Order Details */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100"
          >
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Order Details</h2>

            <div className="space-y-8">
              {/* Customer Information */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Customer Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Delivery Address</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Street Address *</label>
                    <input
                      type="text"
                      value={formData.street}
                      onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                      placeholder="Kalverstraat"
                      required
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">House Number *</label>
                    <input
                      type="text"
                      value={formData.houseNumber}
                      onChange={(e) => setFormData({ ...formData, houseNumber: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                      placeholder="123"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Postal Code *</label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                      placeholder="1012 AB"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">City *</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                      placeholder="Amsterdam"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Country *</label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                    >
                      <option>Netherlands</option>
                      <option>Belgium</option>
                      <option>Germany</option>
                      <option>France</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Package Details</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Weight (kg) *</label>
                    <input
                      type="number"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                      placeholder="2.5"
                      step="0.1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Length (cm)</label>
                    <input
                      type="number"
                      value={formData.length}
                      onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                      placeholder="30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Width (cm)</label>
                    <input
                      type="number"
                      value={formData.width}
                      onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                      placeholder="20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Height (cm)</label>
                    <input
                      type="number"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                      placeholder="10"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Package Type *</label>
                    <select
                      value={formData.packageType}
                      onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                    >
                      <option value="parcel">Parcel</option>
                      <option value="letter">Letter</option>
                      <option value="package">Package</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Reference Number</label>
                    <input
                      type="text"
                      value={formData.reference}
                      onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-transparent outline-none"
                      placeholder="Optional"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={() => setCurrentStep(2)}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Continue to Shipping Options
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Shipping Options */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Select Shipping Method</h2>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {shippingMethods.map((method) => {
                  const Icon = method.icon;
                  const isSelected = formData.shippingMethod === method.id;

                  return (
                    <div
                      key={method.id}
                      onClick={() => setFormData({ ...formData, shippingMethod: method.id })}
                      className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all ${
                        isSelected
                          ? 'border-secondary-blue bg-secondary-blue/5 shadow-md'
                          : 'border-neutral-200 hover:border-secondary-blue/50'
                      }`}
                    >
                      {method.badge && (
                        <span className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-secondary-blue to-primary-blue text-white text-xs font-semibold rounded-full">
                          {method.badge}
                        </span>
                      )}

                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          isSelected ? 'bg-gradient-to-br from-secondary-blue to-primary-blue' : 'bg-neutral-100'
                        }`}>
                          <Icon className={isSelected ? 'text-white' : 'text-neutral-600'} size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-neutral-900">{method.name}</h3>
                        </div>
                      </div>

                      <div className="text-sm text-neutral-600 mb-3">{method.delivery}</div>
                      <div className="text-2xl font-bold text-neutral-900 mb-4">€{method.price.toFixed(2)}</div>

                      <div className="space-y-2">
                        {method.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-neutral-600">
                            <Check size={16} className="text-success" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Additional Options</h3>
              <div className="space-y-3">
                {additionalOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <label key={option.id} className="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-secondary-blue cursor-pointer transition-all">
                      <input
                        type="checkbox"
                        checked={formData[option.id as keyof typeof formData] as boolean}
                        onChange={(e) => setFormData({ ...formData, [option.id]: e.target.checked })}
                        className="w-5 h-5 text-secondary-blue border-neutral-300 rounded focus:ring-secondary-blue"
                      />
                      <Icon size={20} className="text-neutral-600" />
                      <span className="flex-1 text-neutral-700">{option.label}</span>
                      <span className="font-semibold text-neutral-900">+€{option.price.toFixed(2)}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="flex items-center gap-2 px-6 py-3 border-2 border-neutral-200 text-neutral-700 rounded-lg font-semibold hover:border-secondary-blue transition-all"
              >
                <ArrowLeft size={20} />
                Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Continue to Review
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Review & Print */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Order Summary */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <h2 className="text-xl font-bold text-neutral-900 mb-6">Order Summary</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Customer</h3>
                    <p className="text-neutral-900">{formData.fullName}</p>
                    {formData.email && <p className="text-sm text-neutral-600">{formData.email}</p>}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Delivery Address</h3>
                    <p className="text-neutral-900">{formData.street} {formData.houseNumber}</p>
                    <p className="text-neutral-600">{formData.postalCode} {formData.city}</p>
                    <p className="text-neutral-600">{formData.country}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Package Details</h3>
                    <p className="text-neutral-600">Weight: {formData.weight} kg</p>
                    {formData.length && <p className="text-neutral-600">Dimensions: {formData.length} × {formData.width} × {formData.height} cm</p>}
                    <p className="text-neutral-600">Type: {formData.packageType}</p>
                    {formData.reference && <p className="text-neutral-600">Reference: {formData.reference}</p>}
                  </div>
                </div>
              </div>

              {/* Cost Breakdown & Label Preview */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Cost Breakdown</h2>

                  {(() => {
                    const { subtotal, vat, total } = calculateTotal();
                    const selectedMethod = shippingMethods.find(m => m.id === formData.shippingMethod);

                    return (
                      <div className="space-y-3">
                        <div className="flex justify-between text-neutral-600">
                          <span>{selectedMethod?.name}</span>
                          <span>€{selectedMethod?.price.toFixed(2)}</span>
                        </div>
                        {formData.extraInsurance && (
                          <div className="flex justify-between text-neutral-600">
                            <span>Extra Insurance</span>
                            <span>€2.50</span>
                          </div>
                        )}
                        {formData.signatureRequired && (
                          <div className="flex justify-between text-neutral-600">
                            <span>Signature Required</span>
                            <span>€0.50</span>
                          </div>
                        )}
                        {formData.ageVerification && (
                          <div className="flex justify-between text-neutral-600">
                            <span>Age Verification</span>
                            <span>€1.00</span>
                          </div>
                        )}
                        <div className="border-t border-neutral-200 pt-3 flex justify-between text-neutral-600">
                          <span>Subtotal</span>
                          <span>€{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-neutral-600">
                          <span>VAT (21%)</span>
                          <span>€{vat.toFixed(2)}</span>
                        </div>
                        <div className="border-t-2 border-neutral-900 pt-3 flex justify-between text-xl font-bold text-neutral-900">
                          <span>Total</span>
                          <span>€{total.toFixed(2)}</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                <div className="bg-gradient-to-br from-secondary-blue/10 to-primary-blue/10 rounded-xl p-8 border border-secondary-blue/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-blue to-primary-blue rounded-lg flex items-center justify-center">
                      <Package className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Label Preview</h3>
                      <p className="text-sm text-neutral-600">PostNL Shipping Label</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="text-6xl mb-4">📦</div>
                    <div className="space-y-2">
                      <div className="font-mono text-sm text-neutral-500">TRACKING: 3SABCD123456789</div>
                      <div className="h-16 bg-neutral-100 rounded flex items-center justify-center text-neutral-400">
                        Barcode Placeholder
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="flex items-center gap-2 px-6 py-3 border-2 border-neutral-200 text-neutral-700 rounded-lg font-semibold hover:border-secondary-blue transition-all"
              >
                <ArrowLeft size={20} />
                Back to Edit
              </button>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 border-2 border-neutral-200 text-neutral-700 rounded-lg font-semibold hover:border-secondary-blue transition-all">
                  <FileText size={20} />
                  Save as Draft
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  <Printer size={20} />
                  Create & Print Label
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Label Created Success */}
        {currentStep === 4 && labelCreated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Success Message */}
            <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-xl p-8 border-2 border-success/20 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="text-white" size={48} />
              </motion.div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">Label Created Successfully!</h2>
              <p className="text-neutral-600">Your shipping label has been generated and is ready to use.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Shipping Label */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-neutral-200 overflow-hidden">
                <div className="bg-gradient-to-r from-secondary-blue to-primary-blue p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Package size={24} />
                      <span className="font-bold text-lg">PostNL</span>
                    </div>
                    <span className="text-sm opacity-90">Shipping Label</span>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Tracking Number */}
                  <div className="text-center">
                    <div className="text-xs font-semibold text-neutral-500 uppercase mb-2">Tracking Number</div>
                    <div className="font-mono text-xl font-bold text-neutral-900 bg-neutral-50 py-3 px-4 rounded-lg">
                      {trackingNumber}
                    </div>
                  </div>

                  {/* Barcode */}
                  <div className="bg-neutral-50 rounded-lg p-6">
                    <div className="text-center space-y-2">
                      <div className="text-6xl">📦</div>
                      <svg className="w-full h-20" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
                        {/* Barcode lines */}
                        {Array.from({ length: 50 }).map((_, i) => (
                          <rect
                            key={i}
                            x={i * 4}
                            y="0"
                            width={Math.random() > 0.5 ? "2" : "1"}
                            height="50"
                            fill="black"
                          />
                        ))}
                      </svg>
                      <div className="font-mono text-xs text-neutral-500">{trackingNumber}</div>
                    </div>
                  </div>

                  {/* Sender & Recipient */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-neutral-900 mb-2">FROM:</div>
                      <div className="text-neutral-600 space-y-1">
                        <div>Company Ltd.</div>
                        <div>Damstraat 123</div>
                        <div>1012 JK Amsterdam</div>
                        <div>Netherlands</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 mb-2">TO:</div>
                      <div className="text-neutral-600 space-y-1">
                        <div>{formData.fullName || 'Customer Name'}</div>
                        <div>{formData.street} {formData.houseNumber}</div>
                        <div>{formData.postalCode} {formData.city}</div>
                        <div>{formData.country}</div>
                      </div>
                    </div>
                  </div>

                  {/* Service Type */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600">Service:</span>
                      <span className="font-semibold text-neutral-900">
                        {shippingMethods.find(m => m.id === formData.shippingMethod)?.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-neutral-600">Weight:</span>
                      <span className="font-semibold text-neutral-900">{formData.weight} kg</span>
                    </div>
                    {formData.reference && (
                      <div className="flex items-center justify-between text-sm mt-2">
                        <span className="text-neutral-600">Reference:</span>
                        <span className="font-semibold text-neutral-900">{formData.reference}</span>
                      </div>
                    )}
                  </div>

                  {/* Additional Services */}
                  {(formData.extraInsurance || formData.signatureRequired || formData.ageVerification) && (
                    <div className="border-t pt-4">
                      <div className="text-xs font-semibold text-neutral-500 uppercase mb-2">Additional Services</div>
                      <div className="flex flex-wrap gap-2">
                        {formData.extraInsurance && (
                          <span className="px-2 py-1 bg-secondary-blue/10 text-secondary-blue text-xs font-medium rounded">
                            Extra Insurance
                          </span>
                        )}
                        {formData.signatureRequired && (
                          <span className="px-2 py-1 bg-secondary-blue/10 text-secondary-blue text-xs font-medium rounded">
                            Signature Required
                          </span>
                        )}
                        {formData.ageVerification && (
                          <span className="px-2 py-1 bg-secondary-blue/10 text-secondary-blue text-xs font-medium rounded">
                            Age Verification
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions & Summary */}
              <div className="space-y-6">
                {/* Cost Summary */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                  <h3 className="font-semibold text-neutral-900 mb-4">Order Summary</h3>
                  {(() => {
                    const { subtotal, vat, total } = calculateTotal();
                    const selectedMethod = shippingMethods.find(m => m.id === formData.shippingMethod);

                    return (
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm text-neutral-600">
                          <span>{selectedMethod?.name}</span>
                          <span>€{selectedMethod?.price.toFixed(2)}</span>
                        </div>
                        {formData.extraInsurance && (
                          <div className="flex justify-between text-sm text-neutral-600">
                            <span>Extra Insurance</span>
                            <span>€2.50</span>
                          </div>
                        )}
                        {formData.signatureRequired && (
                          <div className="flex justify-between text-sm text-neutral-600">
                            <span>Signature Required</span>
                            <span>€0.50</span>
                          </div>
                        )}
                        {formData.ageVerification && (
                          <div className="flex justify-between text-sm text-neutral-600">
                            <span>Age Verification</span>
                            <span>€1.00</span>
                          </div>
                        )}
                        <div className="border-t border-neutral-200 pt-3 flex justify-between text-sm text-neutral-600">
                          <span>Subtotal</span>
                          <span>€{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-neutral-600">
                          <span>VAT (21%)</span>
                          <span>€{vat.toFixed(2)}</span>
                        </div>
                        <div className="border-t-2 border-neutral-900 pt-3 flex justify-between text-lg font-bold text-neutral-900">
                          <span>Total Charged</span>
                          <span>€{total.toFixed(2)}</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Action Buttons */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 space-y-3">
                  <h3 className="font-semibold text-neutral-900 mb-4">What's next?</h3>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.print()}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary-blue to-primary-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    <Printer size={20} />
                    Print Label
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-secondary-blue text-secondary-blue rounded-lg font-semibold hover:bg-secondary-blue hover:text-white transition-all"
                  >
                    <Download size={20} />
                    Download PDF
                  </motion.button>

                  <div className="pt-3 border-t border-neutral-200 space-y-2">
                    <Link href="/dashboard/tracking">
                      <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-neutral-200 text-neutral-700 rounded-lg font-medium hover:border-secondary-blue hover:text-secondary-blue transition-all">
                        <Package size={18} />
                        Track This Shipment
                      </button>
                    </Link>

                    <button
                      onClick={() => {
                        setCurrentStep(1);
                        setLabelCreated(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          street: '',
                          houseNumber: '',
                          postalCode: '',
                          city: '',
                          country: 'Netherlands',
                          weight: '',
                          length: '',
                          width: '',
                          height: '',
                          packageType: 'parcel',
                          reference: '',
                          shippingMethod: 'standard',
                          extraInsurance: false,
                          signatureRequired: false,
                          ageVerification: false,
                        });
                      }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-neutral-200 text-neutral-700 rounded-lg font-medium hover:border-neutral-300 transition-all"
                    >
                      <FileText size={18} />
                      Create Another Label
                    </button>

                    <Link href="/dashboard">
                      <button className="w-full flex items-center justify-center gap-2 px-6 py-3 text-neutral-600 rounded-lg font-medium hover:bg-neutral-50 transition-all">
                        <Home size={18} />
                        Back to Dashboard
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    <strong>Next steps:</strong> Print and attach the label to your package. Drop it off at any PostNL location or schedule a pickup.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}
