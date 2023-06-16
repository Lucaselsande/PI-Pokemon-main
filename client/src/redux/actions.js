import { ADD_FAV, REMOVE_FAV, FILTER, AGREGAR, CREAR, POKE_NAME, ALL_POKEMONS, REMOVE_POKEMON, ALL_TYPES, NUMBER_TYPES } from "./actions-type";
import axios from "axios";


// return {type: POKE_NAME, payload: name}
export const SearchPokeName = (name) => {
   // si en el search no busco ningun pokemon muestro todos
   if (!name) {
      return ({
         type: POKE_NAME,
         payload: 'data',
      });
   }
   // peticion al server para traer el pokemon
   try {
      const URL = 'http://localhost:3001/pokemon/?name=' + name;
      return async (dispatch) => {
         const { data } = await axios.get(URL)
         return dispatch({
            type: POKE_NAME,
            payload: data,
         });
      };
   } catch (error) {
      window.alert('Pokemon no encontrado')
   }
};

export const allPokemons = () => {
   try {
      const URL = 'http://localhost:3001/pokemon';
      return async (dispatch) => {
         const { data } = await axios.get(URL)
         return dispatch({
            type: ALL_POKEMONS,
            payload: data,
         });
      };
   } catch (error) {
      window.alert('Error con el server')
   }
};

export const allTypes = () => {
   try {
      const URL = 'http://localhost:3001/types';
      return async (dispatch) => {
         const { data } = await axios.get(URL)
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
         console.log(error.message);
      }
   };
};

export const destroy = (id) => {
   console.log(id)
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(`http://localhost:3001/delete/${id}`);
         //con la peticion elimino por completo el pokemon de la db y con el dispatch quito la carta
         dispatch(removePokemon(id))
         window.alert('Pokemon destruido definitivamente ')
      } catch (error) {
         console.log(error.message);
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