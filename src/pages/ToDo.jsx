import { Fab, Grid, Paper, useTheme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';
import React from 'react';
import { useStyles } from '../components/hook/useStyles';
import StandardContainer from '../components/layout/StandardContainer';

//si andranno a gestire tutti i flussi di anagrafica
const ToDo = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div>
            <StandardContainer>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper className={clsx(classes.paper)}>ToDo</Paper>
                </Grid>
            </StandardContainer>
            <Fab
                size='medium'
                color='secondary'
                aria-label='Add Management'
                className={classes.fabMargin}
                onClick={() => {}}
                //gestire menù per selezionare la tipologia di inserimento ( commessa(admin), progetto(team leader), attività, task )
            >
                <AddIcon />
            </Fab>
        </div>
    );
};

export default ToDo;
