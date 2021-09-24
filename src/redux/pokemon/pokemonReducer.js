import pokemonConstants from "./constants";

const INITIAL_STATE = {
  pokemonList: [],
  pokemonItem: {},
  nextItems: null,
  captured: [],
  loading: false,
  error: null,
  dropdownHidden: true,
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pokemonConstants.REMOVE_POKEMON_FROM_POKEDEX_START:
    case pokemonConstants.ADD_POKEMON_TO_POKEDEX_START:
    case pokemonConstants.FETCH_POKEMONS_BY_SPECIE_START:
    case pokemonConstants.FETCH_POKEMONS_START:
    case pokemonConstants.FETCH_POKEMON_START:
      return {
        ...state,
        loading: true,
      };
    case pokemonConstants.FETCH_POKEMONS_SUCCESS:
      const updateCaptured = action.payload.pokemons.map((item) => {
        for (let value of state.captured) {
          if (value.id === item.id) item["captured"] = true;
        }
        return item;
      });
      return {
        ...state,
        pokemonList: updateCaptured,
        nextItems: action.payload.next,
        loading: false,
      };
    case pokemonConstants.FETCH_POKEMON_SUCCESS:
      const pokemon = action.payload;
      for (let item of state.captured) {
        if (item.id === pokemon.id) {
          pokemon["captured"] = true;
        }
      }
      return {
        ...state,
        pokemonItem: pokemon,
        loading: false,
      };

    case pokemonConstants.REMOVE_POKEMON_FROM_POKEDEX_FAILURE:
    case pokemonConstants.ADD_POKEMON_TO_POKEDEX_FAILURE:
    case pokemonConstants.FETCH_POKEMONS_FAILURE:
    case pokemonConstants.FETCH_POKEMON_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case pokemonConstants.SEARCH_POKEMON:
      const searchedPokemon = state.pokemonList.filter(
        (pokemon) =>
          pokemon.name.includes(action.payload) ||
          pokemon.id === +action.payload
      );
      return {
        ...state,
        pokemonList: searchedPokemon,
      };
    case pokemonConstants.ADD_POKEMON_TO_POKEDEX_SUCCESS:
      const addCapturedToList = state.pokemonList.map((item) => {
        if (item.id === action.payload.id) {
          item["captured"] = true;
        }
        return item;
      });
      return {
        ...state,
        pokemonList: addCapturedToList,
        captured: [...state.captured, action.payload],
        loading: false,
      };

    case pokemonConstants.REMOVE_POKEMON_FROM_POKEDEX_SUCCESS:
      const removeCapturedFromList = state.pokemonList.map((item) => {
        if (item.id === action.payload) {
          item["captured"] = false;
        }
        return item;
      });
      return {
        ...state,
        pokemonList: removeCapturedFromList,
        captured: state.captured.filter((item) => item.id !== action.payload),
        loading: false,
      };

    case pokemonConstants.SET_DROPDOWN_HIDDEN:
      return {
        ...state,
        dropdownHidden: !state.dropdownHidden,
      };

    default:
      return state;
  }
};

export default pokemonReducer;
