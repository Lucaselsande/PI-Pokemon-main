import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';



const Card = ({id,name,height,image,thumbnailImage,hp,attack,defense,specialAttack,specialDefense,speed,weight, onClose,types, addFav, removeFav, myFavorites }) => {

   const [isFav, setisFav] = useState(false)


   const handleFavorite = () => {
      if (isFav) {
         setisFav(false)
         removeFav(id)

      } else {
         setisFav(true)
         addFav({ id, name, image })
      }

   }

   // useEffect(() => {
   //    myFavorites?.forEach((fav) => {
   //       if (fav.id === id) {
   //          setisFav(true);
   //       }
   //    });
   // }, [myFavorites]);

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
         <Link to={`/deatil/${id}`}>
            <img src={image} alt='' className={style['card-image']} />
         </Link>
         <div className={style['card-name']}>{`Name: ${name}`}</div>
         
         {/* <h3>{`height: ${height}`}</h3> */}
         {/* <h3>{`hp: ${hp}`}</h3>
         <h3>{`attack: ${attack}`}</h3>
         <h3>{`defense: ${defense}`}</h3>
         <h3>{`specialAttack: ${specialAttack}`}</h3>
         <h3>{`specialDefense: ${specialDefense}`}</h3>
         <h3>{`speed: ${speed}`}</h3>
         <h3>{`weight: ${weight}`}</h3> */}
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
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(
   Card)