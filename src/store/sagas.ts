  
import { all } from "redux-saga/effects";
import homepageSagas from "../screens/Homepage/sagas";

export default function* sagas(): Generator {
  yield all([
    homepageSagas()
  ]);
}