import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='dashboard' element={<DashboardPage />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
      <h1>Hello, world!</h1>
      <Footer />
    </div>
  )
}