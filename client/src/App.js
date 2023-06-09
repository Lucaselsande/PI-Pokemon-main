import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Deatil from './components/Deatil';
import About from './components/about';
import Cards from './components/Cards';
import { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import { useEffect } from 'react';
import Favorites from './components/Favorites';
import Create from './components/create';
import { useSelector } from 'react-redux';
import SearchBar from './components/SearchBar';





function App() {

   const [characters, setCharacters] = useState([]);


   const onSearch = async () => {
      const response = await axios(`http://localhost:3001/pokemon/`)
      if (response.data) {
         setCharacters((oldChars) => [...oldChars,...response.data]);
      }
   };
   useEffect(()=>{
   onSearch()
     }, [])

   const onClose = (id) => {
      // setCharacters(
      //    characters.filter((char) => {
      //       return char.id !== Number(id)
      //    })
      // )
   };

   const local = useLocation()

   return (
      <div>
         {local.pathname !== '/' && <NavBar />}
         {local.pathname === '/home' && <SearchBar onSearch={onSearch} />}
         <Routes>
            {/* <Route path='/' element={<Form login={login} />} /> */}
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/create' element={<Create />} />
            <Route path='/deatil' element={<Deatil />}>
               <Route path=':id' element={<Deatil />} />
            </Route>
            <Route path="/favorites" element={<Favorites onClose={onClose} />} />
         </Routes>
      </div>

   );
}

export default App;
