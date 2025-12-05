// ri7hla-waghaya-starter/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import CreateTrip from './pages/CreateTrip.jsx';

const Nav = () => (
  <nav style={{display:'flex',gap:'12px',padding:'12px',borderBottom:'1px solid #ddd'}}>
    <Link to="/">الرئيسية</Link>
    <Link to="/catalog">الرحلات</Link>
    <Link to="/create">إنشاء رحلة</Link>
  </nav>
);

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '24px', fontFamily: 'system-ui' }}>
        <h1>منصة رحلة وغاية</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/create" element={<CreateTrip />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


