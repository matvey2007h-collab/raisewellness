import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [location, isMenuOpen]);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'О нас', path: '/about' },
    { name: 'Услуги', path: '/services' },
    { name: 'Мастера', path: '/masters' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled 
      ? 'translate-y-0 opacity-100 bg-brand-forest/95 backdrop-blur-md py-3 md:py-4 shadow-xl' 
      : '-translate-y-full opacity-0 pointer-events-none py-6 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center text-brand-cream">
        <Link to="/" className="font-serif text-2xl md:text-3xl tracking-tighter text-brand-gold uppercase">
          Raise
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 lg:gap-12 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-colors ${location.pathname === link.path ? 'text-brand-gold font-black' : 'text-brand-cream/60 hover:text-brand-gold'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className="px-6 py-2 border border-brand-gold/40 text-[10px] tracking-[0.2em] uppercase font-bold text-brand-gold hover:bg-brand-gold hover:text-brand-forest transition-all">
            Записаться
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-brand-gold p-2 -mr-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-screen bg-brand-forest z-40 flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full text-center"
                >
                  <Link 
                    to={link.path}
                    className={`text-3xl font-serif uppercase tracking-[0.2em] block py-4 ${location.pathname === link.path ? 'text-brand-gold italic' : 'text-brand-cream'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full mt-8"
              >
                <Link to="/booking" className="block w-full text-center py-5 bg-brand-gold text-brand-forest text-sm font-bold uppercase tracking-[0.3em]">
                  Записаться в салон
                </Link>
              </motion.div>
            </div>
            
            <div className="absolute bottom-12 text-[9px] tracking-[0.5em] uppercase font-bold text-brand-gold opacity-50">
               Establishment 2018 • Moscow
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
