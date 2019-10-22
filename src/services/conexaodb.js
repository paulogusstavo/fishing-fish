import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAX3SXWBek6h82dZj3yi3btrDVUy3sYD9I",
    authDomain: "fishing-8bcc8.firebaseapp.com",
    databaseURL: "https://fishing-8bcc8.firebaseio.com",
    projectId: "fishing-8bcc8",
    storageBucket: "fishing-8bcc8.appspot.com",
    messagingSenderId: "913343571715",
    appId: "1:913343571715:web:b3f218796bb440dbeeab36"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;