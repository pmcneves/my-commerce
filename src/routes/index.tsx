import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import Header from '../containers/Header';
import Homepage from '../screens/Homepage';

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Sidebar />
            <Switch>
                <Route path="/" component={Homepage} exact />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;
