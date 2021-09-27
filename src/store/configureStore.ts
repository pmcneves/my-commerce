import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = () => {
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === "production") {
    console.log('1')
    return compose(applyMiddleware(sagaMiddleware));
  } else {
    console.log('2')
    return composeWithDevTools(applyMiddleware(sagaMiddleware));
  }
};

const store = createStore(
  rootReducer,
  composeEnhancer()
);
sagaMiddleware.run(sagas);

export default store;
