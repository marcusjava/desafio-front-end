import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const CustomDropdown = styled.div`
  position: absolute;
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  top: 60px;
  right: 20px;
  z-index: 5;
`;

export const LinkText = styled(Link)`
  text-align: center;
  margin-top: auto;
`;

export const Items = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  position: relative;
`;

export const NoItems = styled.p`
  margin: auto;
`;

export const Button = styled.button`
  margin-top: auto;
`;
