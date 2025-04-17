import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './main.css';
import Bmi from './pages/bmi/Bmi';
import Home from './pages/home/Home';
import Todo from './pages/todo/Todo';
import Navbar from './layout/Navbar';
import NotFound from './layout/NotFound';
import Weather from './pages/weather/Weather';
import ErrorPage from './components/ErrorPage';
import PasswordVal from './pages/password/PasswordVal';
import Calculator from './pages/calculator/Calculator';
import ErrorBoundary from './components/ErrorBoundary';


// App Component
export default function App() {

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <BrowserRouter>

        <Navbar />

        <div className='content__container'>
          <Routes>

            <Route path="/" element={<Navigate to='/home' />} />

            <Route path='/bmi' element={<Bmi />} />
            <Route path="/home" element={<Home />} />
            <Route path='/notes' element={<Todo />} />
            <Route path='/weather' element={<Weather />} />
            <Route path="/password" element={<PasswordVal />} />
            <Route path='/calculator' element={<Calculator />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>

      </BrowserRouter>
    </ErrorBoundary>
  );

}
