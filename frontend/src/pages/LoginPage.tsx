import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';

export function LoginPage() {
  const { t } = useTranslation();
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation() as any;
  const from = location.state?.from?.pathname || '/admin';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    const ok = await auth.login(username, password);
    if (ok) {
      navigate(from, { replace: true });
    } else {
      setError('Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-maroon-800">{t('auth.login_title') || 'Login'}</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input value={username} onChange={e => setUsername(e.target.value)} className="mt-1 mb-4 block w-full border-gray-200 rounded-md p-2" />

          <label className="block text-sm font-medium text-gray-700">{t('auth.password') || 'Password'}</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 mb-4 block w-full border-gray-200 rounded-md p-2" placeholder={t('auth.password_placeholder') || '••••••••'} />

          {error && <div className="text-red-600 mb-2">{error}</div>}

          <button type="button" onClick={submit} className="w-full bg-saffron-600 hover:bg-saffron-700 text-white py-2 rounded mb-3">{t('auth.login_button') || 'Login'}</button>
        </div>

        <p className="text-sm text-center">
          {t('auth.no_account') || "Don't have an account?"} <Link to="/register" className="text-saffron-600">{t('auth.register') || 'Register'}</Link>
        </p>
        <p className="text-xs text-gray-500 mt-3">Demo admin credential: <strong>admin</strong> / <strong>password</strong></p>
      </div>
    </div>
  );
}
