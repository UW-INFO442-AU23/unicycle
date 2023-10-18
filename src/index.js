import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTRy3I87K7ZWLNYqovYZY-zHo-iosUPqc",
  authDomain: "unicycle-f1cf4.firebaseapp.com",
  projectId: "unicycle-f1cf4",
  storageBucket: "unicycle-f1cf4.appspot.com",
  messagingSenderId: "258287418145",
  appId: "1:258287418145:web:07dadf8de6db3c7d931c60"
};
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);