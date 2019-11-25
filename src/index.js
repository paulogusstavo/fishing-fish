import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Cadastro from './cadastro/Cadastro';
import Home from './home/Home';
import Login from './login/Login';
import Profile from './profile/profile';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/perfil" component={Profile} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
