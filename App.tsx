
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Details from './pages/Details';
import RSVP from './pages/RSVP';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add a heart if we've moved enough
      const dist = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);
      if (dist > 30) {
        const id = Date.now() + Math.random();
        // Random size between 10px and 24px
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

const Navbar = () => {
  const { pathname } = useLocation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">favorite</span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Sarah & James</h2>
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
        <span className="text-xl font-bold">Sarah & James</span>
      </div>
      <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500 mb-8">
        <Link to="/story" className="hover:text-primary">Our Story</Link>
        <Link to="/details" className="hover:text-primary">Details</Link>
        <Link to="/rsvp" className="hover:text-primary">RSVP</Link>
      </div>
      <p className="text-slate-400 text-sm">January 23, 2026 • Varadha Raja Cinemas, Kanchipuram</p>
      <p className="text-slate-300 text-xs mt-2">© 2026 Sarah & James Wedding. All rights reserved.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-display selection:bg-primary/20 selection:text-primary">
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
    </Router>
  );
};

export default App;
