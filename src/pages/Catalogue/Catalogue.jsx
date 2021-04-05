import React, { useState } from 'react';
import generateClasses from './Catalogue.classes.js';
import Product from '../../components/Product/Product';
import { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useSnackbar } from 'notistack';

const Catalogue = ({
  onAddProduct,
  checkoutProducts,
  onGetProducts,
  products,
}) => {
  const classes = generateClasses();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    onGetProducts();
  }, []);


  const productAlreadyExist = (productId) =>
    checkoutProducts.filter((product) => product.id === productId).length
      ? true
      : false;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid
              className={classes.gridItem}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              key={product.id}
            >
              <Product
                product={product}
                onClickAddProduct={() => {
                  if (productAlreadyExist(product.id)) {
                    enqueueSnackbar('Este producto ya fue agregado', { variant:'warning' });
                  } else {
                    onAddProduct(product);
                    enqueueSnackbar('Producto agregado correctamente', {
                      variant: 'success',
                    });
                  }
                }}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Catalogue);
