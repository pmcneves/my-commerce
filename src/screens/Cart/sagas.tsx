import { put, select, takeLatest } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import { setCart } from "./actions";
import { cartSlice } from "./selectors";
import { GET_CART } from "./utils";

function* fetchCart(): SagaIterator {
  const currentCart = yield select(cartSlice);
  if(currentCart.length !== 0) {
      yield put(setCart(currentCart));
  } else {
    console.log('cart is empty')
  }
}

export default function* cartSagas(): SagaIterator {
  yield takeLatest(GET_CART, fetchCart);
}
