import React from 'react';
import classes from './Header.module.css';
import { Image, Button } from 'semantic-ui-react';
import logo from '../../assets/img/logo.png';
import { history } from '../../helpers/history';

const handleOpenCart = () => {
  history.push('/arcanum-catalogue/checkout');
};

const handleOpenAdminTemp = () => {
  history.push('/arcanum-catalogue/admin');
};

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.logoContainer}>
        <Image src={logo} />
      </div>
      <div className={classes.buttonsContainer}>
        <Button className={classes.shopButton} onClick={handleOpenAdminTemp}>
          Go to Admin Temp
        </Button>
        <Button icon className={classes.shopButton} onClick={handleOpenCart}>
          <i className={`las la-shopping-cart ${classes.icon}`} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
