import React from 'react';
import { history } from '../../helpers/history';
import { Redirect } from 'react-router-dom';

const Home = () => {

  const handleClick = () => {
    history.push('/catalogue');
  };

  return (
    // <React.Fragment>
    //   <h1>HOME PAGE</h1>
    //   <button type="button" onClick={handleClick}>
    //     Go home
    //   </button>
    // </React.Fragment>
    <Redirect to="/catalogue" />
  );
};

export default Home;
