import React from 'react';
import generateClasses from './Header.classes';
import Button from '@material-ui/core/Button';
import logo from '../../assets/img/logo.png';
import { history } from '../../helpers/history';

const handleOpenCart = () => {
  history.push('/arcanum-catalogue/checkout');
};

const handleOpenAdminTemp = () => {
  history.push('/arcanum-catalogue/admin');
};

const Header = () => {
  const classes = generateClasses();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.logoContainer}>
        <img src={logo} />
      </div>
      <div className={classes.buttonsContainer}>
        <Button className={classes.shopButton} onClick={handleOpenAdminTemp}>
          Go to Admin Temp
        </Button>
        <Button className={classes.shopButton} onClick={handleOpenCart}>
          <i className={`las la-shopping-cart ${classes.icon}`} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
