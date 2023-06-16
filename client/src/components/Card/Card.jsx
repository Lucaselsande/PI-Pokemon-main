import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, destroy, removeFav } from '../../redux/actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';



const Card = ({id,name,image, onClose,types, addFav, removeFav }) => {

   const [isFav, setisFav] = useState(false)
   const [destroyPokemon, setdestroy] = useState(false)
   const myFavorites = useSelector(state => state.myFavorites)

   const dispatch = useDispatch()

   useEffect(()=>{
      if(id){
         if(typeof id === 'string'){
            setdestroy(true)
         }else{
            setdestroy(false)
         }
      }
   },[id])

   const handleFavorite = () => {
      if (isFav) {
         setisFav(false)
         removeFav(id)

      } else {
         setisFav(true)
         addFav(id)
      }
   }

   const handleDestroy = () => {
      dispatch(destroy(id))
   }
   
   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setisFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div key={id} className={style.card}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         {onClose&&<button onClick={() => { onClose(id) }}>Close</button>}
         {destroyPokemon&& <button onClick={handleDestroy} >☢DESTROY</button>}
         <Link to={`/deatil/${id}`}>
            <img src={image} alt='' className={style['card-image']} />
         </Link>
         <div className={style['card-name']}>{`Name: ${name}`}</div>
         <h4>{`Types: ${types}`}</h4>

      </div>
   );
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
      
   }
}


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (id) => dispatch(addFav(id)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(
   Card)