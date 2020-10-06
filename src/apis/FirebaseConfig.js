
import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBFaCBjJ521plUCMGykV68RSCd78qbck5w",
    authDomain: "imageupload-8ec7f.firebaseapp.com",
    databaseURL: "https://imageupload-8ec7f.firebaseio.com",
    projectId: "imageupload-8ec7f",
    storageBucket: "imageupload-8ec7f.appspot.com",
    messagingSenderId: "391439115956",
    appId: "1:391439115956:web:3703475de9da9ad43d19e1",
    measurementId: "G-3PWC1TQ6P8"
  };
const FirebaseConfig= firebase.initializeApp(config);

export default FirebaseConfig;