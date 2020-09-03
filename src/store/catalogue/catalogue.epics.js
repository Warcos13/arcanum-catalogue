import generalSlice from '../general/general.slice';
import catalogueSlice from './catalogue.slice';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import http from '../../helpers/http';
import { concat, of } from 'rxjs';

const { getProducts, getProductsSuccess } = catalogueSlice.actions;
const { setIsLoading, setError } = generalSlice.actions;

export const getProductsAttempt = (action$, state$) =>
  action$.pipe(
    ofType(getProducts.type),
    switchMap((action) =>
      concat(
        http(`/products/dices.json`, 'GET').pipe(
          map((res) => {
            const data = res.data;
            const productsWithId = Object.keys(data).map((key) => {
              return {
                ...data[key],
                id: key,
              };
            });
            return getProductsSuccess(productsWithId);
          }),
          catchError((err) =>
            of(
              setError({
                meesage: err.response.data.error,
                errorCode: err.response.status,
              })
            )
          )
        ),
        of(setIsLoading(false))
      )
    )
  );
