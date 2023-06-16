import { ADD_FAV, REMOVE_FAV , FILTER , ORDER, AGREGAR, CREAR, POKE_NAME,ALL_POKEMONS,REMOVE_POKEMON,ALL_TYPES,NUMBER_TYPES} from "./actions-type";
import axios from "axios";


// return {type: POKE_NAME, payload: name}
export const SearchPokeName = (name) => {
   try {
      const URL = 'http://localhost:3001/pokemon/?name=' + name;
   return async (dispatch) => {
     const {data} = await axios.get(URL)
         return dispatch({
            type: POKE_NAME,
            payload: data,
         });
      ;
   };
} catch (error) {
   window.alert('Error con el server')
}
};

export const allPokemons = () => {
   try {
      const URL = 'http://localhost:3001/pokemon';
   return async (dispatch) => {
     const {data} = await axios.get(URL)
         return dispatch({
            type: ALL_POKEMONS,
            payload: data,
         });
      ;
   };
} catch (error) {
   window.alert('Error con el server')
}
};

export const allTypes = () => {
   try {
      const URL = 'http://localhost:3001/types';
   return async (dispatch) => {
     const {data} = await axios.get(URL)
         return dispatch({
            type: ALL_TYPES,
            payload: data,
         });
      ;
   };
} catch (error) {
   window.alert('Error con el server')
}

};

export const removePokemon = (id)=> {
   return {type: REMOVE_POKEMON, payload: id}
};

export const filterCards = (filters)=> {
    return {type: FILTER, payload: filters }
};

export const orderCards = (order) =>{
    return {type: ORDER, payload: order}
};

export const createNumberTypes = (number) =>{
   return {type: NUMBER_TYPES, payload: number}
};

export const crearPokemon = (pokemonData) => {
   
   return async (dispatch) => {
      try {
         const { data } = await axios.post('http://localhost:3001/pokemon/', pokemonData);
        return dispatch(allPokemons());
     } catch (error) {
       console.log(error.message);
     }
   };
};

export const destroy = (id) => {
   console.log(id)
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(`http://localhost:3001/delete/${id}`);
         dispatch(removePokemon(id))
         window.alert('Pokemon destruido definitivamente ')
     } catch (error) {
       console.log(error.message);
     }
   };
};





// export const addFav = (character) => {
//     return {
//         type: ADD_FAV, payload: character
//     }
// }
// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: ADD_FAV,
//              payload: data,
//           });
//        });
//     };
//  };
export const addFav =  (character) => {
   try {
      const URL = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
     const {data} = await axios.post(URL, character)
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      ;
   };
   } catch (error) {
      window.alert('no se puede')
   }
   
};
// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV, payload: id
//     }
// }
// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: REMOVE_FAV,
//              payload: data,
//              pepi: id
//        });
//        });
//     };
//  };
export const removeFav = (id) => {
   try {
      const URL = 'http://localhost:3001/rickandmorty/fav/'+id;
   return async (dispatch) => {
     const {data} = await axios.delete(URL)
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
            pepi: id
         });
      ;
   };
   } catch (error) {
      window.alert('tampoco se puede')
   }
   
};


export const agregarCard = (id) =>{
    return {type: AGREGAR, payload: id}
};






