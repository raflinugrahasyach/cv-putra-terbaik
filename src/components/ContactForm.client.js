'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';
    if (accessKey) {
      formData.set('access_key', accessKey);
    }
    formData.set('from_name', 'Website CV Putra Terbaik');
    formData.set('subject', 'Pesan Baru dari Website CV Putra Terbaik');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input 
        type="hidden" 
        name="access_key" 
        value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''} 
      />

      {submitStatus === 'success' && (
        <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm flex items-center gap-2">
          <CheckCircle2 size={18} className="text-green-600 shrink-0" />
          <span>Pesan Anda telah kami terima. Tim CV Putra Terbaik akan segera menghubungi Anda.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-2">
          <AlertCircle size={18} className="text-red-600 shrink-0" />
          <span>Gagal mengirim pesan. Silakan coba lagi atau hubungi kami via WhatsApp.</span>
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
        <input 
          id="contact-name" 
          type="text" 
          name="name" 
          placeholder="Contoh: Budi Santoso" 
          className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-400" 
          required 
          minLength={3} 
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
        <input 
          id="contact-email" 
          type="email" 
          name="email" 
          placeholder="emailanda@gmail.com" 
          className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-400" 
          required 
        />
      </div>

      <div>
        <label htmlFor="contact-whatsapp" className="block text-sm font-bold text-slate-700 mb-2">
          Nomor WhatsApp
        </label>
        <input 
          id="contact-whatsapp" 
          type="tel" 
          name="whatsapp" 
          placeholder="Contoh: 08123456789" 
          className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-400" 
          required
          pattern="[0-9+\-\s]{8,20}"
          title="Masukkan nomor WhatsApp yang valid"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-bold text-slate-700 mb-2">Pesan</label>
        <textarea 
          id="contact-message" 
          name="message" 
          rows="5" 
          placeholder={`Contoh format:
- Kebutuhan: (Penawaran/Konsultasi/Survey)
- Lokasi: 
- Jumlah Gate/Pintu: 
- Catatan Tambahan:`}
          className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-400 text-sm" 
          required 
          minLength={10}
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full py-4 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-1 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            <span>Mengirim Pesan...</span>
          </>
        ) : (
          <>
            <span>Kirim Pesan Sekarang</span>
            <ArrowRight size={20} />
          </>
        )}
      </button>
    </form>
  );
}
