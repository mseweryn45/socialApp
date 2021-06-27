import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(year: number, costCenter: string, total: string, law: string) {
  return { year, costCenter, total, law };
}

const rows = [
  createData(2019, 'CS 153', '3500 €', 'Clifford Chance'),
  createData(2018, 'CS 153', '9500 €', 'Linklaters'),
  createData(2017, 'CS 47', '23500 €', 'Linklaters'),
  createData(2016, 'CS 153', '13500 €', 'Linklaters'),
  createData(2015, 'CS 32', '13500 €', 'Linklaters')
];

export default function AmountOfFees() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell align="right">Cost Center</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Law firm</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.year}>
              <TableCell component="th" scope="row">
                {row.year}
              </TableCell>
              <TableCell align="right">{row.costCenter}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">{row.law}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>
  );
}