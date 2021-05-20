import React from 'react';
import {
     Button,
     Dialog,
     DialogActions,
     DialogContent,
     DialogTitle,
     FormControl,
     Input,
     InputLabel,
     Select,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from '../hook/useStyles';

import { proxy, useSnapshot } from 'valtio';
import { devtools } from 'valtio/utils';
import { formulario } from '../hook/formulario';
import TableFormulario from '../TableFormulario/TableFormulario';
import { createDistinteItem } from '../../api';
const state = proxy({
     telaio: null,
     ante: null,
     base: null,
     altezza: null,
     telaioB: null,
     telaioH: null,
     antaB: null,
     antaH: null,
     fascione: null,
     tAScatto: null,
     mezzaLamella: null,
     lamella: null,
});
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
     devtools(state, 'distinta'); // DEBUG
}

function DialogAddDistinte({ open, handleClose, updateList }) {
     const snapshot = useSnapshot(state, { sync: true });
     const theme = useTheme();

     const classes = useStyles(theme);
     const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

     const handleChange = (event) => {
          const { value, name } = event.target;
          state[name] = value;
     };

     const handleSave = () => {
          if (
               !snapshot.telaio ||
               !snapshot.ante ||
               !snapshot.base ||
               !snapshot.altezza
          )
               return;
          const [telaio, anta, fascione, tAScatto] = formulario(
               parseInt(snapshot.telaio)
          )(parseInt(snapshot.ante))(parseInt(snapshot.base))(
               parseInt(snapshot.altezza)
          );
          state.telaioB = telaio.base;
          state.telaioH = telaio.altezza;
          state.antaB = anta.base;
          state.antaH = anta.altezza;
          state.fascione = fascione.base;
          state.tAScatto = tAScatto.altezza;
          createDistinteItem({ id: new Date().getTime(), ...state }).then(
               (res) => {
                    handleClose();
                    updateList(res);
               }
          );
     };

     const handleEnter = () => {
          for (const key in state) {
               if (Object.hasOwnProperty.call(state, key)) {
                    state[key] = null;
               }
          }
     };

     return (
          <div>
               <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='responsive-dialog-title'
                    onEnter={handleEnter}
               >
                    <DialogTitle id='responsive-dialog-title'>
                         {'Inserisci distinta'}
                    </DialogTitle>
                    <DialogContent>
                         <div>
                              <FormControl
                                   variant='outlined'
                                   className={classes.formControl}
                              >
                                   <InputLabel htmlFor='outlined-telaio-native-simple'>
                                        Telaio
                                   </InputLabel>
                                   <Select
                                        native
                                        value={snapshot.telaio || ''}
                                        onChange={handleChange}
                                        label='Telaio'
                                        name='telaio'
                                   >
                                        <option aria-label='None' value='' />
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                   </Select>
                              </FormControl>
                              <FormControl
                                   variant='outlined'
                                   className={classes.formControl}
                              >
                                   <InputLabel htmlFor='outlined-telaio-native-simple'>
                                        Ante
                                   </InputLabel>
                                   <Select
                                        native
                                        value={snapshot.ante || ''}
                                        onChange={handleChange}
                                        label='Ante'
                                        name='ante'
                                   >
                                        <option aria-label='None' value='' />
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                   </Select>
                              </FormControl>
                         </div>
                         <div>
                              <FormControl
                                   variant='outlined'
                                   className={classes.formControl}
                              >
                                   <InputLabel htmlFor='outlined-telaio-native-simple'>
                                        Base
                                   </InputLabel>
                                   <Input
                                        type='Number'
                                        name='base'
                                        onChange={handleChange}
                                        value={snapshot.base || ''}
                                   />
                              </FormControl>
                              <FormControl
                                   variant='outlined'
                                   className={classes.formControl}
                              >
                                   <InputLabel htmlFor='outlined-telaio-native-simple'>
                                        Altezza
                                   </InputLabel>
                                   <Input
                                        type='Number'
                                        name='altezza'
                                        value={snapshot.altezza || ''}
                                        onChange={handleChange}
                                   />
                              </FormControl>
                         </div>
                         {snapshot.telaio &&
                         snapshot.ante &&
                         snapshot.base &&
                         snapshot.altezza ? (
                              <div style={{ marginTop: '2rem' }}>
                                   <TableFormulario
                                        rows={formulario(
                                             parseInt(snapshot.telaio)
                                        )(parseInt(snapshot.ante))(
                                             parseInt(snapshot.base)
                                        )(parseInt(snapshot.altezza))}
                                        ante={snapshot.ante}
                                   />
                              </div>
                         ) : null}
                    </DialogContent>

                    <DialogActions>
                         <Button
                              autoFocus
                              onClick={handleClose}
                              color='secondary'
                         >
                              Annulla
                         </Button>
                         <Button onClick={handleSave} color='primary' autoFocus>
                              Salva
                         </Button>
                    </DialogActions>
               </Dialog>
          </div>
     );
}

export default DialogAddDistinte;
