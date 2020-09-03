import { combineEpics } from 'redux-observable';
import { uploadProduct } from './admin/admin.epics';
import { getProductsAttempt } from './catalogue/catalogue.epics';

export default combineEpics(uploadProduct, getProductsAttempt);
