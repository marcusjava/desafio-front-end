import React from "react";
import logo from "../../assets/logo2.png";
import PokemonBall from "../pokemon-ball";
import {
  Container,
  Logo,
  LinkText,
  MenuContainer,
  User,
  Logout,
} from "./styles/header";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutStart } from "../../redux/user/userActions";

function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const history = useHistory();

  const logoutUser = () => {
    dispatch(signOutStart());
    history.push("/");
    window.location.reload();
  };
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <MenuContainer>
        {currentUser ? (
          <User>
            Seja bem vindo, {currentUser.displayName.slice(0, 8)}...{" "}
            <Logout onClick={logoutUser}>Sair</Logout>
          </User>
        ) : (
          <LinkText to="/signin">Entrar</LinkText>
        )}
        <PokemonBall />
      </MenuContainer>
    </Container>
  );
}

export default Header;
