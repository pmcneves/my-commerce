import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../containers/Header";
import Cart from "../screens/Cart";
import Homepage from "../screens/Homepage";
import ItemPage from "../screens/ItemPage";
import CreateAccount from "../screens/CreateAccount";
import Overlay from "../components/Overlay";
import LoginPopin from "../components/LoginPopin";
import Sidebar from "../components/Sidebar";
import ScrollButton from "../components/Button/ScrollBtn";
import { isHeaderHeightReduced } from "../store/selectors/headerToggleSelectors";
import { useSelector } from "react-redux";

const AppRouter: React.FC = () => {
  const hasHeaderHeightChanged = useSelector(isHeaderHeightReduced);

  return (
    <BrowserRouter>
      <Header />
      <Overlay />
      <LoginPopin />
      <Sidebar />
      <main className={`container-padding ${hasHeaderHeightChanged ? 'container-padding__header-height-change' : ''}`}>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/cart" component={Cart} />
          <Route path="/products/:id" component={ItemPage} />
          <Route path="/create-account" component={CreateAccount} />
        </Switch>
      </main>
      <ScrollButton/>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
