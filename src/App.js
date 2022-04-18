import { BrowserRouter, Route , Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/FooterComponent'
import HomePage from './pages/HomePage'
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites'
import DataContext from './context/data';

function App() {
  const [favorites , setFavorites] = useState([]);
  return (
    <DataContext.Provider value={{favorites , setFavorites}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/movie/:id" element={<MovieDetails/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
