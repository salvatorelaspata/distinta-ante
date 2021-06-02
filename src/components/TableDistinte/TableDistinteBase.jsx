import React from 'react';
import { useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useStyles } from '../hook/useStyles';

const StyledTableCell = withStyles(
    (theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
    { index: 1 }
)(TableCell);

const StyledTableRow = withStyles(
    (theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
    { index: 1 }
)(TableRow);

// function createData(tipo, base, altezza) {
//    return { tipo, base, altezza };
// }

// const rows = [
//    createData("TELAIO", 159, 6.0),
//    createData("ANTA", 237, 9.0),
//    createData("FASCIONE", 262, 16.0),
//    createData("T A SCATTO", 305, 3.7),
// ];
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'telaio',
        headerName: 'Telaio',
        type: 'number',
        width: 90,
    },
    {
        field: 'ante',
        headerName: 'Ante',
        type: 'number',
        width: 90,
    },
    {
        field: 'base',
        headerName: 'BASE',
        width: 150,
    },
    {
        field: 'altezza',
        headerName: 'ALTEZZA',
        width: 150,
    },
    {
        field: 'antaB',
        headerName: 'anta BASE',
        width: 140,
    },
    {
        field: 'antaH',
        headerName: 'anta ALTEZZA',
        width: 150,
    },
    {
        field: 'fascione',
        headerName: 'Fascione',
        width: 130,
    },
    {
        field: 'tAScatto',
        headerName: 'T a scatto',
        width: 130,
    },
    { field: 'mezzaLamella', headerName: 'mezza lamella' },
    { field: 'lamella', headerName: 'lamella' },
];
export default function TableDistinteBase({ rows }) {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <div>
            <span className={classes.subtitle}>Distinte</span>
            <TableContainer style={{ maxHeight: 400 }}>
                <Table
                    className={classes.table}
                    stickyHeader
                    aria-label='sticky table'
                >
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => {
                                return (
                                    <StyledTableCell key={column.field}>
                                        {column.headerName}
                                    </StyledTableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.id}>
                                {columns.map((column) => {
                                    return (
                                        <StyledTableCell
                                            key={`rows_${column.field}`}
                                        >
                                            {row[column.field]}
                                        </StyledTableCell>
                                    );
                                })}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
