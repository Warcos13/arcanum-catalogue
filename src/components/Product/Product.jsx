import React from 'react';
import { useStore } from '../../store/store';
import classes from './Product.module.css';
import {
  Button,
  Card,
  Image,
  Placeholder,
  Segment,
  Label,
} from 'semantic-ui-react';

const Product = ({
    product,
    loading
}) => {    
    const dispatch = useStore()[1];
    
  return (
    <Card className={classes.removeBorders} >
      {loading ? (
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
      ) : (
        <Segment className={classes.removeBorders} vertical>
          <Label className={classes.label} attached="top right">
            Disponible:<strong>{` ${product.inventory}`}</strong>
          </Label>
          <Image src={product.avatar} />
        </Segment>
      )}
      <Card.Content className={classes.removeBorders}>
        {loading ? (
          <Placeholder>
            <Placeholder.name>
              <Placeholder.Line length="very short" />
              <Placeholder.Line length="medium" />
            </Placeholder.name>
            <Placeholder.Paragraph>
              <Placeholder.Line length="short" />
            </Placeholder.Paragraph>
          </Placeholder>
        ) : (
          <>
            <Card.Header className={classes.centerText}>
              {product.name}
            </Card.Header>
            <Card.Meta className={classes.centerText}>Set de 7 Dados</Card.Meta>
            <Card.Description>{product.description}</Card.Description>
            <Card.Meta>{product.aditionalInfo}</Card.Meta>
            <div className={classes.bottomContainer}>
              <span>{`COP ${product.price}`}</span>
              <Button
                className={classes.shopButton}
                disabled={loading}
                icon
                onClick={() => {
                  dispatch('TEST_ACTION', [product.name]);
                }}
              >
                <i className={`las la-shopping-cart ${classes.icon}`} />
              </Button>
            </div>
          </>
        )}
      </Card.Content>
    </Card>
  );
};

export default Product;
