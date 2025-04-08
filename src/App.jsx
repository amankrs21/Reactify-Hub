import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Bmi from './pages/bmi/Bmi';
import Home from './pages/home/Home';
import Todo from './pages/todo/Todo';
import Navbar from './layout/Navbar';
import Weather from './pages/weather/Weather';
import PasswordVal from './pages/password/PasswordVal';
import Calculator from './pages/calculator/Calculator';


// App Component
export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Navigate to='/home' />} />

        <Route path='/bmi' element={<Bmi />} />
        <Route path="/home" element={<Home />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/weather' element={<Weather />} />
        <Route path="/password" element={<PasswordVal />} />
        <Route path='/calculator' element={<Calculator />} />
      </Routes>

    </BrowserRouter>
  );
}
