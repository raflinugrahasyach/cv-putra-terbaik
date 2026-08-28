'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  Check,
  Plus,
  Minus,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  SlidersHorizontal,
  RotateCcw,
  Sparkles,
  ChevronDown
} from 'lucide-react';

const INITIAL_PACKAGES = [
  { id: 1, name: "Barrier Gate, Boom 4m speed 3s", desc: "1 IN 1 OUT. Include remote 2 pcs", qty: 2, checked: true },
  { id: 2, name: "Paket Box Dispenser Ticket", desc: "Touchless Button, IP Printer Thermal, Microcontroller, Switch Hub, Stop Kontak", qty: 1, checked: true },
  { id: 3, name: "Microcontroller Pintu Keluar", desc: "Modul controller untuk gate keluar", qty: 1, checked: true },
  { id: 4, name: "Vehicle Loop Detector", desc: "Sensor tanam untuk menutup palang otomatis", qty: 2, checked: true },
  { id: 5, name: "IP Camera Hikvision 2 MP", desc: "Termasuk tiang kamera", qty: 2, checked: true },
  { id: 6, name: "PC Admin / Server (1 Set)", desc: "Core i5, RAM 4GB, SSD 256GB, HDD 512GB, Monitor LG 19 inch", qty: 1, checked: true },
  { id: 7, name: "Printer Cetak Struk", desc: "Thermal printer kasir", qty: 1, checked: true },
  { id: 8, name: "Barcode Scanner", desc: "Scanner untuk tiket keluar", qty: 1, checked: true },
  { id: 9, name: "Software Parkir Modul Ticket", desc: "Fitur laporan, pendapatan, foto IP Cam, dan pengaturan tarif", qty: 1, checked: true },
  { id: 10, name: "Pos Parkir Single", desc: "Ukuran P.120 × L.85 × T.200cm", qty: 1, checked: true },
];

