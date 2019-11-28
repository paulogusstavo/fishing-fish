import React, {Component} from 'react';
import MapContainer from '../services/maps';
import firebase from 'firebase';

class Profile extends Component {

    constructor(props) {
      super(props);
    }

      render() {
        return (
          <div>
            <MapContainer id={this.props.match.params.id}></MapContainer>
          </div>
      );
      }
      
  }
  
  
  export default Profile;

