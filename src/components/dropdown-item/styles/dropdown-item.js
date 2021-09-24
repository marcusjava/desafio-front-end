import styled from "styled-components/macro";

const cardColors = {
  rock: "rgb(148, 81, 81)",
  ghost: "rgb(247, 247, 247)",
  electric: "rgb(255, 255, 161)",
  bug: "#f6d6a7",
  poison: "#e0a7f6",
  normal: "#f4f4f4",
  fairy: "rgba(255, 192, 203, 0.863)",
  fire: "#fbe3df",
  grass: "#e2f9e1",
  water: "#e0f1fd",
  ground: "#C2B232",
};

export const Container = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.2rem;
  cursor: pointer;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  background-color: ${({ type }) => cardColors[type]};
  &:hover {
    opacity: 0.8;
  }
`;

export const AvatarContainer = styled.div`
  width: 40%;
  text-align: center;
`;

export const Avatar = styled.img`
  height: 1.6rem;
`;

export const TextContainer = styled.div`
  width: 60%;
`;
