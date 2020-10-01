import React, { useState } from 'react';
import classes from './Catalogue.module.css';
import Product from '../../components/Product/Product';
import { useEffect } from 'react';
import { Card } from 'semantic-ui-react';

const Catalogue = ({ onAddProduct, isLoading, onGetProducts, products }) => {
  useEffect(() => {
    onGetProducts();
  }, []);

  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible(true);
    // setTimeout(() => {
    //   setVisible(false);
    // }, 2000);
  };

  return (
    <React.Fragment>
      <Card.Group doubling itemsPerRow={5} stackable>
        {products.map((product) => {
          return (
            <Product
              product={product}
              loading={isLoading}
              key={product.id}
              onClickAddProduct={() => {
                onAddProduct(product);
              }}
            />
          );
        })}
      </Card.Group>
    </React.Fragment>
  );
};

export default React.memo(Catalogue);
