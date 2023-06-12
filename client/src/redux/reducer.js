import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, CREAR, ALL_POKEMONS, REMOVE_POKEMON, POKE_NAME } from "./actions-type";



const initialState = {
  myFavorites: [],
  allCharactersFav: [],
  // todos : [],
  personaje: [],
  allPokemons: [],
  Pokemons: [],
  PokeSinFiltro: [],
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
      }
    // case ORDER:
    //   const allPokemonsCopy = [...state.Pokemons];
    //   const pokemonOrder = action.payload === 'N'
    //     ? state.PokeSinFiltro
    //     : action.payload === "A"
    //       ? allPokemonsCopy.sort((a, b) => a.name.localeCompare(b.name))
    //       : allPokemonsCopy.sort((a, b) => b.name.localeCompare(a.name))
    //   return {
    //     ...state,
    //     Pokemons: pokemonOrder,

    //   }
    case FILTER:
      const PokeSinFiltroCopy = [...state.PokeSinFiltro]
      console.log(action.pepi)
      let allPokemonsFiltered =
        action.pepi === 'ALL'
          ? PokeSinFiltroCopy
          : action.pepi === "API"
            ? PokeSinFiltroCopy.filter(elem => typeof elem.id === 'number')
            : PokeSinFiltroCopy.filter(elem => typeof elem.id === 'string')

      allPokemonsFiltered =
        action.payload === 'N'
          ? allPokemonsFiltered
          : action.payload === "A"
            ? allPokemonsFiltered.sort((a, b) => a.name.localeCompare(b.name))
            : allPokemonsFiltered.sort((a, b) => b.name.localeCompare(a.name))

      // el si es igual a 'ALL' es para no poner ningun filtro
      return {
        ...state,
        Pokemons: allPokemonsFiltered
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
        myFavorites: filter2,
        allCharactersFav: action.payload
      };
    case CREAR:
      return {
        ...state,
        personaje: [...state.personaje, action.payload]
      }

    default: return {
      ...state
    }
  }
}

export default reducer