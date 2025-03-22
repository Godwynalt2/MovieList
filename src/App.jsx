import React from 'react';
import './css/App.css';
import MovieCard from './components/moviecard';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import { MovieProvider } from './context/MovieContext';
import Favorite from './pages/favorites';
import NavBar from './components/NavBar';

function App() {
  return (
     
      <MovieProvider>
        <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorite />} />
        </Routes>
      </main>
      </MovieProvider>
   
  );
}

export default App;
