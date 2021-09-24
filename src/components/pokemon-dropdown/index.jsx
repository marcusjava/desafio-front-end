import React from "react";
import DropdownItem from "../dropdown-item";
import { CustomDropdown, Items, NoItems } from "./styles/pokemon-dropdown";
import { setDropdownHidden } from "../../redux/pokemon/pokemonActions";
import { useDispatch } from "react-redux";

// import { Container } from './styles';

function Dropdown({ list }) {
  const dispatch = useDispatch();
  return (
    <CustomDropdown onMouseLeave={() => dispatch(setDropdownHidden())}>
      <Items>
        {list.length ? (
          <>
            {list.map((pokemon, idx) => (
              <DropdownItem key={idx} pokemon={pokemon} />
            ))}
          </>
        ) : (
          <NoItems>Sem items</NoItems>
        )}
      </Items>
    </CustomDropdown>
  );
}

export default Dropdown;
