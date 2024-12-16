import { Table } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { RenderCell } from './render-cell';

interface TableWrapperProps {
  data: any[];
  columns: { name: string; uid: string }[];
}

export const TableWrapper = ({ data, columns }: TableWrapperProps) => {
  if (!columns || columns.length === 0) {
    return <div>Error: Columns are missing or empty</div>;
  }

  return (
    <Box
      css={{
        '& .nextui-table-container': {
          boxShadow: 'none',
        },
      }}
    >
      <Table
        aria-label="Dynamic table"
        css={{
          height: 'auto',
          minWidth: '100%',
          boxShadow: 'none',
          width: '100%',
          px: 0,
        }}
        selectionMode="multiple"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === 'actions'}
              align={column.uid === 'actions' ? 'center' : 'start'}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={data}>
          {(item) => (
            <Table.Row key={item.id}>
              {(columnKey) => (
                <Table.Cell key={columnKey}>
                  <RenderCell item={item} columnKey={columnKey} />
                </Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={5}
          onPageChange={(page) => console.log({ page })}
        />
      </Table>
    </Box>
  );
};
