import React, {Component} from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import './cadastro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
import Facebook from '../services/Facebook';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Profile from '../profile/profile';

class Cadastro extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      nome: '',
      sobrenome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      email: "",
      imagem: ""
    };

    this.uiConfig = {
      signInFlow: "pop-up",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: function(currentUser, credential, redirectUrl) {
          // const userId = currentUser.uid; 

          window.location.assign(`/perfil/`);
          
          return false;
        },
        signInSucessWithAuthResult: function(currentUser, credential, redirectUrl) {
          return false;
        }
      }
    }

    this.componentDidMount = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {

          firebase.database().ref('usuario').child(user.uid).set({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome
          })
          .then(() => {
            this.setState({
              nome: "",
              sobrenome: "",
              senha: "",
              confirmarSenha: ""
            })
          })
        }
      });  
    }

    this.cadastrar = this.cadastrar.bind(this);

  }

  cadastrar (e) {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then((success) => {
        alert("cadastro com sucess!\n" + this.state.nome);
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            alert("Email invalido!");
            break;
          case 'auth/weak-password':
            alert("Senha fraca!");
            break;
          case 'auth/email-already-in-use':
            alert("Este email já existe.");
          break;
          default:
            alert("ERRO: " + error.code)
            break;
        }
      })
  
      e.preventDefault();
  }

  responseFacebook = (resposta) => {
    alert("-> ", resposta.picture.data.url);
    this.setState({
      nome: resposta.nome,
      email: resposta.email,
      //imagem: resposta.picture.data.url --Verificar
    });
  }

  render() {
    return (
      // <Teste></Teste>

      <div class="container">
      <div class="card shadow-lg o-hidden border-0 my-5">
          <div class="card-body p-0">
              <div class="row">
                  <div class="col-lg-5 d-none d-lg-flex"><img src={require('../images/cadastrar.png')}/></div>
                  <div class="col-lg-7">
                      <div class="p-5">
                          <div class="text-center">
                              <h4 class="text-dark mb-4">Crie sua conta</h4>
                          </div>
                          <form onSubmit={this.cadastrar}>
                              <div class="form-group row">
                                  <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input autoFocus type="text" class="form-control form-control-user" placeholder="Nome" value={this.state.nome} onChange={(e) => this.setState({nome:e.target.value})}/>
                                  </div>
                                  <div class="col-sm-6"><input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="Sobrenome" value={this.state.sobrenome} onChange={(e) => this.setState({sobrenome: e.target.value})}/></div>
                              </div>
                              <div class="form-group"><input type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/></div>
                              <div class="form-group row">
                                  <div class="col-sm-6 mb-3 mb-sm-0"><input type="password" class="form-control form-control-user" id="examplePasswordInput" placeholder="Senha" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/></div>
                                  <div class="col-sm-6"><input type="password" class="form-control form-control-user" id="exampleRepeatPasswordInput" placeholder="Confirmar senha" value={this.state.confirmarSenha} onChange={(e) => this.setState({confirmarSenha: e.target.value})}/></div>
                              </div>
                              <button class="btn btn-primary btn-block text-white btn-user" type="submit">Registrar</button>    
                              <hr></hr>
                              <div class="form-group row">
                                    <StyledFirebaseAuth
                                    uiConfig={this.uiConfig}
                                    firebaseAuth={firebase.auth()}
                                    />
                                  <div class="col-sm-6">
                                  
                                  </div>
                              </div>
                              <hr/>
                          </form>
                          <div class="text-center"><a class="small" href="forgot-password.html">Esqueceu a senha?</a></div>
                          <div class="text-center"><a class="small" href="/login">Já possui uma conta? Entre!</a></div>
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
  }


}
export default Cadastro;