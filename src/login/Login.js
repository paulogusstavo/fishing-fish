import React, {Component} from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import firebase from 'firebase';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import firebase from '../services/conexaodb';
import FacebookLogin from 'react-facebook-login';

//function Cabecalho (){
  //return (
    //<div>
      //teste
    //</div>
  //)
//}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estaLogado: false,
      nome: '',
      email: '',
      senha: '',
      imagem: ''
    };

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //alert("Mudou");
        firebase.database().ref('usuario').child(user.uid).set({
          email: this.state.email,
          senha: this.state.senha
        })
        .then(() => {
          this.setState({
            email: "",
            senha: ""
          })
        })
      }
    });
    this.logar = this.logar.bind(this);
  }  


    logar (e) {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then((success) => {
          alert("login com sucess!\n" + this.state.nome);
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert("Email invalido!");
              break;
            case 'auth/invalid-password':
              alert("Senha invalida!");
              break;
            break;
            default:
              alert("ERRO: " + error.code)
              break;
          }
        })
        e.preventDefault();
    }

    
 //<Cabecalho></Cabecalho>
  render() {
    return (
      <div class="container">
      <div class="card shadow-lg o-hidden border-0 my-5">
        <div class="card-body p-0">
          <div class="p-7">     
            <div class="text-center">
              <h4 class="text-dark mb-4">Login</h4>
            </div>
            <form onSubmit={this.cadastrar}>
              <div class="form-group row">
                <input type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
              </div>
              <div class="form-group row">
                <input type="password" class="form-control form-control-user" id="examplePasswordInput" placeholder="Senha" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/>   
              </div> 
              <br></br>
              <button class="btn btn-primary btn-block text-white btn-user" type="submit">Logar</button>
              <hr/>
            </form>
          </div> 
        </div>
      </div>
    </div>
    );
  }
}
export default Login;