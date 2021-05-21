import React from 'react';
import {
    Grid,
    Paper,
    TextField,
    Typography,
    useTheme,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from '../components/hook/useStyles';
import StandardContainer from '../components/layout/StandardContainer';
import TableFormulario from '../components/TableFormulario/TableFormulario';
import { formulario } from '../components/hook/formulario';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const rowsTelaio3Aula1 = formulario(3)(1);
const rowsTelaio3Aula2 = formulario(3)(2);
const rowsTelaio4Aula1 = formulario(4)(1);
const rowsTelaio4Aula2 = formulario(4)(2);

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
                        <form noValidate autoComplete='off'>
                            <Grid
                                container
                                direction='row'
                                justify='space-around'
                            >
                                <TextField
                                    label='Base'
                                    variant='outlined'
                                    onChange={(e) => setBase(e.target.value)}
                                    value={base}
                                />
                                <TextField
                                    label='Altezza'
                                    variant='outlined'
                                    onChange={(e) => setAltezza(e.target.value)}
                                    value={altezza}
                                />
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel1a-content'
                            id='panel1a-header'
                        >
                            <Typography className={classes.heading}>
                                Telaio su 3 lati
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
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
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel1a-content'
                            id='panel1a-header'
                        >
                            <Typography className={classes.heading}>
                                Telaio su 4 lati
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
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
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </StandardContainer>
        </>
    );
};

export default Formulario;
