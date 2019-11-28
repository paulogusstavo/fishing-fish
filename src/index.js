import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Cadastro from './cadastro/Cadastro';
import Home from './home/Home';
import Login from './login/Login';
import Profile from './profile/profile';
import FishRegister from './profile/fishRegister';
import imageupload from './profile/imageupload';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/perfil/" component={Profile} />
            <Route exact path="/perfil/cadastro/peixe" component={FishRegister} />
            <Route exact path="/imageupload/" component={imageupload} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
