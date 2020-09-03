import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/store';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: 'AIzaSyAJ5r4iSjNwCCCEyvjoq9pUPlhRGznqmfU',
  authDomain: 'arcanum-catalogue.firebaseapp.com',
  databaseURL: 'https://arcanum-catalogue.firebaseio.com',
  projectId: 'arcanum-catalogue',
  storageBucket: 'arcanum-catalogue.appspot.com',
  messagingSenderId: '61521143983',
  appId: '1:61521143983:web:2663beb5e10e5b571bcc5a',
  measurementId: 'G-ZCKHFPJHVH',
};
// Initialize Firebase
console.log('firebase');
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
