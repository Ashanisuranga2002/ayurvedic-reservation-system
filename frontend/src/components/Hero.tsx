import React from 'react';
import { useTranslation } from 'react-i18next';
export function Hero() {
  const { t } = useTranslation();
  return <section id="home" className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/Screenshot_18-11-2025_18464_www.adhityaayurveda.com.jpg" alt="Ayurveda Health Centre" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4">
          <div className="mb-4">
            <div className="inline-block w-12 h-0.5 bg-saffron-500"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 tracking-wide">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-cream font-light tracking-widest">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cream/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>;
}