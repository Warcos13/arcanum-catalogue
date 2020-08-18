import React from 'react';
import classes from './App.module.css';
import Router from './components/Router/Router';
import configureStore from './store/testStore';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

configureStore();
const App = () => (
  <div className={classes.FullScreenContainer}>
    <Header />
    <Router />
    <Footer />
  </div>
);

export default App;
