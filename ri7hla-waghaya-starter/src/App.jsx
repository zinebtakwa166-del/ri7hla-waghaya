import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import CreateTrip from './pages/CreateTrip.jsx'
import ParentConsent from './pages/ParentConsent.jsx'
import TrackBus from './pages/TrackBus.jsx'
import Booking from './pages/Booking.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App(){
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">الرئيسية</Link>
        <Link to="/trips">الرحلات</Link>
        <Link to="/create">إنشاء رحلة</Link>
        <Link to="/consent">موافقات أولياء الأمور</Link>
        <Link to="/track/t1">تتبّع الحافلة</Link>
        <Link to="/booking">الحجز والدفع</Link>
        <Link to="/admin">لوحة الإدارة</Link>
        <Link to="/privacy">الخصوصية</Link>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/trips" element={<Catalog/>} />
          <Route path="/create" element={<CreateTrip/>} />
          <Route path="/consent" element={<ParentConsent/>} />
          <Route path="/track/:id" element={<TrackBus/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
    </div>
  )
}