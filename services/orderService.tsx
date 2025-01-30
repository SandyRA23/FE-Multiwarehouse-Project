import axios from 'axios';

const API_URL = '/api/order'; // Note : Sesuaikan dengan backend

export const placeOrder = async (orderData) => {
   try {
      const response = await axios.post(API_URL, orderData);
      return response.data;
   } catch (error) {
      console.error('Error placing order:', error);
      throw new Error(error.response?.data?.message || 'Failed to place order');
   }
};
