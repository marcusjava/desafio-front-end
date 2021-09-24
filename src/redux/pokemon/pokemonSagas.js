import { all, call, takeLatest, put } from "redux-saga/effects";

import axios from "axios";
import pokemonConstants from "./constants";

import {
  formatPokemonsData,
  formatPokemonData,
  formatPokemonsSpeciesData,
} from "./utils";
import {
  fetchPokemonsSuccess,
  fetchPokemonsError,
  fetchPokemonSuccess,
  fetchPokemonError,
  addPokemonToPokedexSuccess,
  addPokemonToPokedexFailure,
  removePokemonFromPokedexSuccess,
  removePokemonFromPokedexFailure,
} from "./pokemonActions";
import { userConstants } from "../user/constants";
import {
  addCollectionDocs,
  removeCollectionDocs,
  getPokedexDocs,
} from "../../util/firebase";

//////////////////////////////////////////////////////////////////////////////
export function* pokemonsSuccess(data) {
  yield put(fetchPokemonsSuccess(data));
}

export function* pokemonsError(error) {
  const { message } = error;
  yield put(fetchPokemonsError(message));
}

export function* fetchPokemonsStartAsync({ payload: url }) {
  try {
    const response = yield axios.get(url);
    const data = yield formatPokemonsData(response.data);
    yield call(pokemonsSuccess, data);
  } catch (error) {
    yield call(pokemonsError, error);
  }
}

export function* fetchPokemonsSpeciesStartAsync({ payload: url }) {
  try {
    const response = yield axios.get(url);
    const { pokemon } = response.data;
    const pokemons = yield formatPokemonsSpeciesData(pokemon);
    yield call(pokemonsSuccess, { pokemons });
  } catch (error) {
    yield call(pokemonsError, error.message);
  }
}
///////////////////////////////////////////////////////////////////////////////
export function* pokemonSuccess(data) {
  yield put(fetchPokemonSuccess(data));
}

export function* pokemonError(error) {
  const { message } = error;
  yield put(fetchPokemonError(message));
}

export function* fetchPokemonStartAsync({ payload: url }) {
  try {
    const response = yield axios.get(url);
    const data = yield formatPokemonData(response.data);
    yield call(pokemonSuccess, data);
  } catch (error) {
    yield call(pokemonError, error);
  }
}

//////////////////////////////////////////////////////////////////////////////////

export function* getPokedexFromFirebase({ payload: user }) {
  try {
    const response = yield getPokedexDocs(user.id);
    for (let item of response) {
      yield call(addPokedexSuccess, item);
    }
  } catch (error) {
    yield call(addPokedexError, error.message);
  }
}

////////////////////////////////////////////////////////////////////////////////
export function* addPokedexSuccess(captured) {
  yield put(addPokemonToPokedexSuccess(captured));
}

export function* addPokedexError(message) {
  yield put(addPokemonToPokedexFailure(message));
}

export function* addPokemonToPokedexStart({ payload: { pokemon, userId } }) {
  try {
    const captured = yield addCollectionDocs("pokedex", { ...pokemon, userId });
    yield call(addPokedexSuccess, captured);
  } catch (error) {
    yield call(addPokedexError, error.message);
  }
}
/////////////////////////////////////////////////////////////////////////////////
export function* removePokedexSuccess(id) {
  yield put(removePokemonFromPokedexSuccess(id));
}

export function* removePokedexError(error) {
  yield put(removePokemonFromPokedexFailure(error));
}
export function* removePokemonFromPokedexStart({ payload }) {
  try {
    yield removeCollectionDocs("pokedex", payload);
    yield call(removePokedexSuccess, payload);
  } catch (error) {
    yield call(removePokedexError, error.message);
  }
}
/////////////////////////////////////////////////////////////////////////////////
/* listeners */
export function* onFetchPokemonsStart() {
  yield takeLatest(
    pokemonConstants.FETCH_POKEMONS_START,
    fetchPokemonsStartAsync
  );
}

export function* onFetchPokemonStart() {
  yield takeLatest(
    pokemonConstants.FETCH_POKEMON_START,
    fetchPokemonStartAsync
  );
}

export function* onFetchPokemonsSpeciesStart() {
  yield takeLatest(
    pokemonConstants.FETCH_POKEMONS_BY_SPECIE_START,
    fetchPokemonsSpeciesStartAsync
  );
}

export function* onAddPokemonToPokedexStart() {
  yield takeLatest(
    pokemonConstants.ADD_POKEMON_TO_POKEDEX_START,
    addPokemonToPokedexStart
  );
}

export function* onRemovePokemonFromPokedexStart() {
  yield takeLatest(
    pokemonConstants.REMOVE_POKEMON_FROM_POKEDEX_START,
    removePokemonFromPokedexStart
  );
}

export function* onLoginSuccess() {
  yield takeLatest(userConstants.SIGN_IN_SUCCESS, getPokedexFromFirebase);
}

export function* onLogoutSuccess() {
  yield takeLatest(userConstants.SIGN_OUT_SUCCESS, onLogoutSuccess);
}

export function* pokemonSagas() {
  yield all([
    call(onFetchPokemonsStart),
    call(onFetchPokemonStart),
    call(onFetchPokemonsSpeciesStart),
    call(onLoginSuccess),
    call(onAddPokemonToPokedexStart),
    call(onRemovePokemonFromPokedexStart),
  ]);
}
