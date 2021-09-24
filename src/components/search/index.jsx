import React from "react";
import { useDispatch } from "react-redux";
import {
  searchPokemons,
  fetchPokemonsStart,
} from "../../redux/pokemon/pokemonActions";
import { Container, SearchInput } from "./styles/search";

function Search() {
  const dispatch = useDispatch();

  const onSearchChange = (e) => {
    const { value } = e.target;
    if (!value) {
      dispatch(fetchPokemonsStart(process.env.REACT_APP_POKEMON_URL));
      return;
    }
    dispatch(searchPokemons(value));
  };
  return (
    <Container>
      <SearchInput onChange={onSearchChange} />
    </Container>
  );
}

export default Search;
