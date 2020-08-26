import React from 'react';
import { Button, Divider } from 'semantic-ui-react';
import { history } from '../../helpers/history';
import classes from './Checkout.module.css';
import CheckoutProduct from '../../components/Product/CheckoutProduct/CheckoutProduct';

const handleBackToCatalogue = () => {
  history.push('/arcanum-catalogue/catalogue');
};
//TODO:Refactor to use SemanticUI grid
//TODO:Create a page wrapper to prevent using containers in each page
const Checkout = () => {
  return (
    <div className={classes.checkoutContainer}>
      <Button className={classes.backBtn} onClick={handleBackToCatalogue}>
        <i
          className={`las la-arrow-left ${classes.backArrow} ${classes.icon}`}
        />
        Regresar
      </Button>
      <CheckoutProduct></CheckoutProduct>
      <CheckoutProduct></CheckoutProduct>
      <CheckoutProduct></CheckoutProduct>
      <div className={classes.subtotalContainer}>
        <div className={classes.innerContainer}>
          <span className={classes.subtotal}>SUBTOTAL</span>
        </div>
        <div className={classes.innerContainer}>
          <span className={classes.totalPrice}>{` COP 24000`}</span>
        </div>
      </div>
      <Divider />
      <div className={classes.buyContainer}>
        <Button className={classes.buyBtn}>
          <i className={`lab la-whatsapp ${classes.icon}`} />
          Pedir por whatsapp
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
