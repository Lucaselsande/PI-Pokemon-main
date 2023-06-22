import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Deatil from './components/Detail/Deatil';
import Cards from './components/Cards/Cards';
import Form from './components/LandingPage/LandingPage';
import { useEffect } from 'react';
import Favorites from './components/Favorites/Favorites';
import Create from './components/Create/create';
import SearchBar from './components/SearchBar/SearchBar';
import { allPokemons, allTypes } from './redux/actions';
import { useDispatch } from 'react-redux';
import Modify from './components/ModifyPokemon/modifyPokemon';

function App() {
   
   const local = useLocation()
   const dispatch = useDispatch()


   // uso el useEffect para llenar el estado global con lo que voy a necesitar

   useEffect(() => {
      dispatch(allPokemons())
      dispatch(allTypes())
    }, [])

    //con el local.pathname digo que un elemento se muestre donde yo quiero
   return (
      <div>
         {local.pathname !== '/' && <NavBar />}
         {local.pathname === '/home' && <SearchBar />}
         <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/home' element={<Cards />} />
            <Route path='/create' element={<Create />} />
            <Route path='/deatil' element={<Deatil />}>
               <Route path=':id' element={<Deatil />} />
            </Route>
            <Route path='/modify' element={<Modify />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" />} />
         </Routes>
      </div>
   );
}

export default App;
