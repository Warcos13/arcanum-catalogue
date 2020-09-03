import React from 'react';
import { Card } from 'semantic-ui-react';
import classes from './Catalogue.module.css';
import Product from '../../components/Product/Product';
import { useEffect } from 'react';


const Catalogue = ({ onSetIsLoading, isLoading, onGetProducts, products }) => {  

  useEffect(() => {
    onGetProducts();
  }, [])
  
  return (
    <Card.Group doubling itemsPerRow={5} stackable>
      {products.map((product) => {
        return (
          <Product
            product={product}
            loading={isLoading}
            key={product.id}
            onClickAddProduct={() => {
              onSetIsLoading(true);
            }}
          />
        );
      })}
    </Card.Group>
  );
};

export default React.memo(Catalogue);
