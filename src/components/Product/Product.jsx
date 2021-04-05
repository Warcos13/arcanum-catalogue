import React from 'react';
import generateClasses from './Product.classes.js';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Badge, IconButton, withStyles } from '@material-ui/core';
import { toCop } from '../../helpers/utils.js';

const Product = ({ product, onClickAddProduct }) => {
  const classes = generateClasses();

  const StyledBadge = withStyles((theme) => ({
    badge: {
      top: theme.spacing(4),
      right: theme.spacing(6),
      padding: '12px 15px',
      borderRadius: '8px 0 0 8px',
      backgroundColor: '#E2CAF8',
      color: theme.palette.primary.main,
    },
  }))(Badge);

  return (
    <Card className={classes.root}>
      <StyledBadge
        badgeContent={`Disponible ${product.inventory}    `}
      />
      <CardMedia
        className={classes.media}
        image={product.imageUrl}
        title={product.name}
      />

      <CardContent>
        <Typography variant="h5" align="center" component="h1">
          {product.name}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          align="center"
          color="textSecondary"
        >
          {product.subtitle}
        </Typography>
        <Typography variant="body1" component="p">
          {product.description}
        </Typography>
        <Typography variant="caption" component="p" color="textSecondary">
          {product.aditionalInfo}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Typography variant="h6" component="p">
          {toCop(product.price)}
        </Typography>
        <IconButton className={classes.iconBtn} onClick={onClickAddProduct}>
          <i className={`${classes.buyIcon} las la-cart-plus`}></i>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
