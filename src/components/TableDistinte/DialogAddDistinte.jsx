import React, { useEffect } from 'react';
import {
     Button,
     Dialog,
     DialogActions,
     DialogContent,
     DialogContentText,
     DialogTitle,
     FormControl,
     InputLabel,
     Select,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from '../hook/useStyles';

import { proxy, useProxy } from 'valtio';
import { devtools } from 'valtio/utils';

let store = proxy({
     telaio: '',
     ante: '',
     base: '',
     altezza: '',
});
devtools(store, 'Paziente'); // DEBUG
function DialogAddDistinte({ open, handleClose }) {
     //const snapshot = useProxy(store, { sync: true });
     const theme = useTheme();
     const classes = useStyles(theme);
     const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

     const handleChange = (event) => {
          const { value, name } = event.target;
          //check files
          store = { ...store, [name]: value };
     };
     return (
          <div>
               <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='responsive-dialog-title'
               >
                    <DialogTitle id='responsive-dialog-title'>
                         {'Inserisci distinta'}
                    </DialogTitle>
                    <DialogContent>
                         <FormControl
                              variant='outlined'
                              className={classes.formControl}
                         >
                              <InputLabel htmlFor='outlined-telaio-native-simple'>
                                   Telaio
                              </InputLabel>
                              <Select
                                   native
                                   value={''}
                                   onChange={handleChange}
                                   label='Telaio'
                              >
                                   <option aria-label='None' value='' />
                                   <option value={3}>3</option>
                                   <option value={4}>4</option>
                              </Select>
                         </FormControl>
                    </DialogContent>
                    <DialogActions>
                         <Button
                              autoFocus
                              onClick={handleClose}
                              color='primary'
                         >
                              Disagree
                         </Button>
                         <Button
                              onClick={handleClose}
                              color='primary'
                              autoFocus
                         >
                              Agree
                         </Button>
                    </DialogActions>
               </Dialog>
          </div>
     );
}

export default DialogAddDistinte;
