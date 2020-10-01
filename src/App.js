import React, { useState } from 'react';
import classes from './App.module.css';
import Router from './components/Router/Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Button, Message, TransitionablePortal } from 'semantic-ui-react';

const App = () => {
  const [visible, setVisible] = useState(false);

  let timeOut;

  const handleVisibility = () => {
    setVisible(true);
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      setVisible(false);
    }, 3000);
  };
  const handleClose = () => setVisible(false);
  return (
    <div className={classes.FullScreenContainer}>
      <Header />
      <Button content={'Test'} onClick={handleVisibility} />
      <div className={classes.contentContainer}>
        <Router />
      </div>
      <Footer />
      <TransitionablePortal
        open={visible}
        transition={{ animation: 'fade up', duration: 500 }}
        onClose={handleClose}
      >
        <Message
          className={classes.messagePortal}
          floating
          color={'negative'}
          header="Your user registration was successful"
          content="You may now log-in with the username you have chosen"
        />
      </TransitionablePortal>
    </div>
  );
};

export default App;
