import { Col, Row, Text, Tooltip } from '@nextui-org/react';
import React from 'react';
import { DeleteIcon } from '../icons/table/delete-icon';
import { EditIcon } from '../icons/table/edit-icon';
import { EyeIcon } from '../icons/table/eye-icon';
import { IconButton, StyledBadge } from './table.styled';

interface Props {
  item: any;
  columnKey: string | React.Key;
}

export const RenderCell = ({ item, columnKey }: Props) => {
  const cellValue = item[columnKey];

  switch (columnKey) {
    case 'name':
      return (
        <Text b size={14}>
          {cellValue}
        </Text>
      );
    case 'email':
      return columnKey === 'email' ? (
        <Text size={13} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;
    case 'location':
      return columnKey === 'location' ? (
        <Text size={13} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;
    case 'capacity':
      return columnKey === 'capacity' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;
    case 'status':
      return (
        <StyledBadge type={String(item.status)}>{cellValue}</StyledBadge>
      );
    case 'role':
      return columnKey === 'role' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;

    case 'address':
      return columnKey === 'address' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;
    case 'postalCode':
      return columnKey === 'postalCode' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;
    case 'phone':
      return columnKey === 'phone' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;

    case 'orderId':
      return columnKey === 'orderId' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;
    case 'customerName':
      return columnKey === 'customerName' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;
    case 'product':
      return columnKey === 'product' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;
    case 'quantity':
      return columnKey === 'quantity' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;
    case 'orderDate':
      return columnKey === 'orderDate' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;
    case 'totalPrice':
      return columnKey === 'totalPrice' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;

    case 'productName':
      return columnKey === 'productName' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;
    case 'category':
      return columnKey === 'category' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;
    case 'stock':
      return columnKey === 'stock' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          {cellValue}
        </Text>
      ) : null;
    case 'price':
      return columnKey === 'price' ? (
        <Text size={14} css={{ color: '$accents7' }}>
          ${cellValue.toFixed(2)} {/* Format as currency */}
        </Text>
      ) : null;

    case 'actions':
      return (
        <Row justify="center" align="center" css={{ gap: '$8' }}>
          <Col css={{ d: 'flex' }}>
            <Tooltip content="View">
              <IconButton
                aria-label="View details"
                onClick={() => console.log('View', item.id)}
              >
                <EyeIcon size={20} fill="#979797" />
              </IconButton>
            </Tooltip>
          </Col>
          <Col css={{ d: 'flex' }}>
            <Tooltip content="Edit">
              <IconButton
                aria-label="Edit item"
                onClick={() => console.log('Edit', item.id)}
              >
                <EditIcon size={20} fill="#979797" />
              </IconButton>
            </Tooltip>
          </Col>
          <Col css={{ d: 'flex' }}>
            <Tooltip content="Delete" color="error">
              <IconButton
                aria-label="Delete item"
                onClick={() => console.log('Delete', item.id)}
              >
                <DeleteIcon size={20} fill="#FF0080" />
              </IconButton>
            </Tooltip>
          </Col>
        </Row>
      );

    default:
      return cellValue;
  }
};
