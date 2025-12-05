
import React, { useEffect, useState } from 'react';

export default function Catalog() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/seed.json')
      .then(r => r.json())
      .then(json => setData(json))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{padding:'16px'}}>جاري التحميل…</p>;
  if (!data) return <p style={{padding:'16px'}}>لا توجد بيانات.</p>;

  const trips = data.trips || [];
  const schoolsById = Object.fromEntries((data.schools||[]).map(s => [s.id, s.name]));
  const busesById   = Object.fromEntries((data.fleet||[]).map(b => [b.id, b.plate]));
  const driversById = Object.fromEntries((data.drivers||[]).map(d => [d.id, d.name]));

  return (
    <div style={{padding:'16px'}}>
      <h2>كتالوج الرحلات</h2>
      {trips.length === 0 ? (
        <p>لا توجد رحلات بعد.</p>
      ) : (
        <ul style={{listStyle:'none', padding:0, display:'grid', gap:'12px'}}>
          {trips.map(t => (
            <li key={t.id} style={{border:'1px solid #ddd', borderRadius:8, padding:12}}>
              <div><strong>{t.title}</strong></div>
              <div>التاريخ: {t.date}</div>
              <div>المدرسة: {schoolsById[t.schoolId] || t.schoolId}</div>
              <div>الحافلة: {busesById[t.busId] || t.busId}</div>
              <div>السائق: {driversById[t.driverId] || t.driverId}</div>
              <div>عدد التلاميذ: {t.students}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
