import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function RegisterPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-maroon-800">{t('auth.register_title') || 'Create an account'}</h2>
        <form>
          <label className="block text-sm font-medium text-gray-700">{t('auth.first_name') || 'First name'}</label>
          <input className="mt-1 mb-4 block w-full border-gray-200 rounded-md p-2" />

          <label className="block text-sm font-medium text-gray-700">{t('auth.last_name') || 'Last name'}</label>
          <input className="mt-1 mb-4 block w-full border-gray-200 rounded-md p-2" />

          <label className="block text-sm font-medium text-gray-700">{t('auth.email') || 'Email'}</label>
          <input type="email" className="mt-1 mb-4 block w-full border-gray-200 rounded-md p-2" placeholder={t('auth.email_placeholder') || 'you@example.com'} />

          <label className="block text-sm font-medium text-gray-700">{t('auth.password') || 'Password'}</label>
          <input type="password" className="mt-1 mb-4 block w-full border-gray-200 rounded-md p-2" placeholder={t('auth.password_placeholder') || '••••••••'} />

          <button type="button" className="w-full bg-saffron-600 hover:bg-saffron-700 text-white py-2 rounded mb-3">{t('auth.create_account') || 'Create account'}</button>
        </form>

        <p className="text-sm text-center">
          {t('auth.have_account') || 'Already have an account?'} <Link to="/login" className="text-saffron-600">{t('auth.login') || 'Login'}</Link>
        </p>
      </div>
    </div>
  );
}
