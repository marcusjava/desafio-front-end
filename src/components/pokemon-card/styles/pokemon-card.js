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
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  margin: 0.3rem;
  border: 1px solid #efefef;
  border-radius: 0.2rem;
  min-width: 160px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  background-color: ${({ type }) => cardColors[type]};
  position: relative;
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

export const Title = styled.h4`
  font-weight: bold;
`;

export const SubTitle = styled.p`
  font-size: 1rem;
`;

export const Avatar = styled.img`
  height: 90px;
`;
export const PokeBall = styled.img`
  position: absolute;
  height: 14px;
  top: 2px;
  right: 2px;
`;
