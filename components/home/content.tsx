import React from 'react';
import { Text, Button } from '@nextui-org/react';
import { Box } from '../styles/box';
import dynamic from 'next/dynamic';
import { Flex } from '../styles/flex';
import { CardProduct } from './card-product';
import { TableWrapper } from '../table/table';

const Chart = dynamic(
   () => import('../charts/steam').then((mod) => mod.Steam),
   {
      ssr: false,
   }
);

export const Content = () => (
   <Box css={{ overflow: 'hidden', height: '100%' }}>
      <Flex
         css={{
            gap: '$8',
            pt: '$5',
            height: 'fit-content',
            flexWrap: 'wrap',
            '@lg': {
               flexWrap: 'nowrap',
            },
            '@sm': {
               pt: '$10',
            },
         }}
         justify={'center'}
      >
         <Flex
            css={{
               px: '$12',
               mt: '$8',
               '@xsMax': { px: '$10' },
               gap: '$12',
            }}
            direction={'column'}
         >
            {/* Product Section */}
            <Box>
               <Text
                  h3
                  css={{
                     textAlign: 'center',
                     '@sm': {
                        textAlign: 'inherit',
                     },
                  }}
               >
                  Featured Products
               </Text>
               <Flex
                  css={{
                     gap: '$10',
                     flexWrap: 'wrap',
                     justifyContent: 'center',
                     '@sm': {
                        flexWrap: 'nowrap',
                     },
                  }}
                  direction={'row'}
               >
                  {/* Card Product 1 */}
                  <CardProduct
                     name="Smart Phone"
                     price={129.99}
                     imageUrl="/smartphone.webp"
                  />
                  {/* Card Product 2 */}
                  <CardProduct
                     name="Laptop"
                     price={149.99}
                     imageUrl="/laptop.webp"
                  />
                  {/* Card Product 3 */}
                  <CardProduct
                     name="Camera"
                     price={119.99}
                     imageUrl="/camera.webp"
                  />
               </Flex>
            </Box>
         </Flex>
      </Flex>
   </Box>
);
