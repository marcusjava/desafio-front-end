import React from "react";
import PokeBall from "../../assets/ball.png";
import { useSelector, useDispatch } from "react-redux";

import { Container, Icon, Count, CountContainer } from "./styles/pokemon-ball";
import Dropdown from "../pokemon-dropdown";
import { setDropdownHidden } from "../../redux/pokemon/pokemonActions";

function PokemonBall() {
  const dispatch = useDispatch();
  const { captured, dropdownHidden } = useSelector((state) => state.pokemon);

  return (
    <>
      <Container
        onMouseEnter={() => dispatch(setDropdownHidden())}
        onClick={() => dispatch(setDropdownHidden())}
      >
        <Icon src={PokeBall} />
        <CountContainer>
          <Count>{captured.length || 0} </Count>
        </CountContainer>
      </Container>
      {!dropdownHidden && <Dropdown list={captured} />}
    </>
  );
}

export default PokemonBall;
