
import React from 'react';
import { TIMELINE, IMAGES } from '../constants';

const OurStory: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-background-light">
      {/* Hero Section - Optimized for Mobile height */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] md:min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105" 
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-background-light"></div>
        <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4">
            Our Love Story
          </div>
          <h1 className="text-white text-4xl md:text-7xl font-black tracking-tighter mb-4 drop-shadow-lg">
            A Journey of <br className="md:hidden" /> <span className="text-primary italic">Forever</span>
          </h1>
          <p className="text-white/90 text-sm md:text-xl font-medium tracking-wide max-w-md mx-auto leading-relaxed">
            From two separate paths to one beautiful destination.
          </p>
        </div>
      </section>

      {/* Intro Header */}
      <section className="py-16 md:py-24 px-6 md:px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-primary text-[10px] md:text-sm font-black uppercase tracking-[0.2em] mb-4">The Chapter Book</h2>
          <h3 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight leading-tight">Every moment was a stepping stone.</h3>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Our story isn't just about the big milestones, but the small laughs, the shared coffees, and the quiet understanding that grew into a lifetime commitment.
          </p>
        </div>
      </section>

      {/* Timeline - Redesigned for Mobile (Left-aligned line) */}
      <section className="relative pb-24 md:pb-32 px-6 md:px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Line - Mobile: Far left, Desktop: Center */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2"></div>
          
          <div className="space-y-16 md:space-y-24">
            {TIMELINE.map((event, idx) => (
              <div key={idx} className="relative grid md:grid-cols-2 gap-8 md:gap-24 items-start md:items-center">
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white border-2 md:border-4 border-primary/20 flex items-center justify-center shadow-md">
                    <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-[12px] md:text-base">{event.icon}</span>
                    </div>
                  </div>
                </div>
                
                {/* Image Side */}
                <div className={`pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right order-1 md:order-1' : 'md:order-2'}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl md:shadow-2xl ring-4 ring-white transform transition-transform hover:rotate-1 duration-500 group">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title} 
                      className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                </div>
                
                {/* Text Side */}
                <div className={`pl-12 md:pl-12 ${idx % 2 === 0 ? 'order-2 md:order-2' : 'order-1 md:order-1'}`}>
                  <div className="flex flex-col md:items-start">
                    <span className="inline-block self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-black uppercase tracking-widest mb-3">
                      {event.date}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black mb-3 text-slate-900 tracking-tight">{event.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-lg">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal Highlight - Image removed on mobile view as requested */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-primary/10 overflow-hidden md:flex flex-col md:flex-row border border-slate-50">
            {/* Image container hidden on mobile */}
            <div className="hidden md:block md:w-1/2 relative md:h-auto md:min-h-[450px]">
              <img src={IMAGES.proposal} alt="The Proposal" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            {/* Text side now takes full width on mobile */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">diamond</span>
                <span className="text-primary font-black uppercase tracking-[0.2em] text-xs">The Proposal</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 text-slate-900 tracking-tight leading-tight">A Lifetime of "Yes"</h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8">
                On a beautiful autumn evening, John surprised Jane with a question that would change their lives forever. It wasn't just a ring, it was a promise of a million shared sunsets.
              </p>
              <div className="flex items-center gap-4 text-xs md:text-sm font-bold text-slate-400 italic">
                <span className="w-8 md:w-12 h-px bg-slate-200"></span>
                October 12, 2023 • The easiest answer ever spoken.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="py-24 px-6 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-white text-[20rem] absolute -top-20 -left-20 rotate-12">favorite</span>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-primary text-5xl mb-6">auto_awesome</span>
          <h2 className="text-white text-2xl md:text-4xl font-black italic tracking-tight leading-relaxed">
            "We were together. I forget the rest."
          </h2>
          <p className="text-white/40 text-xs md:text-sm mt-6 font-bold uppercase tracking-widest">— Walt Whitman</p>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
