import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Deatil from './components/Detail/Deatil';
import About from './components/about/about';
import Cards from './components/Cards/Cards';
import { useState } from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import { useEffect } from 'react';
import Favorites from './components/Favorites/Favorites';
import Create from './components/Create/create';
import { useSelector } from 'react-redux';
import SearchBar from './components/SearchBar/SearchBar';
import { allPokemons } from './redux/actions';
import { useDispatch } from 'react-redux';
import { closeCard } from './redux/actions';

function App() {
   
   const local = useLocation()
   const dispatch = useDispatch()



   // 1 crear pokemon
   // 2 favoritos, poner bien el reducer 
   // 3 poner el icono de fav y el de cerrar en un mini form
   // 4 agregar cosas en el about
   // 5 deployear? no me aucuerdo como se escribe


   useEffect(() => {
      dispatch(allPokemons())
    }, [])

   return (
      <div>
         {local.pathname !== '/' && <NavBar />}
         {local.pathname === '/home' && <SearchBar />}
         <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/home' element={<Cards />} />
            <Route path='/about' element={<About />} />
            <Route path='/create' element={<Create />} />
            <Route path='/deatil' element={<Deatil />}>
               <Route path=':id' element={<Deatil />} />
            </Route>
            <Route path="/favorites" element={<Favorites />} />
         </Routes>
      </div>

   );
}

export default App;
