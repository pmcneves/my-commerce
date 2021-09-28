import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../containers/Header";
import Cart from "../screens/Cart";
import Homepage from "../screens/Homepage";
import ItemPage from "../screens/ItemPage";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/cart" component={Cart} />
        <Route path="/products/:id" component={ItemPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
