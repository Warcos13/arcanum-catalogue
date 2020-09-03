import React from 'react';
import { Segment, Image, Button } from 'semantic-ui-react';
import classes from './CheckoutProduct.module.css';

const product = {
  imageUrl:
    'https://drive.google.com/uc?export=view&id=1WGkQlj6CTqhVdySydH64GibkYz3YTd6C',
  price: '8.000',
  name: 'Azul Mate',
  type: 'Set 7 dados',
  description: 'Contiene: 1d4, 1d6, 1d8, 1d10, 1d100*, 1d12, 1d20.',
  aditionalInfo:
    '*El dado "d100" es un d10 con decenas marcadas para tiradas porcentuales.',
  inventory: 10,
};

const CheckoutProduct = () => {
  return (
    <div className={classes.rowContainer}>
      <Segment raised className={classes.productContainer}>
        <div className={classes.innerContainer}>
          <div className={classes.imageContainer}>
            <Image src={product.imageUrl} size="small" />
          </div>
          <div>
            <p className={classes.productName}>{product.name}</p>
            <p className={classes.productType}>{product.type}</p>
          </div>
        </div>
        <div className={classes.innerContainer}>
          <div className={classes.quantityContainer}>
            <div className={classes.quantity}>1</div>
            <div className={classes.btnsContainer}>
              <Button icon className={classes.btn}>
                <i className={`las la-plus`} />
              </Button>
              <Button icon className={classes.btn}>
                <i className={`las la-minus`} />
              </Button>
            </div>
          </div>
          <div className={classes.priceContainer}>{`COP 8000`}</div>
        </div>
      </Segment>
      <div className={classes.deleteBtnContainer}>
        <Button icon className={classes.deleteBtn}>
          <i className={`las la-trash-alt ${classes.deleteIcon}`} />
        </Button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
