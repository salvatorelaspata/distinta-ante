import { Grid, Paper, TextField, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useStyles } from "../components/hook/useStyles";
import StandardContainer from "../components/layout/StandardContainer";
import TableFormulario from "../components/TableFormulario/TableFormulario";
import { formulario } from "../components/TableFormulario/formulario";

//si andranno a gestire tutti i flussi di anagrafica
const Formulario = () => {
   const classes = useStyles();

   const [base, setBase] = React.useState(1000);
   const [altezza, setAltezza] = React.useState(1000);

   const rowsTelaio3 = formulario(base)(altezza)(3);
   const rowsTelaio4 = formulario(base)(altezza)(4);

   return (
      <>
         <StandardContainer>
            <Grid item xs={12} md={12} lg={12}>
               <Paper className={clsx(classes.paper)}>
                  <Grid container direction="row" justify="space-around">
                     <form noValidate autoComplete="off">
                        <TextField
                           label="Base"
                           variant="outlined"
                           onChange={(e) => setBase(e.target.value)}
                           value={base}
                        />
                        <TextField
                           label="Altezza"
                           variant="outlined"
                           onChange={(e) => setAltezza(e.target.value)}
                           value={altezza}
                        />
                     </form>
                  </Grid>
               </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
               <Paper className={clsx(classes.paper)}>
                  <Grid container direction="row" justify="space-around">
                     <Typography
                        component="h6"
                        variant="h6"
                        color="inherit"
                        noWrap
                     >
                        Telaio su 3 lati
                     </Typography>
                     <TableFormulario rows={rowsTelaio3(1)} ante={1} />
                     <TableFormulario rows={rowsTelaio3(2)} ante={2} />
                  </Grid>
               </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
               <Paper className={clsx(classes.paper)}>
                  <Grid container direction="row" justify="space-around">
                     <Typography
                        component="h6"
                        variant="h6"
                        color="inherit"
                        noWrap
                     >
                        Telaio su 4 lati
                     </Typography>
                     <TableFormulario rows={rowsTelaio4(1)} ante={1} />
                     <TableFormulario rows={rowsTelaio4(2)} ante={2} />
                  </Grid>
               </Paper>
            </Grid>
         </StandardContainer>
      </>
   );
};

export default Formulario;
