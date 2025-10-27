'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHandshake, FaSearch, FaHome, FaHandsHelping, FaKey } from 'react-icons/fa';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const steps: ProcessStep[] = [
    {
      number: 1,
      title: 'פגישת היכרות',
      description: 'נפגשים כדי להכיר את הצרכים והציפיות שלכם. מבינים את התקציב, המיקום המועדף וסוג הנכס המבוקש. יוצרים תוכנית עבודה מותאמת אישית.',
      icon: <FaHandshake className="w-8 h-8" />
    },
    {
      number: 2,
      title: 'חיפוש וסינון',
      description: 'מבצעים חיפוש מקיף במאגר הנכסים שלנו. מסננים את האפשרויות לפי הקריטריונים שהגדרנו. מציגים לכם רק נכסים שמתאימים באמת לצרכים שלכם.',
      icon: <FaSearch className="w-8 h-8" />
    },
    {
      number: 3,
      title: 'סיורים בנכסים',
      description: 'מארגנים סיורים בנכסים שנבחרו. מלווים אתכם בכל שלב ומסבירים על היתרונות והחסרונות. עוזרים לכם לקבל החלטה מושכלת ומבוססת.',
      icon: <FaHome className="w-8 h-8" />
    },
    {
      number: 4,
      title: 'משא ומתן',
      description: 'מנהלים משא ומתן מקצועי מול הצד השני. דואגים לקבל את התנאים הטובים ביותר עבורכם. מלווים בבדיקות משפטיות ומקצועיות של הנכס.',
      icon: <FaHandsHelping className="w-8 h-8" />
    },
    {
      number: 5,
      title: 'סגירת עסקה',
      description: 'מסייעים בכל שלבי הסגירה והחתימה על המסמכים. מתאמים עם עורכי דין, בנקים וכל הגורמים הרלוונטיים. מוודאים שהעסקה מסתיימת בהצלחה ומקבלים את המפתחות.',
      icon: <FaKey className="w-8 h-8" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section
      id="process-section"
      ref={sectionRef}
      dir="rtl"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #ffab01 0%, transparent 70%)'
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #858585 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-right"
            style={{ color: '#858585', fontFamily: 'Georgia, serif' }}
          >
            איך זה עובד?
          </h2>
          <p
            className="text-lg md:text-xl text-right max-w-3xl mx-auto"
            style={{ color: '#666', fontFamily: 'Georgia, serif' }}
          >
            תהליך פשוט ומקצועי שמלווה אותכם מההתחלה ועד לקבלת המפתחות
          </p>
        </motion.div>

        {/* Desktop: Vertical Timeline with Alternating Sides */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="hidden lg:block relative"
        >
          {/* Center Line */}
          <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#ffab01] to-transparent transform translate-x-1/2" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className={`relative flex items-center mb-20 last:mb-0 ${
                  isEven ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${isEven ? 'pr-12' : 'pl-12'}`}>
                  <div
                    className="relative p-8 rounded-2xl border border-white/40 shadow-xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)'
                    }}
                  >
                    <div className={`flex items-start gap-4 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div
                        className="flex-shrink-0 p-4 rounded-xl"
                        style={{
                          background: 'rgba(133, 133, 133, 0.1)',
                          color: '#858585'
                        }}
                      >
                        {step.icon}
                      </div>
                      <div className={isEven ? 'text-right' : 'text-left'}>
                        <h3
                          className="text-2xl font-bold mb-3"
                          style={{ color: '#858585', fontFamily: 'Georgia, serif' }}
                        >
                          {step.title}
                        </h3>
                        <p
                          className="text-base leading-relaxed"
                          style={{ color: '#666', fontFamily: 'Georgia, serif' }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Circle with Number */}
                <div className="absolute right-1/2 transform translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.3 + 0.4, duration: 0.4 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #ffab01 0%, #ff9500 100%)'
                    }}
                  >
                    <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Empty space on the other side */}
                <div className="w-5/12" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile & Tablet: Vertical Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="lg:hidden space-y-8"
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={stepVariants} className="relative">
              <div
                className="p-6 rounded-2xl border border-white/40 shadow-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              >
                <div className="flex items-start gap-4 text-right">
                  <div className="flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-3"
                      style={{
                        background: 'linear-gradient(135deg, #ffab01 0%, #ff9500 100%)'
                      }}
                    >
                      <span className="text-xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
                        {step.number}
                      </span>
                    </div>
                    <div
                      className="p-3 rounded-xl mx-auto w-fit"
                      style={{
                        background: 'rgba(133, 133, 133, 0.1)',
                        color: '#858585'
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: '#858585', fontFamily: 'Georgia, serif' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#666', fontFamily: 'Georgia, serif' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ delay: index * 0.3 + 0.5, duration: 0.4 }}
                    className="w-1 h-8 origin-top"
                    style={{
                      background: 'linear-gradient(to bottom, #ffab01, #ff9500)'
                    }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div
            className="inline-block p-10 rounded-3xl border border-white/40 shadow-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)'
            }}
          >
            <h3
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: '#858585', fontFamily: 'Georgia, serif' }}
            >
              מוכנים להתחיל?
            </h3>
            <p
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: '#666', fontFamily: 'Georgia, serif' }}
            >
              צרו איתנו קשר עוד היום ונתחיל את המסע למציאת הנכס המושלם עבורכם
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full text-white text-lg font-bold shadow-xl transition-all duration-300 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #ffab01 0%, #ff9500 100%)',
                fontFamily: 'Georgia, serif'
              }}
              aria-label="צור קשר עכשיו"
            >
              צור קשר עכשיו
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;