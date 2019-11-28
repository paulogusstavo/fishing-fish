import React, {Component} from 'react';

export default class DadosUsuario {
    
    static myInstance = null;
    
    static getInstance() {
        if (DadosUsuario.myInstance == null) {
            DadosUsuario.myInstance = new DadosUsuario();
        }
        return this.myInstance;
    }
    
    _isLogged = false;
    _userID = "";
    _name = "";
    _email = "";
    _picture = "";

    getUserID() {
        return this._userID;
    }

    setUserID(id) {
        this._userID = id;
    }

}
