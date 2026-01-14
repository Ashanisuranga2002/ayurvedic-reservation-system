import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { t } = useTranslation();

  // mock metrics (replace with API calls later)
  const metrics = {
    users: 128,
    bookings: 42,
    payments_pending: 3,
    rooms_available: 7
  };

    return (
      <section className="bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold text-maroon-800 mb-6">{t('admin.overview') || 'Overview'}</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded"> 
            <div className="text-sm text-gray-500">{t('admin.total_users') || 'Total users'}</div>
            <div className="text-2xl font-bold">{metrics.users}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded"> 
            <div className="text-sm text-gray-500">{t('admin.total_bookings') || 'Bookings'}</div>
            <div className="text-2xl font-bold">{metrics.bookings}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded"> 
            <div className="text-sm text-gray-500">{t('admin.pending_payments') || 'Pending payments'}</div>
            <div className="text-2xl font-bold">{metrics.payments_pending}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded"> 
            <div className="text-sm text-gray-500">{t('admin.rooms_available') || 'Rooms available'}</div>
            <div className="text-2xl font-bold">{metrics.rooms_available}</div>
          </div>
        </div>
      </section>
    );
}
