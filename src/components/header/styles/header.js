import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #ef5350;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  margin: 5px;
  height: 150px;
`;

export const LinkText = styled(Link)`
  color: white;
  margin: 10px;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin-right: 20px;
`;

export const User = styled.span`
  font-weight: bold;
  color: white;
`;

export const Logout = styled.span`
  cursor: pointer;
  color: white;
  text-decoration: underline;
`;
