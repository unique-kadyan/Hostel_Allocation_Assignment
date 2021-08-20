import firebase from "firebase";

const firebaseConfig = {

    apiKey: "AIzaSyCrQSpZ6rWyFHX9doZ3eDKoRxSIbnuyL7g",

    authDomain: "hotelallocation.firebaseapp.com",

    projectId: "hotelallocation",

    storageBucket: "hotelallocation.appspot.com",

    messagingSenderId: "162585225442",

    appId: "1:162585225442:web:33ae5000c97eb89f0f96bb",

    measurementId: "G-Q5FB7WG33X"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  firebase.analytics();


  export default firebase;