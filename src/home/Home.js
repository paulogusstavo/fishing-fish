import React from 'react';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import Cadastro from '../cadastro/Cadastro';

function Home() {
  return (
    <div>

    <h1>BEM VINDO AO FISHING FISH</h1>
    <Link to="/cadastro">Cadastrar</Link>
    
    </div>
  );
}

export default Home;
