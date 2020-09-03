import React from 'react';
import classes from './Product.module.css';
import {
  Button,
  Card,
  Image,
  Segment,
  Label,
  Placeholder,
} from 'semantic-ui-react';

const Product = ({ product, isLoading, onClickAddProduct }) => {
  return (
    <Card className={classes.removeBorders}>
      {isLoading ? (
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
      ) : (
        <Segment className={classes.removeBorders} vertical>
          <Label className={classes.label} attached="top right">
            Disponible:<strong>{` ${product.inventory}`}</strong>
          </Label>
          <Image src={product.imageUrl} />
        </Segment>
      )}
      <Card.Content className={classes.removeBorders}>
        {isLoading ? (
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
            <Card.Meta className={classes.centerText}>
              {product.subtitle}
            </Card.Meta>
            <Card.Description>{product.description}</Card.Description>
            <Card.Meta>{product.aditionalInfo}</Card.Meta>
            <div className={classes.bottomContainer}>
              <span>{`COP ${product.price?product.price
                .toString()
                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.'):''}`}</span>
              <Button
                className={classes.shopButton}
                disabled={isLoading}
                icon
                onClick={onClickAddProduct}
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
