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

export default function TableDistinte({ rows }) {
    console.log(rows);
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
                            <StyledTableCell width={60}>Pos.</StyledTableCell>
                            <StyledTableCell width={60}>Pz.</StyledTableCell>
                            <StyledTableCell width={60}>Telaio</StyledTableCell>
                            <StyledTableCell width={80}>n Ante</StyledTableCell>
                            <StyledTableCell
                                width={120}
                                colSpan={2}
                                align='center'
                            >
                                Misure esterno telaio (mm)
                            </StyledTableCell>
                            <StyledTableCell colSpan={2} align='center'>
                                Ante (mm)
                            </StyledTableCell>
                            <StyledTableCell colSpan={2} align='center'>
                                Fascione (mm)
                            </StyledTableCell>
                            <StyledTableCell colSpan={2} align='center'>
                                Mezza Labella (mm)
                            </StyledTableCell>
                            <StyledTableCell colSpan={2} align='center'>
                                Labella (mm)
                            </StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={4} />
                            <TableCell align='left'>Base</TableCell>
                            <TableCell align='right'>Altezza</TableCell>
                            <TableCell align='left'>Maniglia</TableCell>
                            <TableCell align='right'>Laterale</TableCell>
                            <TableCell align='left'>Maniglia</TableCell>
                            <TableCell align='right'>Laterale</TableCell>
                            <TableCell align='left'>Maniglia</TableCell>
                            <TableCell align='right'>Laterale</TableCell>
                            <TableCell align='left'>Maniglia</TableCell>
                            <TableCell align='right'>Laterale</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(
                            (
                                {
                                    pz,
                                    telaio,
                                    nAnte,
                                    misureEsternotelaio,
                                    ante,
                                    fascione,
                                    mezzaLamella,
                                    lamella,
                                },
                                index
                            ) => (
                                <StyledTableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{pz}</TableCell>
                                    <TableCell>{telaio}</TableCell>
                                    <TableCell>{nAnte}</TableCell>
                                    <TableCell align='left'>
                                        {misureEsternotelaio.base}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {misureEsternotelaio.altezza}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {ante.maniglia}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {ante.laterale}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {fascione.maniglia}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {fascione.laterale}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {mezzaLamella.maniglia}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {mezzaLamella.laterale}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {lamella.maniglia}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {lamella.laterale}
                                    </TableCell>
                                </StyledTableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
