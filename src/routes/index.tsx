import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../containers/Header';
import Homepage from '../screens/Homepage';

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Homepage} exact />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;
