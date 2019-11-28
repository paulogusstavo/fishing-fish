import React, {Component} from 'react';
import MapContainer from '../services/maps';
import firebase from 'firebase';
import Navigation from './navigation';

class Profile extends Component {

    constructor(props) {
      super(props);
    }

    state = {
    }

    componentDidMount() {

    }

      render() {
        return (
          <div>
            <Navigation></Navigation>
            <MapContainer></MapContainer>
          </div>
      );
      }
      
  }
  
  
  export default Profile;

