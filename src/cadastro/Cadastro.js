import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './cadastro.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cabecalho (){

  return (
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
                            <form class="user">
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0"><input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="First Name" name="first_name" /></div>
                                    <div class="col-sm-6"><input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="Last Name" name="last_name" /></div>
                                </div>
                                <div class="form-group"><input type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address" name="email" /></div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0"><input type="password" class="form-control form-control-user" id="examplePasswordInput" placeholder="Password" name="password" /></div>
                                    <div class="col-sm-6"><input type="password" class="form-control form-control-user" id="exampleRepeatPasswordInput" placeholder="Repeat Password" name="password_repeat" /></div>
                                </div><button class="btn btn-primary btn-block text-white btn-user" type="submit">Registrar</button>
                                <hr />
                                <a class="btn btn-primary btn-block text-white btn-google btn-user" role="button">
                                  <i class="fab fa-google"></i> 
                                  Register with Google
                                  </a>
                                <a class="btn btn-primary btn-block text-white btn-facebook btn-user" role="button">
                                  <i class="fab fa-facebook-f"></i> 
                                    Register with Facebook</a>
                                <hr/>

                            </form>
                            <div class="text-center"><a class="small" href="forgot-password.html">Esqueceu a senha?</a></div>
                            <div class="text-center"><a class="small" href="login.html">Já possui uma conta? Entre!</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

class Cadastro extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Cabecalho></Cabecalho>

      </div>
    );
  }


}
export default Cadastro;