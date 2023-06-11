import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, CREAR,ALL_POKEMONS,REMOVE_POKEMON } from "./actions-type";



const initialState = {
    myFavorites: [],
    allCharactersFav: [],
    // todos : [],
    personaje: [],
    allPokemons: [],
    Pokemons: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

      case ALL_POKEMONS:
        return{
          ...state,
          allPokemons: action.payload,
          Pokemons: action.payload
        };

      case REMOVE_POKEMON:
        return{
          ...state,
          allPokemons: state.allPokemons.filter(elem => elem.id !== action.payload),
          Pokemons: state.allPokemons.filter(elem => elem.id !== action.payload)
        }

















      case ADD_FAV:
        return { 
          ...state,
           myFavorites: action.payload, 
           allCharactersFav: action.payload 
          };
          // case AGREGAR: return {
          //   ...state,
          //   todos: [...state.todos, action.payload],
          // };
        // case REMOVE_FAV:
            // const filter = state.allCharactersFav.filter((user) => user.id !== action.payload)
            // const filter2 = state.myFavorites.filter((user) => user.id !== action.payload)
            //esto es para que al sacar de fav mientras tenes filtro de genero aplicado funcione como deberia 
            // return {
            //     ...state,
            //     myFavorites: filter2,
            //     allCharactersFav: filter
            //     // esto es para que se mantengan los cambios al cambiar genero en filtros
            // }
        case REMOVE_FAV:
          const filter2 = state.myFavorites.filter((user) => user.id !== action.pepi)
      return { 
        ...state,
        myFavorites: filter2 ,
        allCharactersFav: action.payload
      };
            case FILTER:

        const allCharactersFiltered = action.payload === 'T'
                                      ? state.allCharactersFav
                                      : state.allCharactersFav.filter((char)=> char.gender === action.payload);
                                      //el si es igual a 'T' es para no poner ningun filtro de genero
        return {
          ...state,
          myFavorites: allCharactersFiltered
         
        }
        case  ORDER:
          const allCharactersFavCopy = [...state.myFavorites];
          return{
            ...state,
            myFavorites: 
              action.payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id)
          }
        case CREAR:
          return{
            ...state,
            personaje: [...state.personaje, action.payload]
          }    

        default: return {
            ...state
        }
    }
}

export default reducer