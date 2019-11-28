import React, { Component } from 'react';
import DadosUsuario from '../services/DadosUsuario';
import firebase from 'firebase';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: true,
      nome: "Paulo",
    }

  }

  render() {
    return (
      <div>
        <p>Ola, {this.state.nome}</p>
        <p>{this.state.isLogged ? "Sair" : "Entrar"}</p>
      </div>
    )
  }

}

export default Navigation;