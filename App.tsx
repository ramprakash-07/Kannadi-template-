
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Details from './pages/Details';
import RSVP from './pages/RSVP';

declare const gsap: any;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const dist = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);
      if (dist > 30) {
        const id = Date.now() + Math.random();
        const size = 10 + Math.random() * 14;
        setHearts((prev) => [...prev.slice(-20), { id, x: e.clientX, y: e.clientY, size }]);
        lastPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <div className="cursor-dot" style={{ left: position.x, top: position.y }} />
      {hearts.map((h) => (
        <span
          key={h.id}
          className="material-symbols-outlined heart-trail"
          style={{ 
            left: h.x, 
            top: h.y,
            fontSize: `${h.size}px`
          }}
        >
          favorite
        </span>
      ))}
    </>
  );
};

const CinematicIntro = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // Reset initial state
    gsap.set(".text-5", { scale: 0.1, opacity: 0, filter: "blur(20px)" });

    tl.to(".text-1", { opacity: 1, duration: 1.0, ease: "power2.out" })
      .to(".text-1", { opacity: 0, duration: 1.0, ease: "power2.in" }, "+=1.0")
      
      .to(".text-2", { opacity: 1, duration: 0.75, ease: "power2.out" })
      .to(".text-2", { opacity: 0, duration: 0.75, ease: "power2.in" }, "+=0.75")
      
      .to(".text-3", { opacity: 1, duration: 0.75, ease: "power2.out" })
      .to(".text-3", { opacity: 0, duration: 0.75, ease: "power2.in" }, "+=0.75")
      
      .to(".text-4", { opacity: 1, duration: 0.75, ease: "power2.out" })
      .to(".text-4", { opacity: 0, duration: 0.75, ease: "power2.in" }, "+=0.75")
      
      // OUR WEDDING - Zoom Sequence
      .to(".text-5", { 
        opacity: 1, 
        scale: 1, 
        filter: "blur(0px)", 
        duration: 2.0, 
        ease: "expo.out",
        onStart: () => {
          gsap.to(".text-5", {
            backgroundPosition: "200% center",
            duration: 3,
            repeat: -1,
            ease: "none"
          });
        }
      })
      .to(".text-5", { 
        scale: 5, 
        opacity: 0, 
        filter: "blur(30px)", 
        duration: 1.5, 
        ease: "power2.in" 
      }, "+=0.5")
      
      .to(".intro-container", { opacity: 0, duration: 1.2, ease: "power2.inOut" }, "-=0.5");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="intro-container">
      <div className="intro-text text-1 text-2xl md:text-3xl font-serif-creative italic">A Great News</div>
      <div className="intro-text text-2 text-6xl md:text-8xl font-serif-creative font-black">Sara</div>
      <div className="intro-text text-3 text-6xl md:text-8xl font-serif-creative font-black">Arjun</div>
      <div className="intro-text text-4 text-2xl md:text-3xl font-serif-creative font-light">Invite You For</div>
      <div className="intro-text text-5 text-4xl md:text-7xl font-serif-creative font-black shimmer-text">
        Our Wedding
      </div>
      
      <div className="absolute bottom-10 left-0 w-full text-center text-white/20 text-[10px] md:text-xs tracking-[0.5em] uppercase font-serif-creative">
        January 23rd, 2026 • Varadha Raja Cinemas
      </div>
    </div>
  );
};

const Navbar = () => {
  const { pathname } = useLocation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">favorite</span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Sara & Arjun</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            {[
              { label: 'Home', path: '/' },
              { label: 'Our Story', path: '/story' },
              { label: 'Details', path: '/details' },
              { label: 'RSVP', path: '/rsvp' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${
                  pathname === link.path ? 'text-primary' : 'text-slate-600 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link to="/rsvp">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40">
              RSVP Now
            </button>
          </Link>
          <button className="md:hidden p-2 text-slate-900">
             <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="w-full border-t border-gray-100 bg-white py-12 mt-auto">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="material-symbols-outlined text-primary">favorite</span>
        <span className="text-xl font-bold">Sara & Arjun</span>
      </div>
      <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500 mb-8">
        <Link to="/story" className="hover:text-primary">Our Story</Link>
        <Link to="/details" className="hover:text-primary">Details</Link>
        <Link to="/rsvp" className="hover:text-primary">RSVP</Link>
      </div>
      <p className="text-slate-400 text-sm">January 23, 2026 • Varadha Raja Cinemas, Kanchipuram</p>
      <p className="text-slate-300 text-xs mt-2">© 2026 Sara & Arjun Wedding. All rights reserved.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-display selection:bg-primary/20 selection:text-primary">
        {showIntro && <CinematicIntro onComplete={() => setShowIntro(false)} />}
        
        {!showIntro && (
          <div className="animate-fade-in duration-1000">
            <CustomCursor />
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/story" element={<OurStory />} />
                <Route path="/details" element={<Details />} />
                <Route path="/rsvp" element={<RSVP />} />
              </Routes>
            </main>
            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
