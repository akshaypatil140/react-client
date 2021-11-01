import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import { Card, TableSortLabel } from '@mui/material';
import { getDateFormatted } from '../../lib/utils/helper';

const DataTable = (props) => {
  const {
    trainees, id, column, order, orderBy, onSort,
  } = props;
  return (
    <TableContainer sx={{ width: 'auto', margin: '30px' }} component={Card}>
      <Table
        sx={{
          '& .MuiTableRow-root:hover': {
            backgroundColor: 'lightgray',
          },
        }}
      >
        <TableHead>
          {column.map((row) => (
            <TableCell align={row.align} component="tr" scope="column">
              <span>{row.label}</span>
              <TableSortLabel
                active={orderBy === row.field}
                direction={order}
                onClick={() => onSort(row.field)}
              />
            </TableCell>
          ))}
        </TableHead>
        <TableBody stripedRows id={id}>
          {trainees.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell component="tr" scope="row" align="left">
                {row.name}
              </TableCell>
              <TableCell component="tr" align="left">
                {row.email}
              </TableCell>
              <TableCell component="tr" align="right">
                {getDateFormatted(row.createdAt)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

DataTable.propTypes = {
  trainees: PropTypes.objectOf.isRequired,
  id: PropTypes.string.isRequired,
  column: PropTypes.objectOf.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
};
