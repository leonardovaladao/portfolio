import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Portgit from './pages/Portfolio/github';
import Contact from './pages/Contact';
import Curriculo from './pages/Curriculo';

function Routes() {
    return (
        <HashRouter>
            <Route path="/" exact component={Landing}></Route>

            <Route path="/about" exact component={About}></Route>

            <Route path="/portfolio" exact component={Portfolio}></Route>

            <Route path="/contact" exact component={Contact}></Route>

            <Route path="/curriculum" exact component={Curriculo}></Route>

            <Route path="/portfolio/github" exact component={Portgit}></Route>
        </HashRouter>
    )
}

export default Routes;