import React from "react";
import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";
import { Container } from "./styles/signInAndSignUp";

// import { Container } from './styles';

function SignInAndSignUp() {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
}

export default SignInAndSignUp;
