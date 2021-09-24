import styled, { css } from "styled-components/macro";

const GoogleButton = css`
  background-color: #4285f4;
  color: white;
  font-size: 12px;

  &:hover {
    background-color: #357a83;
    border: none;
  }
`;

const InvertedButton = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Montserrat";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  ${(props) => props.isGoogleButton && GoogleButton}
  ${(props) => props.inverted && InvertedButton}
`;
