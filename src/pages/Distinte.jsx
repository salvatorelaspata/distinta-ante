import React from 'react';
import { Fab, Grid, Hidden, Paper, useTheme } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from '../components/hook/useStyles';
import StandardContainer from '../components/layout/StandardContainer';
import TableDistinte from '../components/TableDistinte/TableDistinte';
import AddIcon from '@material-ui/icons/Add';
import DialogAddDistinte from '../components/TableDistinte/DialogAddDistinte';
import useDistinte from '../components/hook/useDistinte';
import { deleteDistinta } from '../api';

const Distinte = () => {
    const { distinte, open, setOpen, updateList, setDistinte } = useDistinte(
        [],
        false
    );

    const theme = useTheme();
    const classes = useStyles(theme);

    const multipleRemove = function (selected) {
        let allPromise = [];
        let newsRows = [];
        distinte.map((d) => {
            const index = selected.map((s) => s.id).indexOf(d.id);
            index === -1 && newsRows.push(d);
            return allPromise.push(deleteDistinta(d.id));
        });

        setDistinte(newsRows);
        return allPromise;
    };

    return (
        <div>
            <StandardContainer>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper className={clsx(classes.paper)}>
                        <TableDistinte
                            rows={distinte}
                            multipleRemove={multipleRemove}
                        />
                    </Paper>
                </Grid>
            </StandardContainer>
            <Fab
                size='medium'
                color='secondary'
                aria-label='Add Formulario'
                className={classes.fabMargin}
                onClick={() => setOpen(true)}
            >
                <AddIcon />
            </Fab>
            <Hidden>
                <DialogAddDistinte
                    open={open}
                    handleClose={() => setOpen(false)}
                    updateList={updateList}
                />
            </Hidden>
        </div>
    );
};

export default Distinte;
