import React, {Component} from 'react';

export default class DadosUsuario {

    static myInstance = null;
    
    static getInstance() {
        if (DadosUsuario.myInstance == null) {
            DadosUsuario.myInstance = new DadosUsuario();
        }
        return this.myInstance;
    }
    
    _state = {
        _isLogged: false,
        _userID: "",
        _name: "",
        _email: "",
        _picture: ""
    }

    static getUserID() {
        return DadosUsuario.getInstance()._state;
    }

    static setState(state) {
        DadosUsuario.getInstance()._state = {
            _isLogged: state.isLogged,
            _userID: state.userID,
            _name: state.name,
            _email: state.email,
            _picture: state.picture
        }
    }

}
