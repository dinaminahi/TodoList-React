import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAzbP_fCnQqYm5ySd5Sk1Ec71mnrSncjLU",
  authDomain: "todolist-8947f.firebaseapp.com",
  databaseURL: "https://todolist-8947f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todolist-8947f",
  storageBucket: "todolist-8947f.appspot.com",
  messagingSenderId: "658656224852",
  appId: "1:658656224852:web:48d2b27adb75637b46efc1"
};
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
