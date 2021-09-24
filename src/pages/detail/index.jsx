import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemonStart } from "../../redux/pokemon/pokemonActions";
import WithSpinner from "../../components/with-spinner";

import PokemonDetail from "../../components/pokemon-detail";

const PokemonDetailWithSpinner = WithSpinner(PokemonDetail);

function Detail(props) {
  const dispatch = useDispatch();
  const { name } = useParams();

  const { loading } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonStart(`${process.env.REACT_APP_POKEMON_URL}/${name}`));
  }, [dispatch, name]);

  return <PokemonDetailWithSpinner isLoading={loading} {...props} />;
}

export default Detail;
