import React, {Component} from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import firebase from '../services/conexaodb';

function Cabecalho (){
  return (

    <div>
      teste
    </div>

  )
}

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: ''
    };

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        alert("Mudou");
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
      <div>
        <h1>Logar</h1>
        <form onSubmit={this.logar}>
          {/*<Link to="/cadastro"><button >Cadastrar</button> </Link> */}
        <div class="form-group row">
          <div class="col-sm-6 mb-3 mb-sm-0"><input class="form-control form-control-user"  placeholder="Email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/></div>
          <br></br>
          <div class="col-sm-6 mb-3 mb-sm-0"><input type="password" class="form-control form-control-user" id="examplePasswordInput" placeholder="Senha" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/></div>
        </div><button class="btn btn-primary btn-block text-white btn-user" type="submit">Registrar</button> 
        </form>
      </div>

    );
  }
}
export default Login;
