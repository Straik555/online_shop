import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Phones from "./containers/Phones";
import Phone from './containers/Phone';
import Basket from './containers/Basket';

export default (
    <Router>
        <Switch>
            <Route exact path='/' component={Phones} />
            <Route exact path='/phone/:id' component={Phone} />
            <Route exact path='/categories/:id' component={Phones} />
            <Route exact path='/basket' component={Basket} />
        </Switch>
    </Router>

)