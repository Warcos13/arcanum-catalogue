import React from 'react';
import { Button, Divider } from 'semantic-ui-react';
import { history } from '../../helpers/history';
import classes from './Checkout.module.css';
import CheckoutProduct from '../../components/Product/CheckoutProduct/CheckoutProduct';
import generateWhatsAppText from '../../helpers/generateWhatsAppText';
import { toCop } from '../../helpers/utils';

const handleBackToCatalogue = () => {
  history.push('/arcanum-catalogue/catalogue');
};

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
      {products.length > 0 ? (
        products.map((product) => (
          <CheckoutProduct
            key={product.id}
            product={product}
            onClickDelete={(productId) => onDeleteProduct(productId)}
            onClickAdd={(productId) => onAddQuantity(productId)}
            onClickSubstract={(productId) => onSubstractQuantity(productId)}
          />
        ))
      ) : (
        <h1>Tu carrito de compras esta vacio</h1>
      )}

      <div className={classes.subtotalContainer}>
        <div className={classes.innerContainer}>
          <span className={classes.subtotal}>SUBTOTAL</span>
        </div>
        <div className={classes.innerContainer}>
          <span className={classes.totalPrice}>
            {toCop(
              products.reduce(
                (acc, curr) =>
                  acc + parseInt(curr.price) * parseInt(curr.quantity),
                0
              )
            )}
          </span>
        </div>
      </div>
      <Divider />
      <div className={classes.buyContainer}>
        <Button
          className={classes.buyBtn}
          onClick={() => {
            window.open(
              `https://wa.me/573113681415?text=${generateWhatsAppText(
                products
              )}`,
              '_blank'
            );
          }}
        >
          <i className={`lab la-whatsapp ${classes.icon}`} />
          Pedir por whatsapp
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
