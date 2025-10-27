'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navLinks = [
    { id: 'hero', label: 'דף הבית' },
    { id: 'properties', label: 'נכסים' },
    { id: 'about', label: 'אודות' },
    { id: 'contact', label: 'צור קשר' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id="navbar"
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#858585]/80 backdrop-blur-md shadow-lg'
          : 'bg-[#858585]/95 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="ניווט ראשי"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand - Right Side */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              onKeyDown={(e) => handleKeyDown(e, 'hero')}
              className="text-white text-xl sm:text-2xl font-bold hover:text-[#ffab01] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ffab01] focus:ring-offset-2 focus:ring-offset-[#858585] rounded-md px-2 py-1"
              aria-label="חזרה לדף הבית"
            >
              ניצן ירושלמי תיווך וייעוץ נדל״ן
            </button>
          </div>

          {/* Desktop Navigation - Left Side */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-reverse space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  onKeyDown={(e) => handleKeyDown(e, link.id)}
                  className={`relative px-4 py-2 text-base font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ffab01] focus:ring-offset-2 focus:ring-offset-[#858585] ${
                    activeSection === link.id
                      ? 'text-[#ffab01]'
                      : 'text-white hover:text-[#ffab01]'
                  }`}
                  aria-label={`נווט ל${link.label}`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 right-0 left-0 h-0.5 bg-[#ffab01]"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#ffab01] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ffab01] transition-colors duration-300"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-20 right-0 w-64 h-[calc(100vh-5rem)] bg-[#858585]/95 backdrop-blur-lg shadow-2xl border-l border-white/20"
            dir="rtl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => scrollToSection(link.id)}
                  onKeyDown={(e) => handleKeyDown(e, link.id)}
                  className={`w-full text-right px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ffab01] focus:ring-offset-2 focus:ring-offset-[#858585] ${
                    activeSection === link.id
                      ? 'bg-[#ffab01] text-[#858585] shadow-lg'
                      : 'text-white hover:bg-white/10 hover:text-[#ffab01]'
                  }`}
                  aria-label={`נווט ל${link.label}`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;