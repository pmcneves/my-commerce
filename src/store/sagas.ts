  
import { all } from "redux-saga/effects";
import homepageSagas from "../screens/Homepage/sagas";
import getItemSaga from "../screens/ItemPage/sagas";

export default function* sagas(): Generator {
  yield all([
    homepageSagas(),
    getItemSaga()
  ]);
}