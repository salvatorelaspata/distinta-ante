import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from '../hook/useStyles';
import { formulario } from '../TableFormulario/formulario';

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
export default function TableDistinte() {
     const classes = useStyles();

     const [rows, setRows] = React.useState([
          {
               id: 0,
               telaio: 3,
               ante: 2,
               base: 1000,
               altezza: 1000,
               antaB: formulario(1000)(1000)(3)(2)[1]['base'],
               antaH: formulario(1000)(1000)(3)(2)[1]['altezza'],
               fascione: formulario(1000)(1000)(3)(2)[2]['base'],
               tAScatto: formulario(1000)(1000)(3)(2)[3]['altezza'],
               mezzaLamella: '',
               lamella: '',
          },
     ]);

     return (
          <div>
               <span className={classes.subtitle}>Distinte</span>
               <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label='simple table'>
                         <TableHead>
                              <TableRow>
                                   {columns.map((column) => {
                                        return (
                                             <StyledTableCell
                                                  key={column.field}
                                             >
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

// function TableDistinte() {
//    const [rows, setRows] = React.useState([
//       {
//          id: 0,
//          telaio: 3,
//          ante: 2,
//          base: 1000,
//          altezza: 1000,
//          antaB: formulario(1000)(1000)(3)(2)[1]["base"],
//          antaH: formulario(1000)(1000)(3)(2)[1]["altezza"],
//          fascione: formulario(1000)(1000)(3)(2)[2]["base"],
//          tAScatto: formulario(1000)(1000)(3)(2)[3]["altezza"],
//          mezzaLamella: "",
//          lamella: "",
//       },
//    ]);

//    const handleEditCellChangeCommitted = React.useCallback(
//       ({ id, field, props }) => {
//          //ricalcolo la riga
//          let f;
//          const { value } = props;
//          const updatedRows = rows.map((row) => {
//             if (row.id === id) {
//                if (field === "telaio") {
//                   f = formulario(row.base)(row.altezza)(parseInt(value))(
//                      row.ante
//                   );
//                } else if (field === "ante") {
//                   f = formulario(row.base)(row.altezza)(row.telaio)(
//                      parseInt(value)
//                   );
//                } else if (field === "base") {
//                   f = formulario(parseInt(value))(row.altezza)(row.telaio)(
//                      row.ante
//                   );
//                } else if (field === "altezza") {
//                   f = formulario(row.base)(parseInt(value))(row.telaio)(
//                      row.ante
//                   );
//                }
//                return {
//                   ...row,
//                   [field]: parseInt(value),
//                   antaB: f[1]["base"],
//                   antaH: f[1]["altezza"],
//                   fascione: f[2]["base"],
//                   tAScatto: f[3]["altezza"],
//                };
//             }
//             return row;
//          });
//          setRows(updatedRows);
//       },
//       [rows]
//    );
//    return (
//       <div style={{ height: 400, width: "100%" }}>
//          <DataGrid
//             onEditCellChangeCommitted={handleEditCellChangeCommitted}
//             isCell => params.row.telaio || params.row.ante}
//             rows={rows}
//             columns={columns}
//             pageSize={10}
//             checkboxSelection
//             components={Paper}
//          />
//       </div>
//    );
// }

// export default TableDistinte;
