import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}></Route>

            <Route path="/about" exact component={About}></Route>

            <Route path="/portfolio" exact component={Portfolio}></Route>

            <Route path='/github' component={() => {
                window.location.href = 'https://github.com/leonardovaladao/';
                return null;
            }} />
        </BrowserRouter>
    )
}

export default Routes;