import { takeLatest } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import { GET_ITEM } from "./utils";

function* getItem(id:string): SagaIterator {
    console.log(id) 
}

export function* getItemSaga(): SagaIterator {
    yield takeLatest(GET_ITEM, getItem)
}