import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyCrQSpZ6rWyFHX9doZ3eDKoRxSIbnuyL7g",

    authDomain: "hotelallocation.firebaseapp.com",

    projectId: "hotelallocation",

    storageBucket: "hotelallocation.appspot.com",

    messagingSenderId: "162585225442",

    appId: "1:162585225442:web:33ae5000c97eb89f0f96bb",

    measurementId: "G-Q5FB7WG33X"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

