'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Building2, Compass, Eye, Clock } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Award,
      title: 'ניסיון מוכח',
      description: 'שנים של ניסיון מוכח בשוק הנדל"ן הישראלי. אנחנו מכירים את השוק לעומק ויודעים להציע את הפתרונות הטובים ביותר. המומחיות שלנו מבטיחה עסקאות מוצלחות ובטוחות.',
    },
    {
      icon: Users,
      title: 'שירות אישי',
      description: 'כל לקוח מקבל יחס אישי ומותאם אישית לצרכיו. אנחנו מאמינים בקשר אנושי ובהקשבה אמיתית. הצוות שלנו מלווה אתכם בכל שלב ושלב.',
    },
    {
      icon: Building2,
      title: 'מגוון נכסים',
      description: 'תיק נכסים עשיר ומגוון המתאים לכל צורך ותקציב. דירות, מגרשים, פרויקטים חדשים ונכסים להשקעה. אנחנו מוצאים את הנכס המושלם עבורכם.',
    },
    {
      icon: Compass,
      title: 'ליווי מקצועי',
      description: 'ליווי מקצועי ומלא לאורך כל תהליך הרכישה או המכירה. מהשלב הראשון ועד חתימת החוזה ומעבר. אנחנו כאן כדי להבטיח שהכל יעבור בצורה חלקה.',
    },
    {
      icon: Eye,
      title: 'שקיפות מלאה',
      description: 'שקיפות מוחלטת בכל הנוגע למחירים, עמלות ופרטי הנכס. אין הפתעות ואין עלויות נסתרות. אנחנו מאמינים בעבודה כנה וישרה מול הלקוחות.',
    },
    {
      icon: Clock,
      title: 'זמינות גבוהה',
      description: 'זמינים עבורכם בכל עת, עם מענה מהיר ואדיב. אנחנו מבינים שזמן זה כסף ושירות מהיר הוא קריטי. הצוות שלנו תמיד כאן כדי לענות על כל שאלה.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      dir="rtl"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ffab01]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#858585]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative Lines */}
      <div className="absolute top-20 right-10 w-32 h-1 bg-gradient-to-l from-[#ffab01] to-transparent opacity-30" />
      <div className="absolute bottom-20 left-10 w-32 h-1 bg-gradient-to-r from-[#858585] to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#858585] mb-4 text-right">
            למה לבחור בנו?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-right">
            ניצן ירושלמי תיווך וייעוץ נדל"ן - השותף המושלם למציאת הנכס שלכם
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-l from-[#ffab01] to-[#858585] rounded-full" />
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full p-8 rounded-2xl bg-white/40 backdrop-blur-lg border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ffab01]/5 to-[#858585]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="flex justify-end mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ffab01] to-[#ffab01]/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#858585] mb-4 text-right">
                      {feature.title}
                    </h3>

                    {/* Separator */}
                    <div className="w-16 h-1 bg-gradient-to-l from-[#ffab01] to-transparent mb-4 mr-auto" />

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-right">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#858585]/20 rounded-tl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#ffab01]/20 rounded-br-lg" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Badge / Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg border border-white/60 shadow-xl">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-[#ffab01]/20 text-6xl font-serif">"</div>
            
            <blockquote className="relative z-10 text-right">
              <p className="text-lg md:text-xl text-gray-700 italic mb-4 leading-relaxed">
                עבדנו עם ניצן ירושלמי במכירת הדירה שלנו והחוויה הייתה מעולה. השירות המקצועי, הזמינות והשקיפות המלאה גרמו לנו להרגיש בטוחים לאורך כל התהליך. ממליצים בחום!
              </p>
              <footer className="flex items-center justify-end gap-4">
                <div className="text-right">
                  <cite className="not-italic font-bold text-[#858585]">משפחת כהן</cite>
                  <p className="text-sm text-gray-600">לקוחות מרוצים</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#ffab01] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;