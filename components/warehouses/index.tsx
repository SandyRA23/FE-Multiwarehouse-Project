import React from 'react';
import Link from 'next/link';
import {Flex} from '../styles/flex';
import {Breadcrumbs, Crumb, CrumbLink} from '../breadcrumb/breadcrumb.styled';
import {TableWrapper} from '../table/table';
import {AddWarehouse} from './add-warehouse';
import {Button, Input, Text} from '@nextui-org/react';
import {DotsIcon} from '../icons/accounts/dots-icon';
import {ExportIcon} from '../icons/accounts/export-icon';
import {InfoIcon} from '../icons/accounts/info-icon';
import {TrashIcon} from '../icons/accounts/trash-icon';
import {HouseIcon} from '../icons/breadcrumb/house-icon';
import {SettingsIcon} from '../icons/sidebar/settings-icon';
import { data, columns } from '../table/data-warehouses';

export const Warehouses = () => {
   return (
      <Flex
         css={{
            mt: '$5',
            px: '$6',
            '@sm': {
               mt: '$10',
               px: '$16',
            },
         }}
         justify={'center'}
         direction={'column'}
      >
         <Breadcrumbs>
            <Crumb>
               <HouseIcon />
               <Link href={'/'}>
                  <CrumbLink href="#">Home</CrumbLink>
               </Link>
               <Text>/</Text>
            </Crumb>

            <Crumb>
               <CrumbLink href="#">Warehouses</CrumbLink>
               <Text>/</Text>
            </Crumb>
            <Crumb>
               <CrumbLink href="#">List</CrumbLink>
            </Crumb>
         </Breadcrumbs>

         <Text h3>All Warehouses</Text>
         <Flex
            css={{gap: '$8'}}
            align={'center'}
            justify={'between'}
            wrap={'wrap'}
         >
            <Flex
               css={{
                  gap: '$6',
                  flexWrap: 'wrap',
                  '@sm': {flexWrap: 'nowrap'},
               }}
               align={'center'}
            >
               <Input
                  css={{width: '100%', maxW: '410px'}}
                  placeholder="Search warehouses"
               />
               <SettingsIcon />
               <TrashIcon />
               <InfoIcon />
               <DotsIcon />
            </Flex>
            <Flex direction={'row'} css={{gap: '$6'}} wrap={'wrap'}>
               <AddWarehouse />
               <Button auto iconRight={<ExportIcon />}>
                  Export to CSV
               </Button>
            </Flex>
         </Flex>

         <TableWrapper data={data} columns={columns} />
      </Flex>
   );
};
