import { connect, useDispatch } from 'react-redux'
import Card from '../Card/Card';
import style from '../styles/Todos.module.css'
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from "react";


const Favorites = ({ myFavorites }) => {

    return (
        <div>
            
            <div className={style.cards}>

            {myFavorites?.map(({ id, name, image, types }) => (
        <Card
          key={id}
          id={id}
          name={name}
          image={image}
          types={types.join(', ')}
        />
      ))}


            </div>

        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps, null)(Favorites)