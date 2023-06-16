import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, CREAR, ALL_POKEMONS, REMOVE_POKEMON, POKE_NAME, ALL_TYPES, NUMBER_TYPES } from "./actions-type";



const initialState = {
  myFavorites: [],
  Pokemons: [],
  PokeSinFiltro: [],
  allTypes: [],
  numberTypes: 1,
}


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ALL_POKEMONS:
      return {
        ...state,
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
        Pokemons: state.Pokemons.filter(elem => elem.id !== action.payload),
        PokeSinFiltro: state.PokeSinFiltro.filter(elem => elem.id !== action.payload)
      };
    case POKE_NAME:
      
      return {
        ...state,
        Pokemons: action.payload === 'data'
        ? state.PokeSinFiltro
        : action.payload
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
        Pokemons: [...state.Pokemons, action.payload],
        PokeSinFiltro: [...state.PokeSinFiltro, action.payload]
      };

    case ADD_FAV:
      const pokeFav = state.PokeSinFiltro.filter(elem => elem.id === action.payload)
      return {
        ...state,
        myFavorites: [...state.myFavorites, ...pokeFav]
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((user) => user.id !== action.payload)
      };


    default: return {
      ...state
    }
  }
}

export default reducer