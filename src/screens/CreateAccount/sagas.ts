import { takeLatest } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import { START_CREATE_ACCOUNT } from "./utils";

// eslint-disable-next-line require-yield
function* createAccount({newUser}: any): SagaIterator {
    fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(newUser)
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}

export default function* createAccountSaga(): SagaIterator {
    yield takeLatest(START_CREATE_ACCOUNT, createAccount)
}