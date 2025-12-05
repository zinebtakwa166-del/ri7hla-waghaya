// ri7hla-waghaya-starter/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import CreateTrip from './pages/CreateTrip.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx'; // لوحة الإدارة

const Nav = () => (
  <nav style={{display:'flex',gap:'12px',padding:'12px',borderBottom:'1px solid #ddd'}}>
    <Link to="/">الرئيسية</Link>
    <Link to="/catalog">الرحلات</Link>
    <Link to="/create">إنشاء رحلة</Link>
    <Link to="/admin">الإدارة</Link> {/* رابط جديد */}
  </nav>
);

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '24px', fontFamily: 'system-ui' }}>
        <h1




