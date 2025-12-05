import React, { useEffect, useState } from 'react';

export default function CreateTrip() {
  const [data, setData] = useState({ schools:[], drivers:[], fleet:[] });
  const [form, setForm] = useState({
    title: '',
    date: '',
    schoolId: '',
    busId: '',
    driverId: '',
    students: 0,
    insurance: true
  });
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/seed.json').then(r=>r.json()).then(json=>{
      setData(json);
      // قيم افتراضية لسهّل الإدخال
      setForm(f => ({
        ...f,
        schoolId: json.schools?.[0]?.id || '',
        busId: json.fleet?.[0]?.id || '',
        driverId: json.drivers?.[0]?.id || ''
      }));
    });
  }, []);

  function validate() {
    const e = {};
    if (!form.title.trim()) e.title = 'العنوان مطلوب';
    if (!form.date) e.date = 'التاريخ مطلوب';
    if (!form.schoolId) e.schoolId = 'اختر مدرسة';
    if (!form.busId) e.busId = 'اختر حافلة';
    if (!form.driverId) e.driverId = 'اختر سائق';
    if (!form.students || form.students < 1) e.students = 'أدخل عدد التلاميذ';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : (name === 'students' ? Number(value) : value) }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    // تخزين وهمي محليًا فقط (لا يوجد باك-إند)
    const existing = JSON.parse(localStorage.getItem('createdTrips') || '[]');
    existing.push({ ...form, id: 't-' + Date.now() });
    localStorage.setItem('createdTrips', JSON.stringify(existing));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div style={{padding:'16px'}}>
      <h2>إنشاء رحلة مدرسية</h2>
      <form onSubmit={onSubmit} style={{display:'grid', gap:12, maxWidth:520}}>
        <label>عنوان الرحلة
          <input name="title" value={form.title} onChange={onChange} required />
          {errors.title && <small style={{color:'red'}}>{errors.title}</small>}
        </label>

        <label>التاريخ
          <input type="date" name="date" value={form.date} onChange={onChange} required />
          {errors.date && <small style={{color:'red'}}>{errors.date}</small>}
        </label>

        <label>المدرسة
          <select name="schoolId" value={form.schoolId} onChange={onChange} required>
            {data.schools.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          {errors.schoolId && <small style={{color:'red'}}>{errors.schoolId}</small>}
        </label>

        <label>الحافلة
          <select name="busId" value={form.busId} onChange={onChange} required>
            {data.fleet.map(b => <option key={b.id} value={b.id}>{b.plate} — {b.seats} مقعد</option>)}
          </select>
          {errors.busId && <small style={{color:'red'}}>{errors.busId}</small>}
        </label>

        <label>السائق
          <select name="driverId" value={form.driverId} onChange={onChange} required>
            {data.drivers.map(d => <option key={d.id} value={d.id}>{d.name} — رخصة {d.license}</option>)}
          </select>
          {errors.driverId && <small style={{color:'red'}}>{errors.driverId}</small>}
        </label>

        <label>عدد التلاميذ
          <input type="number" name="students" min="1" value={form.students} onChange={onChange} required />
          {errors.students && <small style={{color:'red'}}>{errors.students}</small>}
        </label>

        <label style={{display:'flex',alignItems:'center',gap:8}}>
          <input type="checkbox" name="insurance" checked={form.insurance} onChange={onChange} />
          تأمين الرحلة مفعل
        </label>

        <button type="submit">حفظ الرحلة (وهميًا)</button>
        {saved && <div style={{color:'green'}}>تم الحفظ محليًا (LocalStorage) — لأغراض العرض فقط.</div>}
        <small style={{color:'#555'}}>تنبيه: هذا نموذج تجريبي — لا توجد بيانات حقيقية، ولا يتم إرسال معلومات طلاب.</small>
      </form>
    </div>
  );
}
