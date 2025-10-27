'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'דף הבית', href: '#home' },
    { name: 'נכסים', href: '#properties' },
    { name: 'אודות', href: '#about' },
    { name: 'צור קשר', href: '#contact' },
    { name: 'מדיניות פרטיות', href: '#privacy' },
    { name: 'תנאי שימוש', href: '#terms' }
  ];

  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/972501234567', label: 'WhatsApp', color: '#25D366' },
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook', color: '#1877F2' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram', color: '#E4405F' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <footer id="footer" dir="rtl" className="relative bg-gradient-to-br from-[#4a4a4a] via-[#5a5a5a] to-[#3a3a3a] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffab01] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#858585] rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Right Column - Business Info */}
          <motion.div variants={itemVariants} className="text-right">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold mb-3 text-[#ffab01]">
                ניצן ירושלמי תיווך וייעוץ נדל״ן
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                מתמחים בשיווק, מכירה והשכרה של נכסים. מציגים דירות, מגרשים ופרויקטים חדשים בצורה ברורה ואמינה, ומחברים בין קונים, מוכרים ומשקיעים.
              </p>
              <div className="space-y-3">
                <motion.a
                  href="tel:+972501234567"
                  className="flex items-center justify-end gap-3 text-gray-200 hover:text-[#ffab01] transition-colors duration-300"
                  whileHover={{ x: -5 }}
                  aria-label="טלפון"
                >
                  <span className="text-sm">050-123-4567</span>
                  <FaPhone className="text-lg" />
                </motion.a>
                <motion.a
                  href="mailto:info@nitzan-realestate.co.il"
                  className="flex items-center justify-end gap-3 text-gray-200 hover:text-[#ffab01] transition-colors duration-300"
                  whileHover={{ x: -5 }}
                  aria-label="אימייל"
                >
                  <span className="text-sm">info@nitzan-realestate.co.il</span>
                  <FaEnvelope className="text-lg" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Middle Column - Quick Links */}
          <motion.div variants={itemVariants} className="text-right">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl h-full">
              <h3 className="text-xl font-bold mb-4 text-[#ffab01]">קישורים מהירים</h3>
              <nav className="space-y-2" aria-label="קישורים מהירים">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-[#ffab01] transition-colors duration-300 text-sm py-1"
                    whileHover={{ x: -5 }}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Left Column - Social Media & Newsletter */}
          <motion.div variants={itemVariants} className="text-right">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-[#ffab01]">עקבו אחרינו</h3>
              
              {/* Social Media Icons */}
              <div className="flex justify-end gap-3 mb-6" role="list" aria-label="רשתות חברתיות">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    style={{ color: social.color }}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3 text-gray-200">הירשמו לניוזלטר</h4>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="הכניסו את האימייל שלכם"
                    required
                    className="w-full px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-gray-400 text-right text-sm focus:outline-none focus:ring-2 focus:ring-[#ffab01] transition-all duration-300"
                    dir="rtl"
                    aria-label="אימייל לניוזלטר"
                  />
                  <motion.button
                    type="submit"
                    className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#ffab01] to-[#ff9001] text-white font-semibold text-sm hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    הרשמה
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-transparent via-[#ffab01] to-transparent h-0.5 w-32"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="text-center text-sm text-gray-300"
        >
          <div className="backdrop-blur-md bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="mb-2">
              © 2024 ניצן ירושלמי תיווך וייעוץ נדל״ן. כל הזכויות שמורות.
            </p>
            <p className="text-xs text-gray-400">
              עוצב ופותח באהבה למען חוויית משתמש מושלמת
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 w-12 h-12 rounded-full backdrop-blur-md bg-[#ffab01]/90 border border-white/20 flex items-center justify-center shadow-lg hover:bg-[#ffab01] transition-all duration-300"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="חזרה למעלה"
        >
          <FaArrowUp className="text-white text-lg" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;