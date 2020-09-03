import { combineReducers } from 'redux';
import generalSlice from './general/general.slice';
import adminSlice from './admin/admin.slice';
import catalogueSlice from './catalogue/catalogue.slice';

export default combineReducers({
  general: generalSlice.reducer,
  admin: adminSlice.reducer,
  catalogue: catalogueSlice.reducer,
});
