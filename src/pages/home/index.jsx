import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonsStart } from "../../redux/pokemon/pokemonActions";
import WithSpinner from "../../components/with-spinner";
import PokemonList from "../../components/pokemon-list";

import { Container } from "./styles/home";

const PokemonListWithSpinner = WithSpinner(PokemonList);

function Home(props) {
  const dispatch = useDispatch();

  const { loading, nextItems, pokemonList } = useSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    dispatch(
      fetchPokemonsStart(`${process.env.REACT_APP_POKEMON_URL}?limit=50`)
    );
  }, [dispatch]);

  const loadMore = () => {
    dispatch(fetchPokemonsStart(nextItems));
  };

  return (
    <Container>
      <PokemonListWithSpinner
        isLoading={loading}
        {...props}
        loadMore={loadMore}
        nextItems={nextItems}
        list={pokemonList}
      />
    </Container>
  );
}

export default Home;