export default function SolutionBuilder() {
  const [packages, setPackages] = useState(INITIAL_PACKAGES);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [validationError, setValidationError] = useState('');

  // Toggle item selection
  const handleToggle = (id) => {
    setPackages((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // Adjust quantity with a minimum of 1
  const handleQtyChange = (id, delta) => {
    setPackages((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.qty + delta);
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  };

  // Bulk actions
  const selectAll = () => {
    setPackages((prev) => prev.map((item) => ({ ...item, checked: true })));
  };

  const resetDefaults = () => {
    setPackages(INITIAL_PACKAGES);
  };

  // Calculations
  const selectedItems = useMemo(() => packages.filter((p) => p.checked), [packages]);
  const totalUnits = useMemo(
    () => selectedItems.reduce((acc, curr) => acc + curr.qty, 0),
    [selectedItems]
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationError('');
    setSubmitStatus(null);

    if (selectedItems.length === 0) {
      setValidationError('Pilih minimal 1 komponen untuk meminta estimasi harga.');
      return;
    }

    setIsSubmitting(true);

    // 1. Generate clean HTML Table for Web3Forms email
    const htmlTable = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; color: #1e293b;">
        <h2 style="color: #0284c7; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
          Permintaan Estimasi Harga (Custom RFQ)
        </h2>
        <p><strong>Nama:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>WhatsApp:</strong> ${formData.whatsapp}</p>
        <p><strong>Pesan / Catatan:</strong> ${formData.notes || '-'}</p>
        
        <h3 style="margin-top: 24px; color: #0f172a;">Rincian Komponen Terpilih (${selectedItems.length} Item, Total ${totalUnits} Unit):</h3>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; border-color: #cbd5e1; font-size: 13px;">
          <thead>
            <tr style="background-color: #f8fafc; text-align: left;">
              <th style="width: 30px; text-align: center;">No</th>
              <th>Komponen / Spesifikasi</th>
              <th>Keterangan</th>
              <th style="width: 60px; text-align: center;">Qty</th>
            </tr>
          </thead>
          <tbody>
            ${selectedItems.map((item, idx) => `
              <tr>
                <td style="text-align: center;">${idx + 1}</td>
                <td><strong>${item.name}</strong></td>
                <td style="color: #64748b;">${item.desc}</td>
                <td style="text-align: center; font-weight: bold;">${item.qty}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    // 2. Generate plain text breakdown
    const textBreakdown = selectedItems
      .map((item, idx) => `${idx + 1}. [${item.qty}x] ${item.name} (${item.desc})`)
      .join('\n');

    const fullMessage = `
RINCIAN SPESIFIKASI RFQ:
----------------------------------------
${textBreakdown}
----------------------------------------
Total Item: ${selectedItems.length}
Total Unit: ${totalUnits}

Pesan / Catatan Klien:
${formData.notes || '-'}
    `.trim();

    const payload = new FormData();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';
    if (accessKey) {
      payload.set('access_key', accessKey);
    }
    payload.set('from_name', 'Website CV Putra Terbaik - RFQ Builder');
    payload.set('subject', `[RFQ Estimasi Harga] ${formData.name} - ${selectedItems.length} Komponen`);
    payload.set('name', formData.name);
    payload.set('email', formData.email);
    payload.set('whatsapp', formData.whatsapp);
    payload.set('message', fullMessage);
    payload.set('html_table', htmlTable);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', whatsapp: '', notes: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('RFQ Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rfq-builder" className="py-24 px-6 relative bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={14} className="text-brand-500" />
            Kalkulator Spesifikasi B2B
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Rancang Sistem Keamanan Anda
          </h2>
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
            Pilih spesifikasi yang Anda butuhkan, sesuaikan kuantitas, dan dapatkan estimasi biaya secara instan langsung dari tim teknis kami.
          </p>
        </div>

        {/* E-Commerce Flow: Builder on Left (Col-7), Sticky Form on Right (Col-5) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* ========================================================================= */}
          {/* 1. BUILDER (COL 1-7) — Renders TOP on Mobile, LEFT on Desktop             */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 lg:p-8 shadow-xl shadow-slate-900/5">

            {/* Package Selector / Header Bar */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-50/80 via-white to-slate-50 border border-brand-100/80 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Pilih Paket:</span>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white hover:bg-slate-50 rounded-xl border border-brand-200/90 shadow-xs text-xs font-bold text-brand-700 cursor-pointer transition-all hover:border-brand-400 group">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>1 IN 1 OUT</span>
                  <ChevronDown size={14} className="text-slate-400 group-hover:text-brand-600 transition-colors" />
                </div>
              </div>
              <span className="text-[11px] text-slate-500 font-medium italic">
                *Komponen dapat disesuaikan
              </span>
            </div>

            {/* Toolbar: Component Heading & Bulk Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-brand-600" />
                <h3 className="font-bold text-slate-900 text-lg">Daftar Spesifikasi & Komponen</h3>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <button
                  type="button"
                  onClick={selectAll}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors cursor-pointer"
                >
                  Pilih Semua
                </button>
                <button
                  type="button"
                  onClick={resetDefaults}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                  title="Kembalikan ke paket rekomendasi awal"
                >
                  <RotateCcw size={12} />
                  Reset Paket
                </button>
              </div>
            </div>

            {/* Products Checklist (Minimalist Typographic Layout) */}
            <div className="space-y-3">
              {packages.map((item) => {
                const isChecked = item.checked;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    className={`p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 sm:gap-4 ${isChecked
                        ? 'bg-white border-slate-200 shadow-sm'
                        : 'bg-slate-50/60 border-dashed border-slate-200 opacity-55'
                      }`}
                  >
                    {/* Checkbox + Title + Description */}
                    <div
                      className="flex items-start gap-3.5 flex-1 cursor-pointer select-none"
                      onClick={() => handleToggle(item.id)}
                    >
                      <button
                        type="button"
                        aria-checked={isChecked}
                        role="checkbox"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggle(item.id);
                        }}
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all shrink-0 mt-0.5 ${isChecked
                            ? 'bg-brand-600 border-brand-600 text-white shadow-xs'
                            : 'bg-white border-slate-300 text-transparent'
                          }`}
                      >
                        <Check size={13} strokeWidth={3} />
                      </button>

                      <div className="space-y-0.5 min-w-0">
                        <p className={`text-sm font-bold leading-tight ${isChecked ? 'text-slate-900' : 'text-slate-500 line-through'}`}>
                          {item.name}
                        </p>
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-100/80 p-1 rounded-xl shrink-0 border border-slate-200/60">
                      <button
                        type="button"
                        onClick={() => handleQtyChange(item.id, -1)}
                        disabled={!isChecked || item.qty <= 1}
                        className="w-7 h-7 rounded-lg bg-white hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-white text-slate-700 flex items-center justify-center transition-all shadow-xs cursor-pointer disabled:cursor-not-allowed"
                        aria-label={`Kurangi kuantitas ${item.name}`}
                      >
                        <Minus size={13} />
                      </button>

                      <span className="w-7 text-center font-bold text-xs text-slate-900">
                        {item.qty}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleQtyChange(item.id, 1)}
                        disabled={!isChecked}
                        className="w-7 h-7 rounded-lg bg-white hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-white text-slate-700 flex items-center justify-center transition-all shadow-xs cursor-pointer disabled:cursor-not-allowed"
                        aria-label={`Tambah kuantitas ${item.name}`}
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 2. CHECKOUT FORM (COL 8-12) — Renders BOTTOM on Mobile, RIGHT on Desktop   */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 lg:p-8 shadow-xl shadow-slate-900/5 lg:sticky lg:top-24">
            <div>
              <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
                  <Calculator size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Minta Estimasi Harga</h3>
                  <p className="text-xs text-slate-500">Estimasi resmi akan dikirim ke Email Anda</p>
                </div>
              </div>

              {/* Live Cart Summary Pill */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>Rangkuman Pilihan:</span>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-brand-100 text-brand-700 font-bold">
                    {selectedItems.length} Item
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-200 text-slate-800 font-bold">
                    {totalUnits} Total Unit
                  </span>
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-green-50 border border-green-200 text-green-800 text-sm flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold mb-0.5">Permintaan RFQ Berhasil Terkirim!</p>
                    <p className="text-xs text-green-700 leading-relaxed">
                      Tim CV Putra Terbaik telah menerima rincian spesifikasi Anda dan akan segera menghubungi Anda.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
                  <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold mb-0.5">Gagal Mengirim Permintaan</p>
                    <p className="text-xs text-red-700">
                      Terjadi kendala teknis. Silakan coba lagi atau hubungi kami langsung melalui WhatsApp.
                    </p>
                  </div>
                </div>
              )}

              {validationError && (
                <div className="mb-6 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
                  <AlertCircle size={16} className="text-amber-600 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Standardized Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="rfq-name" className="block text-sm font-bold text-slate-700 mb-1.5">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="rfq-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder:text-slate-400 text-sm"
                    required
                    minLength={3}
                  />
                </div>

                <div>
                  <label htmlFor="rfq-email" className="block text-sm font-bold text-slate-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="rfq-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="emailanda@gmail.com"
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder:text-slate-400 text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="rfq-whatsapp" className="block text-sm font-bold text-slate-700 mb-1.5">
                    Nomor WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="rfq-whatsapp"
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="Contoh: 08123456789"
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder:text-slate-400 text-sm"
                    required
                    pattern="[0-9+\-\s]{8,20}"
                    title="Masukkan nomor WhatsApp yang valid"
                  />
                </div>

                <div>
                  <label htmlFor="rfq-notes" className="block text-sm font-bold text-slate-700 mb-1.5">
                    Pesan / Catatan Tambahan
                  </label>
                  <textarea
                    id="rfq-notes"
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Tulis kebutuhan atau catatan lokasi di sini..."
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder:text-slate-400 text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-1 disabled:hover:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Memproses Estimasi...</span>
                    </>
                  ) : (
                    <>
                      <span>Minta Estimasi Harga</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
