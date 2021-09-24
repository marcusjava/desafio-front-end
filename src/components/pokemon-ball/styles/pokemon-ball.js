import styled from "styled-components/macro";

export const Container = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 34px;
  height: 34px;
`;

export const Count = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`;

export const CountContainer = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  left: -5px;
  bottom: 0px;
  text-align: center;
`;
