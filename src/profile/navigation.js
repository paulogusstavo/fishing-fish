import React, { Component } from 'react';
import firebase from 'firebase';

class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      nome: "",
    }

  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isLogged: true,
          nome: user.displayName.split(' ')[0]
        })
      }
    });
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