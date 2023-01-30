import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

 // Depends on the Firebase account, so create "Firebase Project Account"
 // and choose Firebase Database in Project Account
 // The config for the firebase can be found in,  Project Overview > Project settings > General > Your Apps
const firebaseConfig = {
};

// Here it is just configuring the app to talk to fire base when it starts running 
initializeApp(firebaseConfig);

// Hosting the app to the browser
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
