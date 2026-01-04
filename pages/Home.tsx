
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const Home: React.FC = () => {
  const weddingDate = new Date('2026-01-23T16:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [celebrativeHearts, setCelebrativeHearts] = useState<{ id: number, x: number, y: number, rotate: number, dx: number, dy: number, size: number }[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  // Function to handle Google Calendar Export
  const handleSaveTheDate = () => {
    const title = encodeURIComponent("Sara & Arjun's Wedding");
    const details = encodeURIComponent("Together with our families, we joyfully invite you to join us as we begin our new life together.");
    const location = encodeURIComponent("Varadha Raja Cinemas, Kanchipuram, Tamil Nadu 631501");
    // Format: YYYYMMDDTHHMMSSZ
    const startDate = "20260123T160000";
    const endDate = "20260123T230000";
    
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  // Automated intense heart shattering effect when hovered
  useEffect(() => {
    let interval: number;
    if (isHovered && imageContainerRef.current) {
      interval = window.setInterval(() => {
        const rect = imageContainerRef.current!.getBoundingClientRect();
        
        for (let i = 0; i < 2; i++) {
          const hId = Math.random() + Date.now();
          // Sides: 0: Top, 1: Right, 2: Bottom, 3: Left
          const side = Math.floor(Math.random() * 4);
          
          let hx = 0, hy = 0, hdx = 0, hdy = 0;

          // Shatter from all borders
          switch(side) {
            case 0: // Top
              hx = Math.random() * rect.width; 
              hy = 0; 
              hdy = -Math.random() * 120 - 60; 
              hdx = (Math.random() - 0.5) * 120; 
              break;
            case 1: // Right
              hx = rect.width; 
              hy = Math.random() * rect.height; 
              hdx = Math.random() * 120 + 60; 
              hdy = (Math.random() - 0.5) * 120; 
              break;
            case 2: // Bottom
              hx = Math.random() * rect.width; 
              hy = rect.height; 
              hdy = Math.random() * 120 + 60; 
              hdx = (Math.random() - 0.5) * 120; 
              break;
            case 3: // Left
              hx = 0; 
              hy = Math.random() * rect.height; 
              hdx = -Math.random() * 120 - 60; 
              hdy = (Math.random() - 0.5) * 120; 
              break;
            default:
              continue;
          }

          setCelebrativeHearts(prev => [...prev.slice(-60), { 
            id: hId, x: hx, y: hy, rotate: Math.random() * 360, dx: hdx, dy: hdy, size: 8 + Math.random() * 20 
          }]);
        }
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-24">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center justify-center min-h-fit lg:min-h-[calc(100vh-160px)]">
        {/* Left Content (Text) */}
        <div className="flex flex-col gap-6 lg:gap-8 flex-1 max-w-2xl w-full lg:items-start text-center lg:text-left">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="h-px w-8 bg-primary/60"></span>
              <span className="text-primary font-semibold tracking-widest text-xs uppercase">The Wedding Of</span>
              <span className="h-px w-8 bg-primary/60"></span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9]">
              Sara <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">&amp; Arjun</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-6 mt-2 text-slate-600">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">calendar_month</span>
                <span className="font-medium">January 23rd, 2026</span>
              </div>
              <span className="hidden sm:block text-slate-300">•</span>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <span className="font-medium">Varadha Raja Cinemas</span>
              </div>
            </div>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0 mt-2">
              Together with our families, we joyfully invite you to join us as we begin our new life together. We can't wait to celebrate our special day with you.
            </p>
          </div>

          {/* Timer */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 py-2 sm:py-4">
            {[
              { val: timeLeft.days, label: 'Days' },
              { val: timeLeft.hours, label: 'Hours' },
              { val: timeLeft.mins, label: 'Mins' },
              { val: timeLeft.secs, label: 'Secs' },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl shadow-sm h-16 w-16 sm:h-24 sm:w-24">
                <span className={`text-xl sm:text-3xl font-bold ${t.label === 'Days' ? 'text-primary' : 'text-slate-800'}`}>
                  {String(t.val).padStart(2, '0')}
                </span>
                <span className="text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2">
            <Link to="/rsvp" className="flex items-center justify-center h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-primary text-white font-bold text-base sm:text-lg shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all duration-300 min-w-[140px]">
              RSVP Now
            </Link>
            <Link to="/details" className="flex items-center justify-center h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-white text-slate-800 font-bold text-base sm:text-lg border border-gray-200 hover:bg-gray-50 transition-colors min-w-[140px] group">
              <span className="mr-2">Details</span>
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full max-w-2xl lg:h-[700px] h-[350px] sm:h-[450px] shrink-0">
          <div 
            ref={imageContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative w-full h-full rounded-2xl overflow-visible transition-all duration-1000 ease-out group 
              scale-[0.75] lg:scale-100
              ${isHovered ? 'scale-[0.78] lg:scale-[1.015] -translate-y-2 animate-glow ring-4 ring-primary/5' : 'shadow-2xl'}`}
          >
            {/* Background Soft Blobs */}
            <div className={`absolute -top-10 -right-10 w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-3xl z-0 transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-30'}`}></div>
            <div className={`absolute -bottom-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-3xl z-0 transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-30'}`}></div>
            
            <div 
              className={`absolute inset-0 bg-gray-100 z-10 transition-all duration-1000 rounded-2xl ${isHovered ? 'scale-105 saturate-[1.1] brightness-[1.02]' : ''}`}
              style={{ backgroundImage: `url(${IMAGES.portrait})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-primary/5 to-white/5 opacity-60 transition-opacity duration-1000 ${isHovered ? 'opacity-70' : 'opacity-60'}`}></div>
            </div>

            {/* Celebrative Hearts (Shattering from all borders) */}
            <div className="absolute inset-0 pointer-events-none overflow-visible z-40">
              {celebrativeHearts.map(h => (
                <span
                  key={h.id}
                  className="material-symbols-outlined celebrative-heart"
                  style={{ 
                    left: h.x, 
                    top: h.y,
                    fontSize: `${h.size}px`,
                    '--tw-x': `${h.dx}px`,
                    '--tw-y': `${h.dy}px`,
                    '--tw-rotate': `${h.rotate}deg`
                  } as React.CSSProperties}
                >
                  favorite
                </span>
              ))}
            </div>

            {/* Save the Date Card */}
            <button 
              onClick={handleSaveTheDate}
              className={`absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/40 transition-all duration-700 cursor-none hover:bg-white ${isHovered ? 'scale-105 translate-x-2 -translate-y-1' : ''}`}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full transition-colors duration-700 flex items-center justify-center 
                  ${isHovered ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                  <span className="material-symbols-outlined text-xl sm:text-2xl">event_available</span>
                </div>
                <div className="text-left">
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest">Save the Date</p>
                  <p className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">23.01.2026</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
