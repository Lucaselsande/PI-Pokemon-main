import style from './SearchBar.module.css'
import { useState } from 'react';
import { useDispatch } from "react-redux"
import { SearchPokeName } from '../../redux/actions';

const SearchBar = () => {

   const dispatch = useDispatch()

   const [name, setname] = useState('')

   const handleChange = (event) => {
      setname(event.target.value)
   };
   const handleClick = () => {
      dispatch(SearchPokeName(name))
   }

   return (
      <div className={style.search}>
         <input type='search' className={style.searchInput} onChange={handleChange} value={name} placeholder="Search..." />
         <button className={style.searchButton} onClick={() => { handleClick(); setname('') }}>Search</button>
      </div>

   );
};

export default SearchBar