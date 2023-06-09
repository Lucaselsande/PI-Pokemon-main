
// import Cards from './Cards';
// import styles from './styles/Todos.module.css'
// import { useState } from 'react';
// import NavBar from './NavBar';
// import axios from 'axios';

// const Todo =() => {
   
//     const [characters, setCharacters] = useState([]);
 
//     function onSearch(id) {
//        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
//           if (data.name) {
//              setCharacters((oldChars) => [...oldChars, data]);
//           } else {
//              window.alert('¡No hay personajes con este ID!');
//           }
//        });
//     };
 
 
//     const onClose = (id) =>{
//        setCharacters(
//           characters.filter((char)=>{
//              return char.id !== Number(id)
//           })
//        )
//     };
 
//     return (
//        <div className={styles.fondo}>
//           <NavBar onSearch={onSearch}/>
//           <Cards characters={characters} onClose={onClose}/>
//        </div>
//     );
//  }
// export default Todo


// import './App.css';
// import Cards from './components/Cards.jsx';
// import styles from './components/styles/Todos.module.css'
// import { useState } from 'react';
// import NavBar from './components/NavBar';
// import axios from 'axios';
// import { Route, Routes } from 'react-router-dom';
// import Deatil from './components/Deatil';
// import About from './components/about';




// function App() {

//    const [characters, setCharacters] = useState([]);

//    function onSearch(id) {
//       axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
//          if (data.name) {
//             setCharacters((oldChars) => [...oldChars, data]);
//          } else {
//             window.alert('¡No hay personajes con este ID!');
//          }
//       });
//    };
//    const onClose = (id) =>{
//       setCharacters(
//          characters.filter((char)=>{
//             return char.id !== Number(id)
//          })
//       )
//    };
//    return (
//       <Routes>
//          <Route path='/' element={<NavBar onSearch = {{onSearch}}/>}/>
         
//          <Route path='/about' element={<About/>} />
//          <Route path= '/detail' element={<Cards characters={characters} onClose={onClose}/>}>
//          <Route path='/detail/:id' element={<Deatil/>} />
//          </Route>
//          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
         
//          {/* <div className={styles.fondo}>
//          characters={characters} onClose={onClose}
//             <NavBar  />  
//             <Cards />
//             </div>  */}
//       </Routes>
            
        
      
      
      
//    );
// }

// export default App;
