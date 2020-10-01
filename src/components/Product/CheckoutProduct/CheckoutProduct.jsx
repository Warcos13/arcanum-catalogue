import React from 'react';
import { Segment, Image, Button } from 'semantic-ui-react';
import classes from './CheckoutProduct.module.css';

const CheckoutProduct = ({
  product,
  onClickDelete,
  onClickAdd,
  onClickSubstract,
}) => {
  return (
    <div className={classes.rowContainer}>
      <Segment raised className={classes.productContainer}>
        <div className={classes.innerContainer}>
          <div className={classes.imageContainer}>
            <Image src={product.imageUrl} size="small" />
          </div>
          <div>
            <p className={classes.productName}>{product.name}</p>
            <p className={classes.productType}>{product.subtitle}</p>
          </div>
        </div>
        <div className={classes.innerContainer}>
          <div className={classes.quantityContainer}>
            <div className={classes.quantity}>{product.quantity}</div>
            <div className={classes.btnsContainer}>
              <Button
                icon
                className={classes.btn}
                onClick={() => {
                  onClickAdd(product.id);
                }}
              >
                <i className={`las la-plus`} />
              </Button>
              <Button
                icon
                className={classes.btn}
                onClick={() => {
                  onClickSubstract(product.id);
                }}
              >
                <i className={`las la-minus`} />
              </Button>
            </div>
          </div>
          <div
            className={classes.priceContainer}
          >{`COP ${product.price
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`}</div>
        </div>
      </Segment>
      <div className={classes.deleteBtnContainer}>
        <Button
          icon
          className={classes.deleteBtn}
          onClick={() => {
            onClickDelete(product.id);
          }}
        >
          <i className={`las la-trash-alt ${classes.deleteIcon}`} />
        </Button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
