import React from "react";
import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
function DialogAddDistinte({ open, handleClose }) {
   const theme = useTheme();
   const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

   return (
      <div>
         <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
         >
            <DialogTitle id="responsive-dialog-title">
               {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
               <DialogContentText>
                  Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running.
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button autoFocus onClick={handleClose} color="primary">
                  Disagree
               </Button>
               <Button onClick={handleClose} color="primary" autoFocus>
                  Agree
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}

export default DialogAddDistinte;
