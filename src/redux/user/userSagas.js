import { takeLatest, call, all, put } from "redux-saga/effects";
import { userConstants } from "./constants";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../util/firebase";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from "./userActions";

/* 
    pegando as informações do usuario e efetuando o login

*/
export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
/* 
    efetuando login com google provider
*/
export function* signInWithGoogle() {
  const { user } = yield auth.signInWithPopup(googleProvider);
  yield call(getSnapshotFromUserAuth, user);
}

export function* signInWithEmail({ payload: { email, password } }) {
  const { user } = yield auth.signInWithEmailAndPassword(email, password);
  yield call(getSnapshotFromUserAuth, user);
}

//loggoff com firebase auth
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure());
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  const { user } = yield auth.createUserWithEmailAndPassword(email, password);
  yield call(getSnapshotFromUserAuth, { ...user, displayName });
}
/* 
    listener para o login do google
*/
export function* onGoogleSignInStart() {
  yield takeLatest(userConstants.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

//listener para login por email
export function* onEmailSignInStart() {
  yield takeLatest(userConstants.EMAIL_SIGN_IN_START, signInWithEmail);
}

//listener para o loggoff
export function* onSignOutStart() {
  yield takeLatest(userConstants.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(userConstants.SIGN_UP_START, signUp);
}

export function* onCheckUserSession() {
  yield takeLatest(userConstants.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onCheckUserSession),
  ]);
}
