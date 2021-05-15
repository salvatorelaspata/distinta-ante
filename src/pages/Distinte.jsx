import { Fab, Grid, Paper } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useStyles } from "../components/hook/useStyles";
import StandardContainer from "../components/layout/StandardContainer";
import TableDistinte from "../components/TableDistinte/TableDistinte";
import AddIcon from "@material-ui/icons/Add";
import DialogAddDistinte from "../components/TableDistinte/DialogAddDistinte";

const Distinte = () => {
   const classes = useStyles();

   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <>
         <StandardContainer>
            <Grid item xs={12} md={12} lg={12}>
               <Paper className={clsx(classes.paper)}>
                  <TableDistinte />
               </Paper>
            </Grid>
         </StandardContainer>
         <Fab
            size="medium"
            color="secondary"
            aria-label="Add Formulario"
            className={classes.fabMargin}
            onClick={handleClickOpen}
         >
            <AddIcon />
         </Fab>
         <DialogAddDistinte open={open} handleClose={handleClose} />
      </>
   );
};

export default Distinte;
