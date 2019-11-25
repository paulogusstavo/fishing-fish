import React, {Component} from 'react';

export default class DadosUsuario {
    static sharedInstance = DadosUsuario.sharedInstance == null ? new DadosUsuario() : this.sharedInstance

    state = {
        isLogged: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    }

    setData(props) {
        this.state = {
            isLogged: props.isLogged,
            userID: props.userID,
            name: props.name,
            email: props.name,
            picture: props.picture
        }
    }

    getData(){
        return this.state;
    }
}
