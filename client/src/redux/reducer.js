import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, CREAR, ALL_POKEMONS, REMOVE_POKEMON, POKE_NAME, ALL_TYPES,NUMBER_TYPES } from "./actions-type";



const initialState = {
  myFavorites: [],
  allCharactersFav: [],
  // todos : [],
  personaje: [],
  allPokemons: [],
  Pokemons: [],
  PokeSinFiltro: [],
  allTypes: [],
  numberTypes:1,
}


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        Pokemons: action.payload,
        PokeSinFiltro: action.payload

      };

    case ALL_TYPES:
      return {
        ...state,
        allTypes: action.payload
      };

    case REMOVE_POKEMON:
      return {
        ...state,
        allPokemons: state.allPokemons.filter(elem => elem.id !== action.payload),
        Pokemons: state.Pokemons.filter(elem => elem.id !== action.payload),
        PokeSinFiltro: state.PokeSinFiltro.filter(elem => elem.id !== action.payload)
      };
    case POKE_NAME:
      let pokeName = state.allPokemons
      if (action.payload) {
        pokeName = pokeName.filter(elem => elem.name === action.payload)
      }
      return {
        ...state,
        Pokemons: pokeName
      };

    case FILTER:
      const PokeSinFiltroCopy = [...state.PokeSinFiltro]
      let allPokemonsFiltered =
        action.payload.Filter === 'ALL'
          ? PokeSinFiltroCopy
          : action.payload.Filter === "API"
            ? PokeSinFiltroCopy.filter(elem => typeof elem.id === 'number')
            : PokeSinFiltroCopy.filter(elem => typeof elem.id === 'string')

      allPokemonsFiltered =
        action.payload.Order === 'N'
          ? allPokemonsFiltered
          : action.payload.Order === "A"
            ? allPokemonsFiltered.sort((a, b) => a.name.localeCompare(b.name))
            : action.payload.Order === 'D'
              ? allPokemonsFiltered.sort((a, b) => b.name.localeCompare(a.name))
              : action.payload.Order === 'Mayor'
                ? allPokemonsFiltered.sort((a, b) => b.attack - a.attack)
                : allPokemonsFiltered.sort((a, b) => a.attack - b.attack)

      allPokemonsFiltered =
        action.payload.Type === 'all'
          ? allPokemonsFiltered
          : allPokemonsFiltered.filter(elem => elem.types.includes(action.payload.Type))

      // el si es igual a 'ALL' es para no poner ningun filtro
      return {
        ...state,
        Pokemons: allPokemonsFiltered
      };

      case NUMBER_TYPES:
      return {
        ...state,
        numberTypes: action.payload
      };

      case CREAR:
      return {
        ...state,
        allPokemons: [...state.allPokemons, action.payload],
        Pokemons: [...state.Pokemons, action.payload],
        PokeSinFiltro: [...state.PokeSinFiltro, action.payload]
      };

















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
        myFavorites: filter2,
        allCharactersFav: action.payload
      };
    

    default: return {
      ...state
    }
  }
}

export default reducer