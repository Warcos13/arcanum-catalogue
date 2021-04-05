import React, { useState } from 'react';
import classes from './App.module.css';
import Router from './components/Router/Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Button, createMuiTheme, IconButton } from '@material-ui/core';
import customTheme from './helpers/themeConfig';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';

const App = () => {
  const theme = createMuiTheme(customTheme);

  const notistackRef = React.createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      ref={notistackRef}
      action={(key) => (
        <IconButton onClick={onClickDismiss(key)}>
          <i className={`${classes.closeSnackBtn} las la-times-circle`} />
        </IconButton>
      )}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      autoHideDuration={3000}
    >
      <ThemeProvider theme={theme}>
        <div className={classes.FullScreenContainer}>
          <Header />
          <div className={classes.contentContainer}>
            <Router />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </SnackbarProvider>
  );
};

export default App;
