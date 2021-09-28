import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routes";
import { fetchDataFromApi } from "./screens/Homepage/actions";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";
import httpInterceptor from "./http/httpInterceptor";

httpInterceptor();

const store = configureStore;
store.dispatch(fetchDataFromApi());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
