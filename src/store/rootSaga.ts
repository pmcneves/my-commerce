  
import { all } from "redux-saga/effects";
import cartSagas from "../screens/Cart/sagas";
import homepageSagas from "../screens/Homepage/sagas";
import getItemSaga from "../screens/ItemPage/sagas";

export default function* sagas(): Generator {
  yield all([
    homepageSagas(),
    getItemSaga(),
    cartSagas()
  ]);
}