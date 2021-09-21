import { call, put, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { setDataFromApi, setDataFromApiFailed } from './actions';
import { FETCH_DATA } from './utils';

function* dataFromApi(): SagaIterator {
    try {
        const dataJson = yield call(() =>
            fetch('https://fakestoreapi.com/products').then(res => res.json())
        );
        yield put(setDataFromApi(dataJson));
    } catch (e) {
        const errorMessage = 'Something happened! Please refresh website';
        yield put(setDataFromApiFailed(errorMessage));
    }
}

export default function* homepageSagas(): SagaIterator {
    yield takeLatest(FETCH_DATA, dataFromApi);
}
