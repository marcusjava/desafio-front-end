import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemonsSpeciesStart } from "../../redux/pokemon/pokemonActions";
import WithSpinner from "../../components/with-spinner";
import PokemonList from "../../components/pokemon-list";

// import { Container } from './styles';
const PokemonListWithSpinner = WithSpinner(PokemonList);

function PokemonTypeList(props) {
  const dispatch = useDispatch();

  const { type } = useParams();

  const { loading, pokemonList } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(
      fetchPokemonsSpeciesStart(
        `${process.env.REACT_APP_POKEMON_TYPES_URL}/${type}?limit=50`
      )
    );
  }, [dispatch, type]);

  return (
    <>
      <PokemonListWithSpinner
        isLoading={loading}
        list={pokemonList}
        {...props}
      />
    </>
  );
}

export default PokemonTypeList;
