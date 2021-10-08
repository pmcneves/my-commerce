import {
  AuthFailError,
  CreateAccountData,
  CreateAccountFailure,
  CreateAccountSuccess,
  StartCreateAccount,
} from "../../screens/CreateAccount/types";
import {
  START_CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
} from "../../screens/CreateAccount/utils";

export const startCreateAccount = (
  newUserInfo: CreateAccountData
): StartCreateAccount => ({
  type: START_CREATE_ACCOUNT,
  newUserInfo,
});

export const createAccountSuccess = (userToken: string): CreateAccountSuccess => ({
  type: CREATE_ACCOUNT_SUCCESS,
  userToken,
});

export const createAccountFailure = (
  error: AuthFailError
): CreateAccountFailure => ({
  type: CREATE_ACCOUNT_FAILURE,
  error,
});
