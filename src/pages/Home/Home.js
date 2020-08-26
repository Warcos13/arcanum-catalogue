import React from 'react';
import { history } from '../../helpers/history';
import { Redirect } from 'react-router-dom';

const Home = () => {
  const handleClick = () => {
    history.push('/catalogue');
  };

  return <Redirect to="/catalogue" />;
};

export default Home;
