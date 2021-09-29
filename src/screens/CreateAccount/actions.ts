import { CreateAccountData, StartCreateAccount } from "./types";
import { START_CREATE_ACCOUNT } from "./utils";

export const startCreateAccount = (
  data: CreateAccountData
): StartCreateAccount => ({
  type: START_CREATE_ACCOUNT,
  data,
});
