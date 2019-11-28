import React, {Component} from 'react';
import firebase from 'firebase';

class FishRegister extends Component {

    constructor(props) {
      super(props);

      this.state = {
        especie: "",
        peso: "",
        comprimento: "",
        latitude: "",
        longitude: ""
      }

      this.insertFish = this.insertFish.bind(this);
    }

    async insertFish() { //TODO: Validade form.
      await firebase.auth().currentUser.getIdTokenResult()
      .then( (result) => {
        let userUID = result.claims.user_id;
      
        firebase.database().ref(userUID).child("fishes")
        .push({
          especie:this.state.especie, 
          peso:this.state.peso, 
          comprimento:this.state.comprimento,
          latitude:this.state.latitude,
          longitude: this.state.longitude
        });  
      })
      .catch((error) => {
        console.log(error);
      });
    }
  
    render() {
      return (
        <div>
          <input type="text" placeholder="Espécie" onChange={(e) => this.setState({especie: e.target.value})}/> 
          <br></br><br></br>
          <input type="text" placeholder="Peso" onChange={(e) => this.setState({peso: e.target.value})}/> 
          <br></br><br></br>
          <input type="text" placeholder="Comprimento" onChange={(e) => this.setState({comprimento: e.target.value})}/> 
          <br></br><br></br>
          <input type="text" placeholder="latitude" onChange={(e) => this.setState({latitude: e.target.value})}/> 
          <br></br><br></br>
          <input type="text" placeholder="longitude" onChange={(e) => this.setState({longitude: e.target.value})}/> 
          <br></br><br></br>
          <button onClick={this.insertFish}>Inserir</button>
        </div>
      );
    }
      
  }
  
  export default FishRegister;
