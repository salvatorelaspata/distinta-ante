import React from 'react';
import { useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from '../hook/useStyles';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export default function TableFormulario4Amte({ rows }) {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center'>
                                Tipo
                            </StyledTableCell>
                            <StyledTableCell align='right'>
                                Base laterale SX
                            </StyledTableCell>
                            <StyledTableCell align='left'>
                                Base maniglia
                            </StyledTableCell>
                            <StyledTableCell align='center'>
                                Base centrale
                            </StyledTableCell>
                            <StyledTableCell align='right'>
                                Base laterale DX
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell>{row.name}</StyledTableCell>
                                <StyledTableCell>
                                    {row.baseLateraleSX}
                                </StyledTableCell>
                                <StyledTableCell>
                                    {row.baseManiglia}
                                </StyledTableCell>
                                <StyledTableCell>
                                    {row.baseCentrale}
                                </StyledTableCell>
                                <StyledTableCell>
                                    {row.baseLateraleDX}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
