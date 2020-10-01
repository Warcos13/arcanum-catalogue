import React from 'react';
import { Button, Divider } from 'semantic-ui-react';
import { history } from '../../helpers/history';
import classes from './Checkout.module.css';
import CheckoutProduct from '../../components/Product/CheckoutProduct/CheckoutProduct';

const handleBackToCatalogue = () => {
  history.push('/arcanum-catalogue/catalogue');
};
//TODO:Refactor to use SemanticUI grid
const Checkout = ({
  products,
  onDeleteProduct,
  onAddQuantity,
  onSubstractQuantity,
}) => {
  return (
    <React.Fragment>
      <Button className={classes.backBtn} onClick={handleBackToCatalogue}>
        <i
          className={`las la-arrow-left ${classes.backArrow} ${classes.icon}`}
        />
        Regresar
      </Button>
      {products.map((product) => (
        <CheckoutProduct
          key={product.id}
          product={product}
          onClickDelete={(productId) => onDeleteProduct(productId)}
          onClickAdd={(productId) => onAddQuantity(productId)}
          onClickSubstract={(productId) => onSubstractQuantity(productId)}
        />
      ))}

      <div className={classes.subtotalContainer}>
        <div className={classes.innerContainer}>
          <span className={classes.subtotal}>SUBTOTAL</span>
        </div>
        <div className={classes.innerContainer}>
          <span className={classes.totalPrice}>
            {products.reduce((acc, curr) => acc + parseInt(curr.price), 0)}
          </span>
        </div>
      </div>
      <Divider />
      <div className={classes.buyContainer}>
        <Button className={classes.buyBtn}>
          <i className={`lab la-whatsapp ${classes.icon}`} />
          Pedir por whatsapp
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
