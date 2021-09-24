import pokemonConstants from "./constants";

export const fetchPokemonStart = (url) => ({
  type: pokemonConstants.FETCH_POKEMON_START,
  payload: url,
});

export const fetchPokemonSuccess = (data) => ({
  type: pokemonConstants.FETCH_POKEMON_SUCCESS,
  payload: data,
});

export const fetchPokemonError = (message) => ({
  type: pokemonConstants.FETCH_POKEMON_FAILURE,
  payload: message,
});

export const fetchPokemonsStart = (url) => ({
  type: pokemonConstants.FETCH_POKEMONS_START,
  payload: url,
});

export const fetchPokemonsSuccess = (data) => ({
  type: pokemonConstants.FETCH_POKEMONS_SUCCESS,
  payload: data,
});

export const fetchPokemonsError = (message) => ({
  type: pokemonConstants.FETCH_POKEMONS_FAILURE,
  payload: message,
});

export const fetchPokemonsSpeciesStart = (url) => ({
  type: pokemonConstants.FETCH_POKEMONS_BY_SPECIE_START,
  payload: url,
});

export const fetchPokemonSpeciesError = (error) => ({
  type: pokemonConstants.FETCH_POKEMONS_BY_SPECIE_FAILURE,
  payload: error.message,
});

////////////////////////////////////////////////////////////////////
export const addPokemonToPokedexFailure = (error) => ({
  type: pokemonConstants.ADD_POKEMON_TO_POKEDEX_FAILURE,
  payload: error,
});

export const addPokemonToPokedexStart = ({ pokemon, userId }) => ({
  type: pokemonConstants.ADD_POKEMON_TO_POKEDEX_START,
  payload: { pokemon, userId },
});

export const addPokemonToPokedexSuccess = (pokemon) => ({
  type: pokemonConstants.ADD_POKEMON_TO_POKEDEX_SUCCESS,
  payload: pokemon,
});
/////////////////////////////////////////////////////////////////////////

export const removePokemonFromPokedexStart = (pokemonId) => ({
  type: pokemonConstants.REMOVE_POKEMON_FROM_POKEDEX_START,
  payload: pokemonId,
});

export const removePokemonFromPokedexSuccess = (pokemonId) => ({
  type: pokemonConstants.REMOVE_POKEMON_FROM_POKEDEX_SUCCESS,
  payload: pokemonId,
});

export const removePokemonFromPokedexFailure = (error) => ({
  type: pokemonConstants.REMOVE_POKEMON_FROM_POKEDEX_FAILURE,
  payload: error,
});

///////////////////////////////////////////////////////////////////////////

export const searchPokemons = (searchQuery) => ({
  type: pokemonConstants.SEARCH_POKEMON,
  payload: searchQuery,
});

export const setDropdownHidden = () => ({
  type: pokemonConstants.SET_DROPDOWN_HIDDEN,
});
