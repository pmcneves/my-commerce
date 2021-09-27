import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../containers/Header';
import Homepage from '../screens/Homepage';
import ItemPage from '../screens/ItemPage';

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Homepage} exact />
                <Route path="/products/:id" component={ItemPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;
