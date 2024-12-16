import {Button, Divider, Input, Modal, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';

export const AddWarehouse = () => {
   const [visible, setVisible] = React.useState(false);
   const handler = () => setVisible(true);

   const closeHandler = () => {
      setVisible(false);
      console.log('Modal closed');
   };

   return (
      <div>
         <Button auto onClick={handler}>
            Add Warehouse
         </Button>
         <Modal
            closeButton
            aria-labelledby="modal-title"
            width="600px"
            open={visible}
            onClose={closeHandler}
         >
            <Modal.Header css={{justifyContent: 'start'}}>
               <Text id="modal-title" h4>
                  Add New Warehouse
               </Text>
            </Modal.Header>
            <Divider css={{my: '$5'}} />
            <Modal.Body css={{py: '$10'}}>
               <Flex
                  direction={'column'}
                  css={{
                     'flexWrap': 'wrap',
                     'gap': '$8',
                     '@lg': {flexWrap: 'nowrap', gap: '$12'},
                  }}
               >
                  <Flex
                     css={{
                        'gap': '$10',
                        'flexWrap': 'wrap',
                        '@lg': {flexWrap: 'nowrap'},
                     }}
                  >
                     <Input
                        label="Warehouse Name"
                        bordered
                        clearable
                        fullWidth
                        size="lg"
                        placeholder="Enter warehouse name"
                     />
                     <Input
                        label="Location"
                        clearable
                        bordered
                        fullWidth
                        size="lg"
                        placeholder="Enter warehouse location"
                     />
                  </Flex>

                  <Flex
                     css={{
                        'gap': '$10',
                        'flexWrap': 'wrap',
                        '@lg': {flexWrap: 'nowrap'},
                     }}
                  >
                     <Input
                        label="Capacity"
                        clearable
                        bordered
                        fullWidth
                        size="lg"
                        placeholder="Enter capacity (e.g., 1000 units)"
                     />
                     <Input
                        label="Manager Name"
                        clearable
                        bordered
                        fullWidth
                        size="lg"
                        placeholder="Enter manager's name"
                     />
                  </Flex>
               </Flex>
            </Modal.Body>
            <Divider css={{my: '$5'}} />
            <Modal.Footer>
               <Button auto onClick={closeHandler}>
                  Add Warehouse
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};
