import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../containers/Header";
import Cart from "../screens/Cart";
import Homepage from "../screens/Homepage";
import ItemPage from "../screens/ItemPage";
import CreateAccount from "../screens/CreateAccount";
import Overlay from "../components/Overlay";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Overlay />
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/cart" component={Cart} />
        <Route path="/products/:id" component={ItemPage} />
        <Route path="/create-account" component={CreateAccount} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
