import React, {Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import Impact from './Impact';
import Reports from "./Reports";
import Error from './Error'

const Routes = () => {
    const location = useLocation();

    return (
        <Suspense
            fallback={
                <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
                    <div className="w-50 mx-auto">
                        Please wait while we load your pages
                    </div>
                </div>
            }>
            <Switch>
                <Redirect exact from="/" to="/Reports" />
                <Route
                    path={[
                        '/Impact',
                        '/Reports',
                        '/Error',
                    ]}>
                    <Switch location={location} key={location.pathname}>
                        <Route path="/Reports" component={Reports}/>
                        <Route path="/Impact" component={Impact}/>
                        <Route path="/Error" component={Error}/>
                    </Switch>
                </Route>
            </Switch>
        </Suspense>
    );
};

export default Routes;