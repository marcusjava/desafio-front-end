import styled from "styled-components/macro";

export const Container = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 20px 0;
  font-weight: bold;
  font-size: 2rem;
`;

export const SubTitle = styled.span`
  font-size: 1.2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
