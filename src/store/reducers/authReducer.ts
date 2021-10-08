import { AuthActions, AuthModel } from "../../screens/CreateAccount/types";
import {
  CREATE_ACCOUNT_FAILURE,
  CREATE_ACCOUNT_SUCCESS,
  START_CREATE_ACCOUNT,
} from "../../screens/CreateAccount/utils";

const initialState: AuthModel = {
  loading: false,
  loaded: true,
  isAuthed: false,
  userToken: "",
  error: {
    errorCode: "",
    errorMessage: "",
  },
};

const authReducer = (state = initialState, action: AuthActions): AuthModel => {
  switch (action.type) {
    case START_CREATE_ACCOUNT:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        isAuthed: true,
        userToken: action.userToken,
      };
    case CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: true,
        isAuthed: false,
        error: {
          errorCode: action.error.errorCode,
          errorMessage: action.error.errorMessage,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
