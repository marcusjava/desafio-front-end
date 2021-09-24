import React, { useState } from "react";
import PokemonCard from "../pokemon-card";
import { Button } from "./styles/pokemon-list";
import Search from "../search";
import Pagination from "jw-react-pagination";

import { ListContainer, Container } from "./styles/pokemon-list";

function PokemonList({ loadMore, list, nextItems }) {
  const [pageOfItems, setPageOfItems] = useState([]);

  const onChangePage = (items) => {
    setPageOfItems(items);
  };
  return (
    <Container>
      <Search />
      <ListContainer>
        {pageOfItems.map((pokemon, index) => (
          <PokemonCard
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            captured={pokemon.captured}
          />
        ))}
      </ListContainer>
      <Pagination items={list} onChangePage={onChangePage} pageSize={24} />
      {loadMore !== undefined && (
        <Button onClick={loadMore} disabled={!nextItems}>
          Mais
        </Button>
      )}
    </Container>
  );
}

export default PokemonList;
