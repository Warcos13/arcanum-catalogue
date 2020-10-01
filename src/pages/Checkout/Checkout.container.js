import Checkout from './Checkout';
import { connect } from 'react-redux';

import checkoutSlice from '../../store/checkout/checkout.slice';

const {
  deleteProduct,
  addQuantityProduct,
  substractQuantityProduct,
} = checkoutSlice.actions;

const mapStateToProps = (state) => ({
  products: state.checkout.checkoutProducts,
});

const mapDispatchToProps = {
  onDeleteProduct: (productId) => deleteProduct(productId),
  onAddQuantity: (productId) => addQuantityProduct(productId),
  onSubstractQuantity: (productId) => substractQuantityProduct(productId),
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
