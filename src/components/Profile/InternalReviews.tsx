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

function createData(name: string, entity: string, location: string, expertise: string, date: string) {
    return { name, entity, location, expertise, date };
}

const rows = [
    createData('Operation', 'Opel', 'France', '#Tax', '20/01/2018'),
    createData('Convallis Limited', 'Renault', 'Poland', '#Erf', '20/01/2018'),
    createData('Tincidunt Nunc', 'Quisque', 'USA', '#Jts', '20/01/2019'),
    createData('Nisi Magna', 'Associates', 'Japan', '#Itx', '20/01/2028')
];

export default function InternalReviews() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Entity</TableCell>
                        <TableCell align="right">Location</TableCell>
                        <TableCell align="right">Expertise</TableCell>
                        <TableCell align="right">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.entity}</TableCell>
                            <TableCell align="right">{row.location}</TableCell>
                            <TableCell align="right">{row.expertise}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}