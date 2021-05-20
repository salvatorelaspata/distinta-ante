import {
     Grid,
     Paper,
     TextField,
     Typography,
     useTheme,
} from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { useStyles } from '../components/hook/useStyles';
import StandardContainer from '../components/layout/StandardContainer';
import TableFormulario from '../components/TableFormulario/TableFormulario';
import { formulario } from '../components/hook/formulario';

const rowsTelaio3Aula1 = formulario(3)(1);
const rowsTelaio3Aula2 = formulario(3)(2);
const rowsTelaio4Aula1 = formulario(4)(1);
const rowsTelaio4Aula2 = formulario(4)(2);

//si andranno a gestire tutti i flussi di anagrafica
const Formulario = () => {
     const theme = useTheme();
     const classes = useStyles(theme);

     const [base, setBase] = React.useState(1000);
     const [altezza, setAltezza] = React.useState(1000);

     return (
          <>
               <StandardContainer>
                    <Grid item xs={12} md={12} lg={12}>
                         <Paper className={clsx(classes.paper)}>
                              <Grid
                                   container
                                   direction='row'
                                   justify='space-around'
                              >
                                   <form noValidate autoComplete='off'>
                                        <TextField
                                             label='Base'
                                             variant='outlined'
                                             onChange={(e) =>
                                                  setBase(e.target.value)
                                             }
                                             value={base}
                                        />
                                        <TextField
                                             label='Altezza'
                                             variant='outlined'
                                             onChange={(e) =>
                                                  setAltezza(e.target.value)
                                             }
                                             value={altezza}
                                        />
                                   </form>
                              </Grid>
                         </Paper>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                         <Paper className={clsx(classes.paper)}>
                              <Typography
                                   component='h5'
                                   variant='h5'
                                   color='inherit'
                                   noWrap
                              >
                                   Telaio su 3 lati
                              </Typography>
                              <Grid
                                   container
                                   direction='row'
                                   justify='space-around'
                              >
                                   <TableFormulario
                                        rows={rowsTelaio3Aula1(base)(altezza)}
                                        ante={1}
                                   />
                                   <TableFormulario
                                        rows={rowsTelaio3Aula2(base)(altezza)}
                                        ante={2}
                                   />
                              </Grid>
                         </Paper>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                         <Paper className={clsx(classes.paper)}>
                              <Typography
                                   component='h5'
                                   variant='h5'
                                   color='inherit'
                                   noWrap
                              >
                                   Telaio su 4 lati
                              </Typography>
                              <Grid
                                   container
                                   direction='row'
                                   justify='space-around'
                              >
                                   <TableFormulario
                                        rows={rowsTelaio4Aula1(base)(altezza)}
                                        ante={1}
                                   />
                                   <TableFormulario
                                        rows={rowsTelaio4Aula2(base)(altezza)}
                                        ante={2}
                                   />
                              </Grid>
                         </Paper>
                    </Grid>
               </StandardContainer>
          </>
     );
};

export default Formulario;
