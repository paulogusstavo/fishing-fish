import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Redirect } from 'react-router';
import './facebook.css';
import DadosUsuario from './DadosUsuario';

export default class Facebook extends Component {
    state = {
        isLogged: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    }

    componentClicked = () => console.log("Clicou");
    responseFacebook = response => {
      DadosUsuario.sharedInstance.setData({
        isLogged: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });
      console.log(response);
      this.setState({
        isLogged: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });
    }

    render() {
        let fbContent;

        if(this.state.isLogged) {
          return <Redirect push to="/perfil" />
        } else {
            fbContent = (
                <FacebookLogin
                appId="422454525085213"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                textButton="Login with Facebook"
                callback={this.responseFacebook} 
                render={renderProps => (
                  <button class="loginBtn loginBtn--facebook" onClick={renderProps.onClick}>Login with Facebook</button>
                )}
                />
            );
        }

        return(
            <div>
              {fbContent}
            </div>
        )
    }
}