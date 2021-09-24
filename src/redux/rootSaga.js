import { all, call } from "redux-saga/effects";
import { pokemonSagas } from "./pokemon/pokemonSagas";
import { userSagas } from "./user/userSagas";

export default function* rootSaga() {
  yield all([call(pokemonSagas), call(userSagas)]);
}
