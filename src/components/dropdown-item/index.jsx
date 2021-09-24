import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Avatar,
  AvatarContainer,
  TextContainer,
} from "./styles/dropdown-item";

function DropdownItem({ pokemon: { type, name, image, id } }) {
  return (
    <Link to={`/detail/${name}`}>
      <Container type={type}>
        <AvatarContainer>
          <Avatar src={image} alt={name} />
        </AvatarContainer>
        <TextContainer>
          <span>{name}</span>
        </TextContainer>
      </Container>
    </Link>
  );
}

export default DropdownItem;
