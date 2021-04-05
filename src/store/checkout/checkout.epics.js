import generalSlice from '../general/general.slice';
import checkOutSlice from '../checkout/checkout.slice';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { useSnackbar } from 'notistack';

const {
  addProduct,
  substractQuantityProduct,
  deleteProduct,
} = checkOutSlice.actions;
const { setIsLoading } = generalSlice.actions;

export const productWasAdded = (action$, state$) =>
  action$.pipe(
    ofType(addProduct.type),
    switchMap((action) => {
      console.log(state$.value.checkout.itemWasAdded);
      return of(setIsLoading(false));
    })
  );

export const substractProduct = (action$, state$) =>
  action$.pipe(
    ofType(substractQuantityProduct.type),
    switchMap((action) => {
      const product = state$.value.checkout.checkoutProducts.filter(
        (item) => item.id === action.payload
      )[0];
      if (product.quantity <= 0) {
        return of(deleteProduct(action.payload));
      } else {
        return of(setIsLoading(false));
      }
    })
  );
