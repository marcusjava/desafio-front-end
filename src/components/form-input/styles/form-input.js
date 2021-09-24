import styled from "styled-components/macro";

const sub_color = "grey";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px 10px 10px 5px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 25px 0;
  letter-spacing: ${(props) => (props.type === "password" ? "0.3em" : "0")};
`;

export const Label = styled.label`
  color: ${sub_color};
  font-size: 16px;
  font-weight: normal;
`;
