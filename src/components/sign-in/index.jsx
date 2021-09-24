import React, { useState, useEffect } from "react";
import CustomButton from "../custom-button";
import FormInput from "../form-input";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Title,
  SubTitle,
  ButtonContainer,
  ErrorMessage,
} from "./styles/sign-in";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/userActions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const { currentUser, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) history.push("/");
  }, [currentUser, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  return (
    <Container>
      <Title>Já possuo uma conta</Title>
      <SubTitle>Entre com seu Email e Senha</SubTitle>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          placeholder="Informe o email"
          name="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          type="password"
          placeholder="Informe a senha"
          name="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonContainer>
          <CustomButton type="submit">LOGIN</CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleButton
          >
            GOOGLE
          </CustomButton>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default SignIn;
