import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removePokemonFromPokedexStart,
  addPokemonToPokedexStart,
} from "../../redux/pokemon/pokemonActions";
import { useHistory } from "react-router-dom";
import {
  Container,
  Title,
  SubTitle,
  PokeBall,
  Avatar,
} from "./styles/pokemon-card";
import pokeball from "../../assets/ball.png";

function PokemonCard({ id, name, image, type, captured }) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();

  const catchOrRedirectToLogin = () => {
    if (!currentUser) {
      history.push("/signin");
      return;
    }

    captured
      ? dispatch(removePokemonFromPokedexStart(id))
      : dispatch(
          addPokemonToPokedexStart({
            pokemon: { id, name, image, type, captured: true },
            userId: currentUser.id,
          })
        );
  };

  return (
    <Container type={type} onClick={catchOrRedirectToLogin} captured={captured}>
      <Avatar src={image} alt={name} />
      <Title>{name}</Title>
      <SubTitle>Type: {type}</SubTitle>
      {captured && <PokeBall src={pokeball} />}
    </Container>
  );
}

export default PokemonCard;
