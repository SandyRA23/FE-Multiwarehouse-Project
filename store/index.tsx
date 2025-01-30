import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import orderReducer from './orderSlice';
import { watchPlaceOrder } from './orderSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer: {
      order: orderReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchPlaceOrder);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
