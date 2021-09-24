import React, { useState } from "react";
import CustomButton from "../custom-button";
import FormInput from "../form-input";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../redux/user/userActions";
import {
  Container,
  Title,
  SubTitle,
  Form,
  ButtonContainer,
} from "./styles/sign-up";

function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      dispatch(signUpStart({ email, password, displayName }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Title>Não possuo uma conta</Title>
      <SubTitle>Cadastre-se com seu email</SubTitle>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Nome"
          name="displayName"
          value={displayName}
          handleChange={(e) => setDisplayName(e.target.value)}
          required
        />
        <FormInput
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          type="password"
          placeholder="Senha"
          name="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormInput
          type="password"
          placeholder="Confirme a senha"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <ButtonContainer>
          <CustomButton type="submit">REGISTRAR</CustomButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
}

export default SignUp;
