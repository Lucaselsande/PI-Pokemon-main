import { ADD_FAV, REMOVE_FAV , FILTER , ORDER, AGREGAR, CREAR} from "./actions-type";
import axios from "axios";
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

export const filterCards = (gender)=> {
    return {type: FILTER, payload: gender}
};

export const orderCards = (order) =>{
    return {type: ORDER, payload: order}
};

export const agregarCard = (id) =>{
    return {type: AGREGAR, payload: id}
};

export const crearpj = (personaje) =>{
   return {type: CREAR, payload: personaje}
};




