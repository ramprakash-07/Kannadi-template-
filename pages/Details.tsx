
import React from 'react';
import { EVENTS, IMAGES, COLORS, MAP_LINK } from '../constants';

const Details: React.FC = () => {
  const openMap = () => {
    window.open(MAP_LINK, '_blank');
  };

  return (
    <div className="flex flex-col py-16 px-4 md:px-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16 space-y-4 animate-fade-in-up">
        <p className="text-primary font-black tracking-[0.2em] uppercase text-xs">January 23rd, 2026</p>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          The Wedding Day
        </h1>
        <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed">
          We can't wait to celebrate with you at <span className="text-slate-900 font-bold">Varadha Raja Cinemas</span>. Here are the details for the ceremony and reception.
        </p>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
        {EVENTS.map((event, idx) => (
          <div key={idx} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col border border-slate-50">
            <div className="relative h-72 w-full overflow-hidden">
              <div 
                className="w-full h-full bg-center bg-cover transform group-hover:scale-110 transition-transform duration-1000" 
                style={{ backgroundImage: `url(${event.imageUrl})` }}
              />
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                <span className="material-symbols-outlined text-primary text-xl">{event.icon}</span>
                <span className="text-xs font-black uppercase tracking-widest text-slate-900">{event.type}</span>
              </div>
            </div>
            <div className="p-10 flex flex-col gap-8 flex-1">
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{event.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-slate-500">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    <p className="text-lg font-medium">{event.timeRange}</p>
                  </div>
                  <div className="flex items-start gap-4 text-slate-500">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <p className="text-lg leading-tight">{event.address}</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={openMap}
                className="w-full flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg hover:-translate-y-1"
              >
                <span className="material-symbols-outlined text-xl">map</span>
                <span>Get Directions</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-start">
        {/* Dress Code */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
           <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">checkroom</span>
              <span className="text-primary font-black uppercase tracking-widest text-xs">The Attire</span>
           </div>
           <h3 className="text-3xl font-black mb-6 text-slate-900 tracking-tight">Black Tie Optional</h3>
           <p className="text-slate-500 text-lg leading-relaxed mb-8">
              We ask that gentlemen wear a tuxedo or dark suit and tie. Ladies are encouraged to wear long evening gowns or elegant cocktail dresses.
           </p>
           <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Our Wedding Palette</h4>
           <div className="flex gap-3 mb-8">
             {COLORS.swatches.map((s, i) => (
               <div key={i} className="w-10 h-10 rounded-full shadow-sm border border-slate-100" style={{ backgroundColor: s.color }} title={s.label} />
             ))}
           </div>
           <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
             View Moodboard <span className="material-symbols-outlined text-base">arrow_forward</span>
           </button>
        </div>

        {/* Transportation */}
        <div className="bg-primary/5 p-10 rounded-[2.5rem] border border-primary/10 shadow-sm h-full">
           <div className="flex items-center gap-2 mb-6 text-primary">
              <span className="material-symbols-outlined">airport_shuttle</span>
              <span className="font-black uppercase tracking-widest text-xs">Transportation</span>
           </div>
           <h3 className="text-3xl font-black mb-6 text-slate-900 tracking-tight">Travel Info</h3>
           <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Varadha Raja Cinemas is centrally located. Ample parking is available for guests. For those traveling from out of town, we recommend hotels in the Kanchipuram city center.
           </p>
           <div className="p-6 bg-white rounded-2xl border border-primary/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">park</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 uppercase text-xs tracking-widest">Parking</p>
                <p className="text-xl font-black text-primary">Available</p>
              </div>
           </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full flex flex-col gap-6">
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">Venue Location</h3>
        <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl relative group">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
            style={{ backgroundImage: `url(${IMAGES.map})` }}
          />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <button 
              onClick={openMap}
              className="bg-white text-slate-900 px-8 py-4 rounded-full shadow-2xl font-black flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined text-primary text-2xl">map</span>
              Open Varadha Raja Cinemas in Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
