import adminSlice from './admin.slice';
import generalSlice from '../general/general.slice';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import http from '../../helpers/http';
import { concat, of } from 'rxjs';

const { setProductInfo } = adminSlice.actions;
const { setIsLoading, setError } = generalSlice.actions;

export const uploadProduct = (action$, state$) =>
  action$.pipe(
    ofType(setProductInfo.type),
    switchMap((action) =>
      concat(
        http(
          `/products/${action.payload.category}.json`,
          'POST',
          action.payload
        ).pipe(
          map((res) => {
            console.log(res.data);
            return setIsLoading(false);
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
