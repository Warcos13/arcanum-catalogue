import { Paper } from '@material-ui/core';
import React from 'react';
import Image from 'material-ui-image';
import { Button } from 'semantic-ui-react';
import generateClasses from './CheckoutProduct.classes';
import { toCop } from '../../../helpers/utils';

//TODO:Refactor to use Maerial grid

const CheckoutProduct = ({
  product,
  onClickDelete,
  onClickAdd,
  onClickSubstract,
}) => {
    const classes = generateClasses();
  return (
    <div className={classes.rowContainer}>
      <Paper elevation={1} className={classes.productContainer}>
        <div className={classes.innerContainer}>
          <div className={classes.imageContainer}>
            <Image src={product.imageUrl} cover />
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

          <div className={classes.priceContainer}>
            {toCop(product.price * product.quantity)}
          </div>
        </div>
      </Paper>
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
