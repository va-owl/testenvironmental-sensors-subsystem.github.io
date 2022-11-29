import firebase from 'firebase/app'
import 'firebase/database'


// Web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBiwX2cdsQOd08XitIbaCEWVuuE9vIR_1k",
    authDomain: "projectweatherstation-f2ae5.firebaseapp.com",
    databaseURL: "https://projectweatherstation-f2ae5-default-rtdb.firebaseio.com",
    projectId: "projectweatherstation-f2ae5",
    storageBucket: "projectweatherstation-f2ae5.appspot.com",
    messagingSenderId: "283662330801",
    appId: "1:283662330801:web:fbc26012213aa344beeb90"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const dbRef=fb.database().ref("Weather/updated");
export const dbRefHist=fb.database().ref("Weather/history");
export const dbRefMinMax=fb.database().ref("Weather/MinMaxToday");
export const db = fb.database(); 