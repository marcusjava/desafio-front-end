import React, { useState } from "react";

import {
  Container,
  AvatarContainer,
  Avatar,
  Detail,
  Title,
  Description,
  Badge,
  StatsContainer,
  Button,
  AbilityContainer,
} from "./styles/pokemon-detail";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Progress } from "reactstrap";
import { removePokemonFromPokedexStart } from "../../redux/pokemon/pokemonActions";
import Tooltip from "../tooltip";

function PokemonDetail() {
  const [preview, setPreview] = useState(undefined);
  const { pokemonItem } = useSelector((state) => state.pokemon);
  const history = useHistory();
  const dispatch = useDispatch();

  const removePokemon = (id) => {
    dispatch(removePokemonFromPokedexStart(id));
    history.push("/");
  };

  const selectFile = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
  };
  return (
    Object.keys(pokemonItem).length > 0 && (
      <Container>
        <AvatarContainer>
          <Avatar
            src={
              preview
                ? preview
                : pokemonItem.sprites.other.dream_world.front_default
            }
            alt={pokemonItem.name}
          />
          <label>
            <input type="file" accept="image/*" onChange={selectFile} />
          </label>
        </AvatarContainer>
        <Detail>
          <Title>{pokemonItem.name}</Title>
          <Description>Peso - {pokemonItem.weight}Kg</Description>
          <Description>Altura - {pokemonItem.height}</Description>
          <AbilityContainer>
            {pokemonItem.abilities.map((item, idx) => (
              <Tooltip
                key={idx}
                placement="bottom"
                text={item.ability}
                tooltipText={item.effect}
              />
            ))}
          </AbilityContainer>

          <Description>
            Tipo -{" "}
            {pokemonItem.types.map((item, idx) => (
              <Badge
                key={idx}
                type={item.name}
                to={`/pokemon/type/${item.name}`}
              >
                {item.name}
              </Badge>
            ))}
          </Description>

          <StatsContainer>
            <span>
              HP <Progress value={pokemonItem.stats.hp} />
            </span>
            <span>
              Attack <Progress value={pokemonItem.stats.attack} />
            </span>
            <span>
              Defense <Progress value={pokemonItem.stats.defense} />
            </span>
          </StatsContainer>
          {pokemonItem.captured && (
            <Button onClick={() => removePokemon(pokemonItem.id)}>
              Remover
            </Button>
          )}
        </Detail>
      </Container>
    )
  );
}

export default PokemonDetail;
