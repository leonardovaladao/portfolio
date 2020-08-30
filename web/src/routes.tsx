import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/about" exact component={About}></Route>
        </BrowserRouter>
    )
}

export default Routes;