import { createSlice } from '@reduxjs/toolkit';

interface OrderState {
   isLoading: boolean;
   success: boolean;
   error: string | null;
}

const initialState: OrderState = {
   isLoading: false,
   success: false,
   error: null
};

const orderSlice = createSlice({
   name: 'order',
   initialState,
   reducers: {
      placeOrderRequest: (state) => {
         state.isLoading = true;
         state.success = false;
         state.error = null;
      },
      placeOrderSuccess: (state) => {
         state.isLoading = false;
         state.success = true;
      },
      placeOrderFailure: (state, action) => {
         state.isLoading = false;
         state.success = false;
         state.error = action.payload;
      },
   },
});

export const { placeOrderRequest, placeOrderSuccess, placeOrderFailure } = orderSlice.actions;
export default orderSlice.reducer;
