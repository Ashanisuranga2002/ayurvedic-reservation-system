import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const initialRooms = [
  { id: 1, type: 'Premier', available: true },
  { id: 2, type: 'Deluxe', available: false },
  { id: 3, type: 'Standard', available: true }
];

export default function Rooms() {
  const { t } = useTranslation();
  const [rooms, setRooms] = useState(initialRooms);

  const toggle = (id: number) => {
    setRooms(r => r.map(room => room.id === id ? { ...room, available: !room.available } : room));
  };

  return (
    <section className="bg-white rounded shadow p-6">
      <h1 className="text-2xl font-bold text-maroon-800 mb-6">{t('admin.rooms') || 'Rooms'}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {rooms.map(r => (
          <div key={r.id} className="bg-gray-50 rounded p-4">
            <div className="text-lg font-semibold">{r.type}</div>
            <div className="text-sm text-gray-500 mb-3">{r.available ? (t('admin.available') || 'Available') : (t('admin.unavailable') || 'Occupied')}</div>
            <button onClick={() => toggle(r.id)} className="px-3 py-1 bg-saffron-600 text-white rounded">{t('admin.toggle') || 'Toggle'}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
