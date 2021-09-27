import { call, put, takeLatest } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import axios from "axios";
import { setItem } from "./action";
import { GET_ITEM } from "./utils";

type GetItemParams = {
    id: string,
    type: string
}
function* getItem({id}: GetItemParams): SagaIterator {
    try {
        const dataJson = yield call(() =>
            axios.get(`https://fakestoreapi.com/products/${id}`).then(res => res.data)
        );
        yield put(setItem(dataJson));
    } catch (e) {
        // const errorMessage = 'Something happened! Please refresh website';
        // yield put(setDataFromApiFailed(errorMessage));
    }
}


export default function* getItemSaga(): SagaIterator {
    yield takeLatest(GET_ITEM, getItem)
}