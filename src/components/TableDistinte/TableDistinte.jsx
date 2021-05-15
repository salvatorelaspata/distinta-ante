import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { formulario } from "../TableFormulario/formulario";
// renderCell: renderRating,
// renderEditCell: renderRatingEditInputCell,

const columns = [
   { field: "id", headerName: "ID", editable: false, width: 70 },
   {
      field: "telaio",
      headerName: "Telaio",
      editable: true,
      type: "number",
      width: 90,
   },
   {
      field: "ante",
      headerName: "Ante",
      editable: false,
      type: "number",
      width: 90,
   },
   {
      field: "base",
      headerName: "BASE",
      editable: true,
      width: 150,
   },
   {
      field: "altezza",
      headerName: "ALTEZZA",
      editable: true,
      width: 150,
   },
   {
      field: "antaB",
      headerName: "anta BASE",
      editable: false,
      width: 140,
   },
   {
      field: "antaH",
      headerName: "anta ALTEZZA",
      editable: false,
      width: 150,
   },
   {
      field: "fascione",
      headerName: "Fascione",
      editable: false,
      width: 130,
   },
   {
      field: "tAScatto",
      headerName: "T a scatto",
      editable: false,
      width: 130,
   },
   { field: "mezzaLamella", headerName: "mezza lamella", editable: false },
   { field: "lamella", headerName: "lamella", editable: false },
];

function TableDistinte() {
   const [rows, setRows] = React.useState([
      {
         id: 0,
         telaio: 3,
         ante: 2,
         base: 1000,
         altezza: 1000,
         antaB: formulario(1000)(1000)(3)(2)[1]["base"],
         antaH: formulario(1000)(1000)(3)(2)[1]["altezza"],
         fascione: formulario(1000)(1000)(3)(2)[2]["base"],
         tAScatto: formulario(1000)(1000)(3)(2)[3]["altezza"],
         mezzaLamella: "",
         lamella: "",
      },
   ]);

   const handleEditCellChangeCommitted = React.useCallback(
      ({ id, field, props }) => {
         //ricalcolo la riga
         let f;
         const { value } = props;
         const updatedRows = rows.map((row) => {
            if (row.id === id) {
               if (field === "telaio") {
                  f = formulario(row.base)(row.altezza)(parseInt(value))(
                     row.ante
                  );
               } else if (field === "ante") {
                  f = formulario(row.base)(row.altezza)(row.telaio)(
                     parseInt(value)
                  );
               } else if (field === "base") {
                  f = formulario(parseInt(value))(row.altezza)(row.telaio)(
                     row.ante
                  );
               } else if (field === "altezza") {
                  f = formulario(row.base)(parseInt(value))(row.telaio)(
                     row.ante
                  );
               }
               return {
                  ...row,
                  [field]: parseInt(value),
                  antaB: f[1]["base"],
                  antaH: f[1]["altezza"],
                  fascione: f[2]["base"],
                  tAScatto: f[3]["altezza"],
               };
            }
            return row;
         });
         setRows(updatedRows);
      },
      [rows]
   );
   return (
      <div style={{ height: 400, width: "100%" }}>
         <DataGrid
            onEditCellChangeCommitted={handleEditCellChangeCommitted}
            isCellEditable={(params) => params.row.telaio || params.row.ante}
            rows={rows}
            columns={columns}
            pageSize={10}
            checkboxSelection
         />
      </div>
   );
}

export default TableDistinte;
