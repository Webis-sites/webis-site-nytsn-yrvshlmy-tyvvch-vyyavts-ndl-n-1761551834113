'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Home, Key, TrendingUp } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services = [
    {
      id: 1,
      title: 'מכירת נכסים',
      description: 'שירות מכירה מקצועי ומלא עבור דירות, בתים ומגרשים. אנו מלווים אתכם בכל שלב - מהערכת שווי ועד לחתימה על החוזה, תוך מקסום הערך של הנכס שלכם.',
      icon: Home,
      gradient: 'from-[#858585]/20 to-[#ffab01]/10'
    },
    {
      id: 2,
      title: 'השכרת נכסים',
      description: 'ניהול והשכרת נכסים באופן מקצועי ואמין. אנו דואגים למציאת שוכרים איכוtiים, ניהול חוזים ותחזוקה שוטפת, כך שתוכלו ליהנות מהכנסה פסיבית ללא דאגות.',
      icon: Key,
      gradient: 'from-[#ffab01]/20 to-[#858585]/10'
    },
    {
      id: 3,
      title: 'ייעוץ והשקעות',
      description: 'ייעוץ אסטרטגי להשקעות נדל"ן חכמות. אנו מספקים ניתוח שוק מעמיק, זיהוי הזדמנויות והכוונה מקצועית למשקיעים המעוניינים לבנות תיק נכסים רווחי.',
      icon: TrendingUp,
      gradient: 'from-[#858585]/15 to-[#ffab01]/15'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section
      id="services-section"
      dir="rtl"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50/30"
      ref={sectionRef}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ffab01]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#858585]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative Lines */}
      <div className="absolute top-20 right-10 w-32 h-1 bg-gradient-to-l from-[#ffab01]/40 to-transparent" />
      <div className="absolute bottom-20 left-10 w-32 h-1 bg-gradient-to-r from-[#858585]/40 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-right text-[#858585] mb-4 tracking-tight">
            השירותים שלנו
          </h2>
          <div className="flex justify-end items-center gap-3 mb-6">
            <div className="h-1 w-20 bg-gradient-to-l from-[#ffab01] to-[#858585] rounded-full" />
            <div className="h-2 w-2 bg-[#ffab01] rounded-full" />
          </div>
          <p className="text-lg text-right text-gray-600 max-w-2xl mr-auto">
            פתרונות נדל"ן מקיפים המותאמים לצרכים שלכם
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="רשימת שירותים"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="group relative"
                role="listitem"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full bg-white/60 backdrop-blur-lg rounded-2xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Card Content */}
                  <div className="relative z-10 p-8 text-right">
                    {/* Icon Container */}
                    <div className="flex justify-end mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ffab01] to-[#858585] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                        <div className="relative bg-gradient-to-br from-[#858585] to-[#ffab01] p-4 rounded-2xl shadow-lg">
                          <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                        </div>
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl font-bold text-[#858585] mb-4 group-hover:text-[#ffab01] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-700 leading-relaxed text-base">
                      {service.description}
                    </p>

                    {/* Decorative Bottom Border */}
                    <div className="absolute bottom-0 right-0 w-0 h-1 bg-gradient-to-l from-[#ffab01] to-[#858585] group-hover:w-full transition-all duration-500 rounded-full" />
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#ffab01]/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Floating Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#858585]/5 to-[#ffab01]/5 rounded-2xl -z-10 transform translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center gap-2 mt-16"
        >
          <div className="h-1 w-12 bg-[#858585]/30 rounded-full" />
          <div className="h-2 w-2 bg-[#ffab01] rounded-full animate-pulse" />
          <div className="h-1 w-12 bg-[#858585]/30 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;