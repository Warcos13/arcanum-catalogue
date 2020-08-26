import React from 'react';
import { history } from '../../helpers/history';
import { Redirect } from 'react-router-dom';

const Home = () => {
  const handleClick = () => {
    history.push('/arcanum-catalogue/catalogue');
  };

  return <Redirect to="/arcanum-catalogue/catalogue" />;
};

export default Home;
