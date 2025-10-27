'use client';
  
import React from 'react';

/**
 * Contact Component
 * (Fallback component due to generation failure)
 */
export default function Contact() {
  return (
    <div className="w-full py-12 px-4 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{color: '#858585'}}>
          ניצן ירושלמי ייעוץ נדל״ן 
        </h2>
        <p className="text-lg mb-8 text-center">
          אתר נדל”ן שמציג נכסים למכירה ולהשכרה בצורה נוחה, עם תמונות, מחירים ופרטים ברורים לכל נכס
        </p>
        <div className="text-center">
          <button 
            className="px-6 py-3 rounded-md text-white font-medium"
            style={{backgroundColor: '#ffab01'}}
          >
            צרו קשר
          </button>
        </div>
      </div>
    </div>
  );
}