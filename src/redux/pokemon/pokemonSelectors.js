import { createSelector } from "reselect";

const pokemonSelector = (state) => state.pokemon;

export const selectCollection = createSelector([pokemonSelector], (pokemon) => {
  return { pokemonList: pokemon.pokemonList, nextItems: pokemon.nextItems };
});

export const searchPokemons = (searchQuery) =>
  createSelector([selectCollection], ({ pokemonList }) => {
    return pokemonList.filter((pokemon) => pokemon.name.includes(searchQuery));
  });

export const capturedPokemons = createSelector(
  [selectCollection],
  ({ pokemonList }) => {
    return pokemonList.filter((pokemon) => pokemon.captured === true);
  }
);
