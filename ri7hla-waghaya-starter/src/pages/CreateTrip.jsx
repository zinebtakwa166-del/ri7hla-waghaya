import React, { useState } from 'react'
export default function CreateTrip(){
  const [form,setForm]=useState({date:'',route:'',students:0,insurance:true})
  const submit=(e)=>{e.preventDefault(); alert('تم حفظ الرحلة (وهميًا)')}
  return (
    <div className="card">
      <h2>إنشاء رحلة مدرسية</h2>
      <form onSubmit={submit}>
        <label>التاريخ</label><input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/>
        <label>المسار</label><input value={form.route} onChange={e=>setForm({...form,route:e.target.value})}/>
        <label>عدد الطلاب</label><input type="number" value={form.students} onChange={e=>setForm({...form,students:+e.target.value})}/>
        <label><input type="checkbox" checked={form.insurance} onChange={e=>setForm({...form,insurance:e.target.checked})}/> تأمين</label>
        <button type="submit">حفظ</button>
      </form>
    </div>
  )
}