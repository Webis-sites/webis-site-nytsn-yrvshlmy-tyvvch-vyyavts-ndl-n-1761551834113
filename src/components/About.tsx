'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaAward, FaHandshake, FaChartLine } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const stats = [
    {
      icon: <FaChartLine className="w-6 h-6" />,
      number: '500+',
      label: 'נכסים שנמכרו',
    },
    {
      icon: <FaAward className="w-6 h-6" />,
      number: '15+',
      label: 'שנות ניסיון',
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      number: '98%',
      label: 'שביעות רצון לקוחות',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="about-nitzan-yerushalmi"
      ref={sectionRef}
      dir="rtl"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 50%, #f0f0f0 100%)',
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #ffab01 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #858585 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-right mb-4"
            style={{ color: '#858585' }}
          >
            אודות ניצן ירושלמי
          </h2>
          <div
            className="w-24 h-1 mr-auto"
            style={{ backgroundColor: '#ffab01' }}
          />
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Right Side - Image */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop"
                alt="ניצן ירושלמי - מומחה נדל״ן"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          {/* Left Side - Content */}
          <motion.div
            variants={itemVariants}
            className="order-2 lg:order-1 text-right"
          >
            <div
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#858585' }}
              >
                מומחה נדל״ן עם ניסיון מוכח
              </h3>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  שלום, אני ניצן ירושלמי, יועץ ומתווך נדל״ן עם למעלה מ-15 שנות
                  ניסיון בשוק הנדל״ן הישראלי. במהלך השנים ליוויתי מאות משפחות
                  ומשקיעים במציאת הנכס המושלם עבורם, תוך מתן שירות אישי, מקצועי
                  ואמין.
                </p>

                <p className="text-lg">
                  התמחותי כוללת שיווק נכסים, מכירה והשכרה של דירות, בתים ומגרשים
                  בכל רחבי הארץ. אני מאמין בגישה שקופה ואמינה, שבה הלקוח תמיד
                  במרכז. כל עסקה מטופלת באופן אישי ומקצועי, תוך הקפדה על כל
                  הפרטים הקטנים שעושים את ההבדל.
                </p>

                <p className="text-lg">
                  הערך המוסף שלי טמון ביכולת להבין את הצרכים האמיתיים של הלקוח,
                  לחבר בין קונים למוכרים בצורה יעילה, ולספק ייעוץ מקצועי המבוסס
                  על ידע שוק מעמיק. אני מחזיק ברישיונות והסמכות מקצועיות, ומתעדכן
                  באופן שוטף בכל השינויים והמגמות בשוק הנדל״ן.
                </p>

                <p className="text-lg font-semibold" style={{ color: '#858585' }}>
                  המטרה שלי היא לא רק לסגור עסקה, אלא ליצור חוויה חיובית ומשמעותית
                  שתלווה אתכם לאורך זמן.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg font-semibold text-white shadow-lg transition-all duration-300"
                  style={{
                    backgroundColor: '#ffab01',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  קבע פגישה
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(133, 133, 133, 0.1)',
                    border: '1px solid #858585',
                    color: '#858585',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  קרא עוד
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 rounded-2xl text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{
                  backgroundColor: 'rgba(255, 171, 1, 0.2)',
                  color: '#ffab01',
                }}
              >
                {stat.icon}
              </div>
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: '#858585' }}
              >
                {stat.number}
              </div>
              <div className="text-lg font-medium text-gray-700">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 rounded-2xl text-center"
          style={{
            background: 'rgba(255, 171, 1, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 171, 1, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-bold" style={{ color: '#858585' }}>
              מוסמך ומורשה:{' '}
            </span>
            בעל רישיון תיווך מטעם משרד המשפטים, חבר בלשכת מתווכי המקרקעין
            בישראל, ובעל הכשרה מתמדת בתחום הנדל״ן והמשפט. עם ידע מעמיק בשוק
            המקומי והארצי, אני מספק ללקוחותיי יתרון תחרותי אמיתי.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;