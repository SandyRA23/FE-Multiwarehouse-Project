import React, { useState } from 'react';
import { Card, Text, Image, Button, Row, Col } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrderRequest } from '../../store/orderSlice';
import { RootState } from '../../store';

interface CardProductProps {
   name: string;
   price: number;
   imageUrl: string;
}

export const CardProduct = ({ name, price, imageUrl }: CardProductProps) => {
   const dispatch = useDispatch();
   const isLoading = useSelector((state: RootState) => state.order.isLoading);

   const handleBuyNow = () => {
      const orderData = { name, price };
      dispatch(placeOrderRequest(orderData));
   };

   return (
      <Card css={{ w: '300px', h: '350px', p: '$2' }}>
         <Card.Body>
            <Image
               src={imageUrl}
               alt={name}
               width="100%"
               height={200}
               objectFit="cover"
               css={{ borderRadius: '$md' }}
            />
            <Text h4 css={{ textAlign: 'left', mt: '$4' }}>
               {name}
            </Text>
            <Text css={{ textAlign: 'left', fontWeight: 'bold' }}>${price}</Text>
         </Card.Body>
         <Card.Footer>
            <Row justify="center">
               <Col>
                  <Button auto bordered color="primary">
                     Add to Cart
                  </Button>
               </Col>
               <Col>
                  <Button auto color="secondary" onClick={handleBuyNow} disabled={isLoading}>
                     {isLoading ? 'Processing...' : 'Buy Now'}
                  </Button>
               </Col>
            </Row>
         </Card.Footer>
      </Card>
   );
};
