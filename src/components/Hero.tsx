'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaKey, FaBuilding, FaHome, FaChevronDown } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const floatingIcons = [
    { Icon: FaKey, delay: 0, duration: 3, x: '10%', y: '20%' },
    { Icon: FaBuilding, delay: 0.5, duration: 4, x: '80%', y: '30%' },
    { Icon: FaHome, delay: 1, duration: 3.5, x: '15%', y: '70%' },
    { Icon: FaKey, delay: 1.5, duration: 3.2, x: '85%', y: '65%' },
    { Icon: FaBuilding, delay: 0.8, duration: 3.8, x: '50%', y: '15%' },
  ];

  return (
    <section
      id="hero-section"
      dir="rtl"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: mounted ? y : 0 }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80)',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
      </motion.div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-[#ffab01]/20 pointer-events-none"
          style={{
            left: item.x,
            top: item.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          <item.Icon size={48} />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        style={{ opacity: mounted ? opacity : 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl w-full text-right">
          {/* Glassmorphism Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="backdrop-blur-md bg-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/20 shadow-2xl"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              ניצן ירושלמי ייעוץ נדל״ן
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-4xl mr-auto"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              אתר נדל"ן שמציג נכסים למכירה ולהשכרה בצורה נוחה, עם תמונות, מחירים
              ופרטים ברורים לכל נכס
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-end"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 171, 1, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ffab01] hover:bg-[#ff9500] text-white font-bold text-xl sm:text-2xl px-10 sm:px-14 py-4 sm:py-5 rounded-full shadow-2xl transition-all duration-300 border-2 border-white/30"
                style={{ fontFamily: 'Georgia, serif' }}
                aria-label="צרו קשר"
              >
                צרו קשר
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 flex justify-center gap-8 text-white/80 text-sm sm:text-base"
          >
            <div className="flex items-center gap-2">
              <FaBuilding className="text-[#ffab01]" size={20} />
              <span>מומחים בתחום</span>
            </div>
            <div className="flex items-center gap-2">
              <FaKey className="text-[#ffab01]" size={20} />
              <span>שירות אמין</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHome className="text-[#ffab01]" size={20} />
              <span>נכסים איכוtiים</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/80 text-sm font-medium">גלול למטה</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FaChevronDown className="text-[#ffab01]" size={24} />
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffab01]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#858585]/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default HeroSection;