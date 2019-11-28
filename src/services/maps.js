import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import firebase from 'firebase';

export class GoogleMaps extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      stores: []
    }

  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref(user.uid).child("fishes")
        .on("value", (snapshot)=>{
          let points = []
          snapshot.forEach( (fish) => {
            points.push({
              latitude: fish.val().latitude,
              longitude: fish.val().longitude,
            });
          });
          this.setState({
            stores: points
          })
          console.log("Paulo->", this.state.stores)
        });
      }
    });
  }

  marcadoresLocais = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("Clicou no marcador")} />
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={{ lat: -25.4284, lng: -49.2733}}
        >
          {this.marcadoresLocais()}
        </Map>
    );
  }
}

const mapStyles = {
  width: '95%',
  height: '95%',
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAri8vnS36YthKIQHjsQ2oXDwz-t2quT9Q'
})(GoogleMaps)