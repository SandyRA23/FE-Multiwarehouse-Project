import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { placeOrderRequest, placeOrderSuccess, placeOrderFailure } from './orderSlice';

const API_BASE_URL = 'http://localhost:5000/api';

function* placeOrderSaga(action: any): any {
   try {
      const response = yield call(axios.post, `${API_BASE_URL}/orders`, action.payload);
      yield put(placeOrderSuccess());
      console.log('Order placed:', response.data);
   } catch (error: any) {
      yield put(placeOrderFailure(error.message));
      console.error('Order failed:', error);
   }
}

export function* watchPlaceOrder() {
   yield takeLatest(placeOrderRequest.type, placeOrderSaga);
}
