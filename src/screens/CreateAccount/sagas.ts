import { call, put, takeLatest } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import fServ from "../../services/firebaseServices";
import {
  createAccountFailure,
  createAccountSuccess,
} from "../../store/actions/authActions";
import { StartCreateAccount } from "./types";
import { START_CREATE_ACCOUNT } from "./utils";

/**
 * @function: generator function - saga. Handling create account
 * @param newUserInfo: all data collected from create account form
 */
function* createAccount({ newUserInfo }: StartCreateAccount): SagaIterator {
  //create User
  const userCreationStatus = yield call(fServ.createUserService, newUserInfo);
  if (userCreationStatus.user) {
    const { firstName, lastName } = newUserInfo.name;

    //if User was created, update display Name (firebase only creates account with email and password)
    yield call(fServ.updateUserService, `${firstName} ${lastName}`);

    //store token in redux
    yield put(createAccountSuccess(userCreationStatus.user.accessToken));
  } else {
    //account creation failed
    yield put(createAccountFailure(userCreationStatus));
  }
}

export default function* createAccountSaga(): SagaIterator {
  yield takeLatest(START_CREATE_ACCOUNT, createAccount);
}
