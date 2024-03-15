import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import PasswordVal from './pages/password/PasswordVal';
import Navbar from './pages/navbar/Navbar';
import Weather from './pages/weather/Weather';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password" element={<PasswordVal />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}
