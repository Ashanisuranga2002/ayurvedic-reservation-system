import React from 'react';
import { MenuIcon, SearchIcon, PhoneIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export function Navigation() {
  const { t, i18n } = useTranslation();
  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem('i18nextLng', lng);
    } catch (e) {}
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-maroon-800/95 backdrop-blur-sm border-b border-maroon-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="w-12 h-12 bg-saffron-500 rounded-md flex items-center justify-center hover:bg-saffron-600 transition-colors">
                <span className="text-white font-serif font-bold text-xl">
                  A
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-cream hover:text-saffron-400 transition-colors text-sm font-medium tracking-wide">
              {t('nav.home')}
            </Link>
            <a href="/#about" className="text-cream hover:text-saffron-400 transition-colors text-sm font-medium tracking-wide">
              {t('nav.about')}
            </a>
            <Link to="/doctors" className="text-cream hover:text-saffron-400 transition-colors text-sm font-medium tracking-wide">
              {t('nav.doctors')}
            </Link>
            <a href="/#treatments" className="text-cream hover:text-saffron-400 transition-colors text-sm font-medium tracking-wide">
              {t('nav.treatments')}
            </a>
            <a href="/#accommodation" className="text-cream hover:text-saffron-400 transition-colors text-sm font-medium tracking-wide">
              {t('nav.accommodation')}
            </a>
            <Link to="/contact" className="text-cream hover:text-saffron-400 transition-colors text-sm font-medium tracking-wide">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button className="text-cream hover:text-saffron-400 transition-colors">
              <SearchIcon className="w-5 h-5" />
            </button>
            <Link to="/booking" className="hidden md:flex items-center space-x-2 bg-saffron-600 hover:bg-saffron-700 text-white px-4 py-2 rounded-md transition-colors">
              <PhoneIcon className="w-4 h-4" />
              <span className="text-sm font-medium">{t('nav.book_now')}</span>
            </Link>
            <select aria-label="Language" defaultValue={i18n.language || 'en'} onChange={e => changeLang(e.target.value)} className="bg-transparent text-cream border border-transparent focus:border-cream px-2 py-1 rounded">
              <option value="en">🇬🇧 English</option>
              <option value="de">🇩🇪 Deutsch</option>
              <option value="fr">🇫🇷 Français</option>
            </select>
            <button className="md:hidden text-cream">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>;
}