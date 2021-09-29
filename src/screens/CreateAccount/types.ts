import { START_CREATE_ACCOUNT } from "./utils";

export type CreateAccountData = {
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  username: string;
  password: string;
  address: string;
  phone: string;
};

export type StartCreateAccount = {
  type: typeof START_CREATE_ACCOUNT;
  data: CreateAccountData;
};
