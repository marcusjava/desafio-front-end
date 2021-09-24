import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const SearchInput = styled.input`
  margin: 1.5rem 0;
  border-radius: 25px;
  border: 1px solid #ef5350;
  font-size: 1rem;
  width: 40%;
  padding: 0.5rem 1rem;
  outline: none;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background-color: #fecc00;
  color: #1c488d;
  border: none;
  border: 1px solid #1c488d;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
