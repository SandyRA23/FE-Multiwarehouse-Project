import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Svg} from '../../styles/svg';

export const OrdersIcon = () => {
   return (
      <Svg
         as={ShoppingCartIcon}
         css={{
            fontSize: '24px', // Ukuran ikon
            color: '$accents6', // Warna ikon
         }}
      />
   );
};
