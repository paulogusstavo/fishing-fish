import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class GoogleMaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{latitude: -25.4284, longitude: -49.2733}]
    }
  }

  marcadoresLocais = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
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
  width: '100%',
  height: '100%',
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAri8vnS36YthKIQHjsQ2oXDwz-t2quT9Q'
})(GoogleMaps)