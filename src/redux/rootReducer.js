import { combineReducers } from "redux";

import pokemonReducer from "./pokemon/pokemonReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  user: userReducer,
});

export default rootReducer;
