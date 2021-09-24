import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import PokemonTypeList from "./pages/type-list";
import SignInAndSignUp from "./pages/sign-in-and-sign-up";
import { useSelector, useDispatch } from "react-redux";
import { checkUserSession } from "./redux/user/userActions";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pokemon/type/:type" component={PokemonTypeList} />
          <Route path="/detail/:name" component={Detail} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
