import { userConstants } from "./constants";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userConstants.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userConstants.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case userConstants.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };

    case userConstants.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
