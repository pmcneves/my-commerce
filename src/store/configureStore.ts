import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = () => {
  if (process.env.NODE_ENV === "production") {
    return compose(applyMiddleware(sagaMiddleware));
  } else {
    return composeWithDevTools(applyMiddleware(sagaMiddleware));
  }
};

const store = createStore(
  rootReducer,
  composeEnhancer()
);
sagaMiddleware.run(sagas);

export default store;
