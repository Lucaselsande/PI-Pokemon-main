import style from './styles/Todos.module.css'
import { useState } from 'react';


const SearchBar = ({onSearch}) => {

   const [id, setid] = useState('')

   const handleChange = (event) => {  
      setid(event.target.value)
   };
   
   
   return (
      <div className={style.seach}>
         <input type='search' onChange={handleChange} value ={id}/>
         <button onClick={() => { onSearch(); setid('')}}>Agregar</button>  
      </div>
   );
};

export default  SearchBar