
import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { GoogleGenAI } from '@google/genai';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    attending: 'joyful' as 'joyful' | 'regret',
    guestCount: 1,
    dietary: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateWish = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Write a short, heartwarming 2-sentence wedding wish from a guest named " + (formData.fullName || 'a friend') + " to Sarah and James."
      });
      if (response.text) {
        setFormData(prev => ({ ...prev, message: response.text || '' }));
      }
    } catch (error) {
      console.error('Failed to generate wish:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6 p-12 bg-white rounded-3xl shadow-2xl animate-fade-in-up">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-4xl">check_circle</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">RSVP Received!</h2>
          <p className="text-slate-500 text-lg">Thank you for letting us know, {formData.fullName}. We can't wait to see you!</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-primary font-bold hover:underline"
          >
            Edit your response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Left: Image Side */}
      <div className="relative w-full lg:w-5/12 xl:w-1/2 min-h-[400px] lg:min-h-auto overflow-hidden">
        <img 
          src={IMAGES.flowers} 
          alt="Wedding Flowers" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-12 right-12 text-white animate-fade-in">
          <h2 className="text-4xl font-black mb-4 tracking-tight drop-shadow-md">Join us in celebration</h2>
          <p className="text-xl font-light opacity-90 tracking-wide">January 23rd, 2026 • Varadha Raja Cinemas</p>
        </div>
      </div>

      {/* Right: Form Side */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16 xl:p-24 bg-white">
        <div className="w-full max-w-[560px] animate-fade-in-up">
          <div className="mb-12">
            <span className="text-primary font-black tracking-[0.2em] text-xs uppercase mb-3 block">Kindly Respond</span>
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-4">RSVP</h1>
            <p className="text-slate-500 text-lg">We can't wait to celebrate our special day with you. Please confirm your attendance by <span className="font-bold text-slate-900">January 1st, 2026</span>.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-slate-900 text-xs font-black uppercase tracking-widest">Full Name</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">person</span>
                <input 
                  type="text" 
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData(p => ({ ...p, fullName: e.target.value }))}
                  placeholder="Enter your full name"
                  className="w-full h-14 pl-12 pr-4 bg-slate-50 border-slate-100 border rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                />
              </div>
            </div>

            {/* Attendance */}
            <div className="space-y-3">
              <label className="text-slate-900 text-xs font-black uppercase tracking-widest">Will you be attending?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={`relative flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${formData.attending === 'joyful' ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' : 'border-slate-100 bg-slate-50 hover:border-primary/30'}`}>
                  <input 
                    type="radio" 
                    name="attendance" 
                    className="h-5 w-5 text-primary border-slate-300"
                    checked={formData.attending === 'joyful'}
                    onChange={() => setFormData(p => ({ ...p, attending: 'joyful' }))}
                  />
                  <div>
                    <p className="font-bold text-slate-900">Joyfully Accepts</p>
                    <p className="text-xs text-slate-400">Can't wait to see you!</p>
                  </div>
                </label>
                <label className={`relative flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${formData.attending === 'regret' ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' : 'border-slate-100 bg-slate-50 hover:border-primary/30'}`}>
                  <input 
                    type="radio" 
                    name="attendance"
                    className="h-5 w-5 text-primary border-slate-300"
                    checked={formData.attending === 'regret'}
                    onChange={() => setFormData(p => ({ ...p, attending: 'regret' }))}
                  />
                  <div>
                    <p className="font-bold text-slate-900">Regretfully Declines</p>
                    <p className="text-xs text-slate-400">We'll miss you.</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Guest Count */}
              <div className="space-y-2">
                <label className="text-slate-900 text-xs font-black uppercase tracking-widest">Total Guests</label>
                <select 
                  value={formData.guestCount}
                  onChange={(e) => setFormData(p => ({ ...p, guestCount: parseInt(e.target.value) }))}
                  className="w-full h-14 px-4 bg-slate-50 border-slate-100 border rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none appearance-none"
                >
                  {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                </select>
              </div>
              {/* Dietary */}
              <div className="space-y-2">
                <label className="text-slate-900 text-xs font-black uppercase tracking-widest">Dietary Restrictions</label>
                <input 
                  type="text" 
                  value={formData.dietary}
                  onChange={(e) => setFormData(p => ({ ...p, dietary: e.target.value }))}
                  placeholder="None, Vegan, GF..."
                  className="w-full h-14 px-4 bg-slate-50 border-slate-100 border rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-slate-900 text-xs font-black uppercase tracking-widest">Message to the Couple</label>
                <button 
                  type="button"
                  onClick={handleGenerateWish}
                  disabled={isGenerating}
                  className="text-xs font-bold text-primary flex items-center gap-1 hover:underline disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  {isGenerating ? 'Thinking...' : 'Generate AI Wish'}
                </button>
              </div>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                placeholder="Share your well wishes..."
                className="w-full p-6 bg-slate-50 border-slate-100 border rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black text-lg rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="animate-spin material-symbols-outlined">progress_activity</span>
              ) : (
                <>
                  Confirm Attendance
                  <span className="material-symbols-outlined">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm">
            <span className="material-symbols-outlined text-lg">info</span>
            <p>Need help? <a href="#" className="underline hover:text-primary">Contact the organizer</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
