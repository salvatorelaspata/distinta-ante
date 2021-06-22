import React from 'react';
import { Fab, Grid, Hidden, Paper, useTheme } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from '../components/hook/useStyles';
import StandardContainer from '../components/layout/StandardContainer';
import TableDistinte from '../components/TableDistinte/TableDistinte';
import AddIcon from '@material-ui/icons/Add';
import DialogDistinte from '../components/TableDistinte/DialogDistinte';
import useDistinte from '../components/hook/useDistinte';
import { deleteDistinta } from '../api';
import { useState } from 'react';

const Distinte = () => {
    const [prevalue, setPrevalue] = useState(null);
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

    const editDistinta = function (selected) {
        const [edit] = selected;
        const obj = {
            telaio: edit.telaio,
            ante: edit.ante,
            tipo: edit.tipo,
            base: edit.base,
            altezza: edit.altezza,
        };
        setPrevalue(obj);
        setOpen(true);
    };

    return (
        <div>
            <StandardContainer>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper className={clsx(classes.paper)}>
                        <TableDistinte
                            rows={distinte}
                            multipleRemove={multipleRemove}
                            editDistinta={editDistinta}
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
                <DialogDistinte
                    open={open}
                    handleClose={() => setOpen(false)}
                    updateList={updateList}
                    prevalue={prevalue}
                />
            </Hidden>
        </div>
    );
};

export default Distinte;
