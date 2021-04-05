import { combineEpics } from 'redux-observable';
import { uploadProduct } from './admin/admin.epics';
import { getProductsAttempt } from './catalogue/catalogue.epics';
import { productWasAdded, substractProduct } from './checkout/checkout.epics';

export default combineEpics(
  substractProduct,
  uploadProduct,
  getProductsAttempt,
  productWasAdded
);
