import { createEpicMiddleware } from 'redux-observable';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './root.reducer';
import rootEpic from './root.epic';

const epicMiddleware = createEpicMiddleware();

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [epicMiddleware, ...getDefaultMiddleware()],
  });

  epicMiddleware.run(rootEpic);

  return store;
}
