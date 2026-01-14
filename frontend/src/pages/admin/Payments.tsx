import React from 'react';
import { useTranslation } from 'react-i18next';

const mockPayments = [
  { id: 'P-1001', user: 'Alice Smith', amount: 450, status: 'paid', date: '2025-07-01' },
  { id: 'P-1002', user: 'Bob Müller', amount: 250, status: 'pending', date: '2025-07-03' },
  { id: 'P-1003', user: 'Claire Dupont', amount: 300, status: 'failed', date: '2025-07-05' }
];

export default function Payments() {
  const { t } = useTranslation();
  return (
    <section className="bg-white rounded shadow p-6">
      <h1 className="text-2xl font-bold text-maroon-800 mb-6">{t('admin.payments') || 'Payments'}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b">
            <tr className="text-gray-600 text-xs uppercase">
              <th className="p-3">{t('admin.payment_id') || 'Payment ID'}</th>
              <th className="p-3">{t('admin.user') || 'User'}</th>
              <th className="p-3">{t('admin.amount') || 'Amount'}</th>
              <th className="p-3">{t('admin.status') || 'Status'}</th>
              <th className="p-3">{t('admin.date') || 'Date'}</th>
            </tr>
          </thead>
          <tbody>
            {mockPayments.map(p => (
              <tr key={p.id} className="border-b odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.user}</td>
                <td className="p-3">${p.amount}</td>
                <td className="p-3">{p.status}</td>
                <td className="p-3">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
