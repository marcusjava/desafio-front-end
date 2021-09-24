import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  width: 90%;
  border-radius: 3px;
  border: 1px solid red;
  font-size: 1.5rem;
  margin: 1.5rem 0;
  background-color: #ef5350;
  color: white;
  cursor: pointer;
  padding: 0.6rem 0;

  &:hover {
    opacity: 0.8;
  }
`;
