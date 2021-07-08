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
import TableFormularioDueAnte from '../components/TableFormulario/TableFormularioDueAnte';
import TableFormulario3Ante from '../components/TableFormulario/TableFormulario3Ante';
import TableFormulario4Ante from '../components/TableFormulario/TableFormulario4Ante';
import Legend from '../components/Legend';

import abImage from './img/AB.png';
import ilImage from './img/IL.png';
const rowsTelaio3 = formulario(3);
const rowsTelaio4 = formulario(4);
const rowsTelaio3Anta1 = rowsTelaio3(1);
const rowsTelaio3Anta2 = rowsTelaio3(2);
const rowsTelaio3Anta3 = rowsTelaio3(3);
const rowsTelaio3Anta4 = rowsTelaio3(4);
const rowsTelaio4Anta1 = rowsTelaio4(1);
const rowsTelaio4Anta2 = rowsTelaio4(2);
const rowsTelaio4Anta3 = rowsTelaio4(3);
const rowsTelaio4Anta4 = rowsTelaio4(4);

const Formulario = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const [base, setBase] = React.useState(1000);
    const [altezza, setAltezza] = React.useState(1000);

    return (
        <StandardContainer>
            <Grid item xs={12} md={12} lg={12}>
                <Paper className={clsx(classes.paper)}>
                    <form noValidate autoComplete='off'>
                        <Grid container direction='row' justify='space-around'>
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
                            <Legend />
                        </Grid>
                    </form>
                </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='Telaio su 3 lati'
                    >
                        <Typography className={classes.heading}>
                            Telaio su 3 lati
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container direction='row' justify='space-around'>
                            <TableFormulario
                                rows={rowsTelaio3Anta1(base)(altezza)()}
                                ante={1}
                            />
                            <TableFormulario
                                rows={rowsTelaio3Anta2(base)(altezza)()}
                                ante={2}
                            />
                            <TableFormulario
                                rows={rowsTelaio3Anta3(base)(altezza)()}
                                ante={3}
                            />
                            <TableFormulario
                                rows={rowsTelaio3Anta4(base)(altezza)()}
                                ante={4}
                            />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='Telaio su 4 lati'
                    >
                        <Typography className={classes.heading}>
                            Telaio su 4 lati
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container direction='row' justify='space-around'>
                            <TableFormulario
                                rows={rowsTelaio4Anta1(base)(altezza)()}
                                ante={1}
                            />
                            <TableFormulario
                                rows={rowsTelaio4Anta2(base)(altezza)()}
                                ante={2}
                            />
                            <TableFormulario
                                rows={rowsTelaio4Anta3(base)(altezza)()}
                                ante={3}
                            />
                            <TableFormulario
                                rows={rowsTelaio4Anta4(base)(altezza)()}
                                ante={4}
                            />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
                <Accordion defaultExpanded={false}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='2 ANTE "I & L"'
                    >
                        <Typography className={classes.heading}>
                            2 ANTE "I & L"
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid
                            container
                            direction='column'
                            justify='center'
                            alignItems='center'
                        >
                            <img src={ilImage} alt='IL' width='50%' />
                            <TableFormularioDueAnte
                                rows={
                                    rowsTelaio4Anta2(base)(altezza)('i').slice(
                                        6,
                                        7
                                    )[0]
                                }
                            />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Accordion defaultExpanded={false}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='2 ANTE "A & B"'
                    >
                        <Typography className={classes.heading}>
                            2 ANTE "A & B"
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid
                            container
                            direction='column'
                            justify='center'
                            alignItems='center'
                        >
                            <img src={abImage} alt='AB' width='50%' />
                            <TableFormularioDueAnte
                                rows={
                                    rowsTelaio4Anta2(base)(altezza)('a').slice(
                                        6,
                                        7
                                    )[0]
                                }
                            />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Accordion defaultExpanded={false}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='3 ANTE "M & N"'
                    >
                        <Typography className={classes.heading}>
                            3 ANTE "M & N"
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid
                            container
                            direction='column'
                            justify='center'
                            alignItems='center'
                        >
                            {/* <img src={ilImage} alt='IL' width='50%' /> */}
                            <TableFormulario3Ante
                                rows={
                                    rowsTelaio4Anta3(base)(altezza)('m').slice(
                                        6,
                                        7
                                    )[0]
                                }
                            />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Accordion defaultExpanded={false}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='3 ANTE "O & P"'
                    >
                        <Typography className={classes.heading}>
                            3 ANTE "O & P"
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid
                            container
                            direction='column'
                            justify='center'
                            alignItems='center'
                        >
                            {/* <img src={abImage} alt='AB' width='50%' /> */}
                            <TableFormulario3Ante
                                rows={
                                    rowsTelaio4Anta3(base)(altezza)('o').slice(
                                        6,
                                        7
                                    )[0]
                                }
                            />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Accordion defaultExpanded={false}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='3 ANTE "C & D"'
                    >
                        <Typography className={classes.heading}>
                            3 ANTE "C & D"
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid
                            container
                            direction='column'
                            justify='center'
                            alignItems='center'
                        >
                            {/* <img src={ilImage} alt='IL' width='50%' /> */}
                            <TableFormulario3Ante
                                rows={
                                    rowsTelaio4Anta3(base)(altezza)('c').slice(
                                        6,
                                        7
                                    )[0]
                                }
                            />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Accordion defaultExpanded={false}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='3 ANTE "E & F"'
                    >
                        <Typography className={classes.heading}>
                            3 ANTE "E & F"
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid
                            container
                            direction='column'
                            justify='center'
                            alignItems='center'
                        >
                            {/* <img src={ilImage} alt='IL' width='50%' /> */}
                            <TableFormulario3Ante
                                rows={
                                    rowsTelaio4Anta3(base)(altezza)('e').slice(
                                        6,
                                        7
                                    )[0]
                                }
                            />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Accordion defaultExpanded={false}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='4 ANTE "G & H"'
                    >
                        <Typography className={classes.heading}>
                            4 ANTE "G & H"
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid
                            container
                            direction='column'
                            justify='center'
                            alignItems='center'
                        >
                            {/* <img src={ilImage} alt='IL' width='50%' /> */}
                            <TableFormulario4Ante
                                rows={
                                    rowsTelaio4Anta4(base)(altezza)('g').slice(
                                        6,
                                        7
                                    )[0]
                                }
                            />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Accordion defaultExpanded={false}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='4 ANTE "Q & R"'
                    >
                        <Typography className={classes.heading}>
                            4 ANTE "Q & R"
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid
                            container
                            direction='column'
                            justify='center'
                            alignItems='center'
                        >
                            {/* <img src={ilImage} alt='IL' width='50%' /> */}
                            <TableFormulario4Ante
                                rows={
                                    rowsTelaio4Anta4(base)(altezza)('q').slice(
                                        6,
                                        7
                                    )[0]
                                }
                            />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </StandardContainer>
    );
};

export default Formulario;
