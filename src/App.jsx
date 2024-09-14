import './App.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

export default function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="app">
      <Header addPost={addPost} />
      <Routes>
        <Route path='/' element={<HomePage posts={posts} />}></Route>
        <Route path='dashboard' element={<DashboardPage />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}