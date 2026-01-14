import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export default function AdminLayout() {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <aside className="md:col-span-1 bg-white rounded shadow p-6">
              <h3 className="text-lg font-bold text-maroon-800 mb-4">{t('admin.title') || 'Admin'}</h3>
              <nav className="flex flex-col space-y-2">
                <Link to="/admin" className="text-gray-700 hover:text-maroon-800">{t('admin.overview') || 'Overview'}</Link>
                <Link to="users" className="text-gray-700 hover:text-maroon-800">{t('admin.users') || 'Users'}</Link>
                <Link to="payments" className="text-gray-700 hover:text-maroon-800">{t('admin.payments') || 'Payments'}</Link>
                <Link to="rooms" className="text-gray-700 hover:text-maroon-800">{t('admin.rooms') || 'Rooms'}</Link>
                <Link to="appointments" className="text-gray-700 hover:text-maroon-800">{t('admin.appointments') || 'Appointments'}</Link>
              </nav>

              <div className="mt-6 border-t pt-4">
                <div className="text-sm text-gray-600">{user ? user.name : ''}</div>
                <button onClick={logout} className="mt-2 text-sm text-red-600">Logout</button>
              </div>
            </aside>

            <main className="md:col-span-3">
              <div className="space-y-6">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
