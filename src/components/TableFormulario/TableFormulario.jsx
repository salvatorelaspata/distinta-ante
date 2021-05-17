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

// function createData(tipo, base, altezza) {
//    return { tipo, base, altezza };
// }

// const rows = [
//    createData("TELAIO", 159, 6.0),
//    createData("ANTA", 237, 9.0),
//    createData("FASCIONE", 262, 16.0),
//    createData("T A SCATTO", 305, 3.7),
// ];

export default function TableFormulario({ rows, ante }) {
     const theme = useTheme();
     const classes = useStyles(theme);

     return (
          <div>
               <span className={classes.subtitle}>{ante} Anta</span>
               <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label='simple table'>
                         <TableHead>
                              <TableRow>
                                   <StyledTableCell>Tipo</StyledTableCell>
                                   <StyledTableCell align='right'>
                                        Base (cm)
                                   </StyledTableCell>
                                   <StyledTableCell align='right'>
                                        Altezza (cm)
                                   </StyledTableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {rows.map((row) => (
                                   <StyledTableRow key={row.tipo}>
                                        <StyledTableCell
                                             component='th'
                                             scope='row'
                                        >
                                             {row.tipo}
                                        </StyledTableCell>
                                        <StyledTableCell align='right'>
                                             {row.base}
                                        </StyledTableCell>
                                        <StyledTableCell align='right'>
                                             {row.altezza}
                                        </StyledTableCell>
                                   </StyledTableRow>
                              ))}
                         </TableBody>
                    </Table>
               </TableContainer>
          </div>
     );
}
