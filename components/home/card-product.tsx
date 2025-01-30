import React, { useState } from 'react';
import { Card, Text, Image, Button, Row, Col } from '@nextui-org/react';
import { placeOrder } from '../../services/orderService';
import { toast } from 'react-toastify'; // Gunakan toast untuk notifikasi pengguna

interface CardProductProps {
   name: string;
   price: number;
   imageUrl: string;
}

export const CardProduct = ({ name, price, imageUrl }: CardProductProps) => {
   const [quantity, setQuantity] = useState(1);
   const [loading, setLoading] = useState(false);

   const handleBuyNow = async () => {
      const orderData = {
         productName: name,
         price,
         quantity,
         total: price * quantity,
      };

      setLoading(true);
      try {
         await placeOrder(orderData);
         toast.success('Order placed successfully!');
      } catch (error) {
         toast.error('Failed to place order');
      } finally {
         setLoading(false);
      }
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
            <Text h4 css={{ textAlign: 'left', mt: '$4' }}>{name}</Text>
            <Text css={{ textAlign: 'left', fontWeight: 'bold' }}>${price}</Text>
         </Card.Body>
         <Card.Footer>
            <Row justify="center" css={{ w: '100%', gap: '$2' }}>
               <Col span={5}>
                  <Button auto fullWidth bordered>Add to Cart</Button>
               </Col>
               <Col span={5} css={{ textAlign: 'right', marginLeft: 'auto' }}>
                  <Button
                     auto
                     fullWidth
                     color="gradient"
                     onClick={handleBuyNow}
                     disabled={loading}
                  >
                     {loading ? 'Processing...' : 'Buy Now'}
                  </Button>
               </Col>
            </Row>
         </Card.Footer>
      </Card>
   );
};
