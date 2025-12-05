export default function AdminDashboard() {
  const created = JSON.parse(localStorage.getItem('createdTrips') || '[]');

  return (
    <div style={{padding:'16px'}}>
      <h2>لوحة الإدارة (رحلات منشأة محليًا)</h2>
      {created.length === 0 ? (
        <p>لا توجد رحلات محفوظة محليًا بعد.</p>
      ) : (
        <ul style={{listStyle:'none', padding:0, display:'grid', gap:12}}>
          {created.map(t => (
            <li key={t.id} style={{border:'1px solid #ddd', borderRadius:8, padding:12}}>
              <strong>{t.title}</strong>
              <div>التاريخ: {t.date}</div>
              <div>مدرسة: {t.schoolId}</div>
              <div>حافلة: {t.busId}</div>
              <div>سائق: {t.driverId}</div>
              <div>طلاب: {t.students}</div>
            </li>
          ))}
        </ul>
      )}
      <small style={{color:'#666'}}>تنبيه: بيانات تجريبية تُحفظ في المتصفح فقط.</small>
    </div>
  );
}
