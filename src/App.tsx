import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesPage } from './pages/Services';
import { Masters } from './pages/Masters';
import { Contacts } from './pages/Contacts';
import { Booking } from './pages/Booking';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-forest selection:bg-brand-gold selection:text-brand-forest text-brand-cream font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/masters" element={<Masters />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>

        <footer className="py-12 border-t border-brand-gold/10 text-center">
           <div className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-gold/30">
              © 2026 RAISE WELLNESS COLLECTIVE • ВСЕ ПРАВА ЗАЩИЩЕНЫ
           </div>
        </footer>
      </div>
    </Router>
  );
}
