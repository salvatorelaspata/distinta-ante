import { Fab, Grid, Hidden, Paper, useTheme } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useStyles } from "../components/hook/useStyles";
import StandardContainer from "../components/layout/StandardContainer";
import TableDistinte from "../components/TableDistinte/TableDistinte";
import AddIcon from "@material-ui/icons/Add";
import DialogAddDistinte from "../components/TableDistinte/DialogAddDistinte";
import { getAllDistinte } from "../api";

//implementare valtio

const Distinte = () => {
   const [distinte, setDistinte] = useState([]);
   const getAll = () => getAllDistinte.then((res) => setDistinte(res));
   useEffect(() => {
      getAll();
   }, []);
   console.log(distinte);
   const theme = useTheme();
   const classes = useStyles(theme);

   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };
   return (
      <div>
         <StandardContainer>
            <Grid item xs={12} md={12} lg={12}>
               <Paper className={clsx(classes.paper)}>
                  <TableDistinte rows={distinte} />
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
         <Hidden>
            <DialogAddDistinte open={open} handleClose={handleClose} />
         </Hidden>
      </div>
   );
};

export default Distinte;
