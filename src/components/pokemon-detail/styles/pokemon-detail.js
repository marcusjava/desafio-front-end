import styled from "styled-components/macro";
import { Link } from "react-router-dom";

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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
  gap: 1.2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StatsContainer = styled.div`
  width: 50%;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;
export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Detail = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const Avatar = styled.img`
  height: 250px;
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

export const Description = styled.p``;

export const Badge = styled(Link)`
  margin: 0 0.25rem;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  border-radius: 0.25rem;
  padding: 0.35em 0.65em;
  text-align: center;
  cursor: pointer;
  background-color: ${({ type }) => cardColors[type]};
`;

export const Ball = styled.img`
  height: 50px;
`;

export const Button = styled.button`
  border-radius: 5px;
  background-color: #ef5350;
  border: none;
  padding: 0.2rem 0.4rem;
  margin: 1rem 0;
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;

export const AbilityContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 15px 0;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
