import React from 'react';
import { useTranslation } from 'react-i18next';

const mockUsers = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', joined: '2025-01-12' },
  { id: 2, name: 'Bob Müller', email: 'bob@example.de', joined: '2025-03-04' },
  { id: 3, name: 'Claire Dupont', email: 'claire@example.fr', joined: '2025-05-21' }
];

export default function Users() {
  const { t } = useTranslation();
  return (
    <section className="bg-white rounded shadow p-6">
      <h1 className="text-2xl font-bold text-maroon-800 mb-6">{t('admin.users') || 'Users'}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b">
            <tr className="text-gray-600 text-xs uppercase">
              <th className="p-3">ID</th>
              <th className="p-3">{t('admin.user_name') || 'Name'}</th>
              <th className="p-3">{t('admin.email') || 'Email'}</th>
              <th className="p-3">{t('admin.joined') || 'Joined'}</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map(u => (
              <tr key={u.id} className="border-b odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                <td className="p-3">{u.id}</td>
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
