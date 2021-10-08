import {
  CREATE_ACCOUNT_FAILURE,
  START_CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
} from "./utils";

export type AuthFailError = {
  errorCode: string;
  errorMessage: string;
};

export type AuthModel = {
  loading: boolean;
  loaded: boolean;
  isAuthed: boolean;
  userToken: string,
  error: AuthFailError;
};

export type CreateAccountData = {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  username: string;
  password: string;
  address: string;
  phone: string;
};

export type StartCreateAccount = {
  type: typeof START_CREATE_ACCOUNT;
  newUserInfo: CreateAccountData;
};

export type CreateAccountSuccess = {
  type: typeof CREATE_ACCOUNT_SUCCESS;
  userToken: string,
};

export type CreateAccountFailure = {
  type: typeof CREATE_ACCOUNT_FAILURE;
  error: AuthFailError;
};

export type AuthActions =
  | StartCreateAccount
  | CreateAccountSuccess
  | CreateAccountFailure;
