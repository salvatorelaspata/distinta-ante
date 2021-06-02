import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { proxy, useSnapshot } from 'valtio';
import { devtools } from 'valtio/utils';
import { formulario } from '../hook/formulario';
import TableFormulario from '../TableFormulario/TableFormulario';
import { createDistinteItem } from '../../api';
import SelectOutlined from '../Input/SelectOutlined';
import InputOutlined from '../Input/InputOutlined';
const state = proxy({
    telaio: null,
    ante: null,
    tipo: null,
    base: null,
    altezza: null,
});
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    devtools(state, 'distinta'); // DEBUG
}

function DialogAddDistinte({ open, handleClose, updateList }) {
    const snapshot = useSnapshot(state, { sync: true });
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (event) => {
        const { value, name } = event.target;
        state[name] = value;
        console.log(state);
    };

    const handleSave = () => {
        if (
            !snapshot.telaio ||
            !snapshot.ante ||
            !snapshot.base ||
            !snapshot.altezza
        )
            return;
        debugger;
        const f = formulario(parseInt(snapshot.telaio))(
            parseInt(snapshot.ante)
        )(parseInt(snapshot.base))(parseInt(snapshot.altezza))(snapshot.tipo);

        const distinta = f[7];
        createDistinteItem(distinta).then((res) => {
            handleClose();
            updateList(res);
        });
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
                    <Grid container justify='space-between'>
                        <SelectOutlined
                            handleChange={handleChange}
                            label='Telaio'
                            value={snapshot.telaio || ''}
                            options={[
                                { key: 3, value: 'Telaio a 3 lati' },
                                { key: 4, value: 'Telaio a 4 lati' },
                            ]}
                        />
                        <SelectOutlined
                            handleChange={handleChange}
                            label='Ante'
                            value={snapshot.ante || ''}
                            options={[
                                { key: 1, value: '1 Anta' },
                                { key: 2, value: '2 Anta' },
                            ]}
                        />

                        <SelectOutlined
                            handleChange={handleChange}
                            label='Tipo'
                            value={snapshot.tipo || ''}
                            options={[
                                { key: 'a', value: '2 ANTE "A & B"' },
                                { key: 'i', value: '2 ANTE "I & L"' },
                            ]}
                            visible={parseInt(snapshot.ante) >= 2}
                        />
                    </Grid>

                    <Grid container justify='space-between'>
                        <InputOutlined
                            handleChange={handleChange}
                            type='Number'
                            label='Base'
                            name='base'
                            value={snapshot.base}
                        />
                        <InputOutlined
                            handleChange={handleChange}
                            type='Number'
                            label='Altezza'
                            name='altezza'
                            value={snapshot.altezza}
                        />
                    </Grid>
                    {snapshot.telaio &&
                    snapshot.ante &&
                    snapshot.base &&
                    snapshot.altezza ? (
                        <div style={{ marginTop: '2rem' }}>
                            <TableFormulario
                                rows={formulario(parseInt(snapshot.telaio))(
                                    parseInt(snapshot.ante)
                                )(parseInt(snapshot.base))(
                                    parseInt(snapshot.altezza)
                                )()}
                                ante={snapshot.ante}
                            />
                        </div>
                    ) : null}
                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={handleClose} color='secondary'>
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
