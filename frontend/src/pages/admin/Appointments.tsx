import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const initialAppointments = [
  { id: 1, patient: 'Alice Smith', doctor: 'Dr. Kumar', date: '2025-07-10 10:00', status: 'confirmed' },
  { id: 2, patient: 'Bob Müller', doctor: 'Dr. Anjali', date: '2025-07-11 14:00', status: 'pending' },
  { id: 3, patient: 'Claire Dupont', doctor: 'Dr. Kumar', date: '2025-07-12 09:00', status: 'cancelled' }
];

export default function Appointments() {
  const { t } = useTranslation();
  const [appointments] = useState(initialAppointments);

  return (
    <section className="bg-white rounded shadow p-6">
      <h1 className="text-2xl font-bold text-maroon-800 mb-6">{t('admin.appointments') || 'Appointments'}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b">
            <tr className="text-gray-600 text-xs uppercase">
              <th className="p-3">ID</th>
              <th className="p-3">Patient</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(a => (
              <tr key={a.id} className="border-b odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                <td className="p-3">{a.id}</td>
                <td className="p-3">{a.patient}</td>
                <td className="p-3">{a.doctor}</td>
                <td className="p-3">{a.date}</td>
                <td className="p-3">{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
