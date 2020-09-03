import React from 'react';
import classes from './App.module.css';
import Router from './components/Router/Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className={classes.FullScreenContainer}>
    <Header />
    <div className={classes.contentContainer}>
      <Router />
    </div>
    <Footer />
  </div>
);

export default App;
