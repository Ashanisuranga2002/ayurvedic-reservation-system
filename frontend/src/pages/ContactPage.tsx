import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, SendIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert(t('contact.thank_you_alert'));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
    const { t } = useTranslation();
    return <div className="w-full min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 w-full mt-16">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80" alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-900/70 via-maroon-800/60 to-maroon-900/70"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              {t('contact.hero_title')}
            </h1>
            <p className="text-xl text-cream font-light">{t('contact.hero_paragraph')}</p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80" alt="Our Location" className="rounded-lg shadow-xl" />
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-800 mb-6">
                {t('contact.visit_title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">{t('about.p1')}</p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-saffron-100 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-saffron-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-maroon-800 mb-1">{t('contact.address_title')}</h3>
                    <p className="text-gray-600">
                      123A, Habarana-Mihintale Road
                      <br />
                      Anuradhapura, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-saffron-100 rounded-lg flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-saffron-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-maroon-800 mb-1">{t('contact.phone_title')}</h3>
                    <p className="text-gray-600">+94 25 205 3456</p>
                    <p className="text-gray-600">+94 77 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-saffron-100 rounded-lg flex items-center justify-center">
                    <MailIcon className="w-6 h-6 text-saffron-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-maroon-800 mb-1">{t('contact.email_title')}</h3>
                    <p className="text-gray-600">reservations@adhitya.lk</p>
                    <p className="text-gray-600">info@adhitya.lk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-saffron-100 rounded-lg flex items-center justify-center">
                    <ClockIcon className="w-6 h-6 text-saffron-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-maroon-800 mb-1">{t('contact.opening_hours')}</h3>
                    <p className="text-gray-600">Monday - Sunday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600 text-sm">24/7 for registered guests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-800 mb-6">{t('contact.send_message')}</h2>
              <p className="text-gray-700 leading-relaxed mb-8">{t('contact.form.description') || ''}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.name')}</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors" placeholder={t('contact.form.name_placeholder')} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.email')}</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors" placeholder={t('contact.form.email_placeholder')} />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.phone')}</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors" placeholder={t('contact.form.phone_placeholder')} />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.subject')}</label>
                  <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors">
                    <option value="">{t('contact.form.subject_select')}</option>
                    <option value="booking">{t('contact.form.booking')}</option>
                    <option value="treatment">{t('contact.form.treatment')}</option>
                    <option value="general">{t('contact.form.general')}</option>
                    <option value="feedback">{t('contact.form.feedback')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.message')}</label>
                  <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors resize-none" placeholder={t('contact.form.message_placeholder')}></textarea>
                </div>

                <button type="submit" className="w-full bg-saffron-600 hover:bg-saffron-700 text-white font-semibold py-3 px-6 rounded-md transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <SendIcon className="w-5 h-5" />
                  <span>{t('contact.send_message')}</span>
                </button>
              </form>
            </div>

            {/* Map/Image */}
            <div className="relative h-full min-h-[500px]">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" alt="Ayurveda Centre" className="rounded-lg shadow-xl w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}