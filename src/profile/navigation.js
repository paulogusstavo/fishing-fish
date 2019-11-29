import React, { Component } from 'react';
import firebase from 'firebase';
import './navigation.css';
import '../bootstrap/css/bootstrap.min.css';

class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      nome: "",
      imageProfile: ""
    }

  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.setState({
          isLogged: true,
          nome: user.displayName.split(' ')[0],
          imageProfile: user.photoURL
        })
      }
    });
  }

  render() {
    return (
      <div>
         
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1">
          <a class="navbar-brand" href="#">Fishing Fish</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
            aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Início</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">InserirImagem</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/perfil/cadastro/peixe">CadastroPeixe</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Mapa</a>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto nav-flex-icons">
            <li class="nav-item avatar">
                  <img src={this.state.imageProfile} class="rounded-circle z-depth-0"
                    alt="avatar image" width="32" height="32"></img>
              </li>
              <li class="nav-item userName">
                <span>Olá, {this.state.nome}</span>
              </li>
              
              {/* <p>{this.state.isLogged ? "Sair" : "Entrar"}</p> */}
            </ul>
          </div>
        </nav>

      </div>
    )
  }

}

export default Navigation;