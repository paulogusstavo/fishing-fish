import React, {Component} from 'react';
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
  }
  render() {
    return (
      <div>
        <Cabecalho></Cabecalho>
        
      </div>
    );
  }


}
export default Login;