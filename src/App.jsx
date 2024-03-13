import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import PasswordVal from './pages/password/PasswordVal';
import Navbar from './pages/navbar/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ marginTop: 70 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/password" element={<PasswordVal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
