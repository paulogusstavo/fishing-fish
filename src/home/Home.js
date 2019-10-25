import React from 'react';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import Cadastro from '../cadastro/Cadastro';
import Login from '../login/Login';


function Home() {
  return (
    <div class="text-center">

    <h1>BEM VINDO AO FISHING FISH</h1>
    <Link to="/cadastro">Cadastrar</Link><br></br>
    <Link to="/login">Logar</Link>
    </div>
  );
}

export default Home;
