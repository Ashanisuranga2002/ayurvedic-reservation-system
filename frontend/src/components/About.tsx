import React from 'react';
import { LeafIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export function About() {
  const { t } = useTranslation();
  return <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <LeafIcon className="w-12 h-12 text-maroon-700" />
          </div>
          <p className="text-sm text-gray-600 tracking-widest mb-2">
            {t('about.small')}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon-800">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-saffron-500 mx-auto mt-4"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">{t('about.p1')}</p>
            <p className="text-gray-700 leading-relaxed mb-4">{t('about.p2')}</p>
            <p className="text-gray-700 leading-relaxed">{t('about.p3')}</p>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80" alt="Ayurveda Meditation" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>;
}