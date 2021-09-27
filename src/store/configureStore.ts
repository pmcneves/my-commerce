import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(sagas);

export default store;
