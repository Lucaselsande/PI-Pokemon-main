import { ADD_FAV, REMOVE_FAV, FILTER, DB_POKEMONS, CREAR, POKE_NAME, ALL_POKEMONS, REMOVE_POKEMON, ALL_TYPES, NUMBER_TYPES } from "./actions-type";
import axios from "axios";


// return {type: POKE_NAME, payload: name}
export const SearchPokeName = (name) => {
   if (!name) {
     return {
       type: POKE_NAME,
       payload: 'data',
     };
   }
 
   return async (dispatch) => {
     try {
       const URL = 'http://localhost:3001/pokemon/?name=' + name;
       const response = await axios.get(URL);
       return dispatch({
         type: POKE_NAME,
         payload: response.data,
       });
     } catch (error) {
       if (error.response && error.response.data && error.response.data.message) {
         let errorMessage = error.response.data.message;
         window.alert(errorMessage);
       } else {
         window.alert('Error: '+ error.message);
       }
     }
   };
 };
 

 export const allPokemons = () => {
      const URL = 'http://localhost:3001/pokemon';
      return async (dispatch) => {
         try {
            const { data } = await axios.get(URL);
            return dispatch({
               type: ALL_POKEMONS,
               payload: data,
            });
         } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
               const errorMessage = error.response.data.message;
               window.alert(errorMessage);
            } else {
               window.alert('Error: ' + error.message);
            }
         }
      };
};


export const allTypes = () => {
   const URL = 'http://localhost:3001/types';
   return async (dispatch) => {
      try {
      const { data } = await axios.get(URL)
         return dispatch({
            type: ALL_TYPES,
            payload: data,
         });
         ;
      } catch (error) {
         if (error.response && error.response.data && error.response.data.message) {
            const errorMessage = error.response.data.message;
            window.alert(errorMessage);
         } else {
            window.alert('Error: ' + error.message);
         }
      }
   };
};

export const removePokemon = (id) => {
   return { type: REMOVE_POKEMON, payload: id }
};

export const filterCards = (filters) => {
   return { type: FILTER, payload: filters }
};

export const createNumberTypes = (number) => {
   return { type: NUMBER_TYPES, payload: number }
};

export const crearPokemon = (pokemonData) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.post('http://localhost:3001/pokemon/', pokemonData);
         return dispatch(allPokemons());
      } catch (error) {
         if (error.response && error.response.data && error.response.data.message) {
            const errorMessage = error.response.data.message;
            window.alert(errorMessage);
         } else {
            window.alert('Error: ' + error.message);
         }
      }
   };
};

export const destroy = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(`http://localhost:3001/delete/${id}`);
         //con la peticion elimino por completo el pokemon de la db y con el dispatch quito la carta
         dispatch(removePokemon(id))
         window.alert('Pokemon destruido definitivamente ')
      } catch (error) {
         if (error.response && error.response.data && error.response.data.message) {
            const errorMessage = error.response.data.message;
            window.alert(errorMessage);
         } else {
            window.alert('Error: ' + error.message);
         }
      }
   };
};

export const addFav = (id) => {
   return {
      type: ADD_FAV,
      payload: id,
   };
};

export const removeFav = (id) => {
   return ({
      type: REMOVE_FAV,
      payload: id,
   });
};

export const dbPokemons = () => {
   return {
      type: DB_POKEMONS
   };
};

export const ModifyPoke = (data) => {
   //me quede aca el data de abajo no va
   return async () => {
      try {
         const response = await axios.put(`http://localhost:3001/modify/`,data);
         //con la peticion elimino por completo el pokemon de la db y con el dispatch quito la carta
         window.alert(response.data.message)
      }catch (error) {
         if (error.response && error.response.data && error.response.data.message) {
            const errorMessage = error.response.data.message;
            window.alert(errorMessage);
         } else {
            window.alert('Error: ' + error.message);
         }
      }
   };
};