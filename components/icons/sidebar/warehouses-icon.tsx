import React from 'react';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import {Svg} from '../../styles/svg';

export const WarehousesIcon = () => {
   return (
      <Svg
         as={WarehouseIcon}
         css={{
            fontSize: '24px', // Ukuran ikon
            color: '$accents6', // Warna ikon
         }}
      />
   );
};
