import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export function Footer() {
  const { t } = useTranslation();
  return <footer id="contact" className="bg-navy text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-saffron-400">
              {t('footer.contact_details')}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-2">{t('footer.address')}</h4>
                <div className="flex items-start space-x-2 text-sm text-gray-300">
                  <MapPinIcon className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p>
                    123A,
                    <br />
                    Habarana-Mihintale Road,
                    <br />
                    Anuradhapura,
                    <br />
                    Sri Lanka
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">{t('footer.general_number')}</h4>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <PhoneIcon className="w-4 h-4" />
                  <a href="tel:+94252053456" className="hover:text-saffron-400 transition-colors">
                    +94 25 205 3456
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">{t('footer.email_address')}</h4>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <MailIcon className="w-4 h-4" />
                  <a href="mailto:reservations@adhitya.lk" className="hover:text-saffron-400 transition-colors">
                    reservations@adhitya.lk
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Adhitya Menu */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-saffron-400">
              {t('footer.menu')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-saffron-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-gray-300 hover:text-saffron-400 transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-saffron-400 transition-colors">
                  {t('nav.doctors')}
                </Link>
              </li>
              <li>
                <a href="/#treatments" className="text-gray-300 hover:text-saffron-400 transition-colors">
                  {t('nav.treatments')}
                </a>
              </li>
              <li>
                <a href="/#accommodation" className="text-gray-300 hover:text-saffron-400 transition-colors">
                  {t('nav.accommodation')}
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-saffron-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo and Certifications */}
          <div>
            <div className="mb-6">
              <Link to="/">
                <div className="w-24 h-24 bg-saffron-500 rounded-md flex items-center justify-center mb-4 hover:bg-saffron-600 transition-colors">
                  <span className="text-white font-serif font-bold text-4xl">
                    A
                  </span>
                </div>
              </Link>
              <p className="text-sm text-gray-300">Adhitya Ayurveda</p>
            </div>
            <div className="bg-green-900/30 rounded-lg p-4">
              <p className="text-xs text-gray-300">{t('footer.certified')}</p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-saffron-400 transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-saffron-400 transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-saffron-400 transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-saffron-400 transition-colors">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>;
}