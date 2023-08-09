import style from './SearchBar.module.css'
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux"
import { SearchPokeName } from '../../redux/actions';

const SearchBar = () => {

   const dispatch = useDispatch()

   const [name, setname] = useState('')
   const [error, setError] = useState(false)


   useEffect(()=>{
      setError(false)
   },[])

   const handleChange = (event) => {
      setname(event.target.value)
   };
   const handleClick = () => {
      dispatch(SearchPokeName(name,setError))
   }

   return (
      <div>
         <div className={style.search}>
         <input type='search' className={style.searchInput} onChange={handleChange} value={name} placeholder="Search..." />
         <button className={style.searchButton} onClick={() => { handleClick(); setname('') }}>Search</button>

      </div >
         {error&&<h2 className={style.error}>{error}</h2>}
      </div>
      

   );
};

export default SearchBar