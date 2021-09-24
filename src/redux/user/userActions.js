import { userConstants } from "./constants";

export const setCurrentUser = (user) => ({
  type: userConstants.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: userConstants.GOOGLE_SIGN_IN_START,
});
export const signInSuccess = (user) => ({
  type: userConstants.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userConstants.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userConstants.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: userConstants.CHECK_USER_SESSION,
});

export const signOutStart = () => ({ type: userConstants.SIGN_OUT_START });
export const signOutSuccess = () => ({ type: userConstants.SIGN_OUT_SUCCESS });
export const signOutFailure = (error) => ({
  type: userConstants.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (user) => ({
  type: userConstants.SIGN_UP_START,
  payload: user,
});
export const signUpSuccess = (user) => ({
  type: userConstants.SIGN_UP_SUCCESS,
  payload: user,
});
export const signUpFailure = (error) => ({
  type: userConstants.SIGN_UP_FAILURE,
  payload: error,
});
