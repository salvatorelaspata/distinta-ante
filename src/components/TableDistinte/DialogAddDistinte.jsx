import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid,
    Input,
    InputLabel,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "../hook/useStyles";

import { proxy, useSnapshot } from "valtio";
import { devtools } from "valtio/utils";
import { formulario } from "../hook/formulario";
import TableFormulario from "../TableFormulario/TableFormulario";
import { createDistinteItem } from "../../api";
import SelectOutlined from "../Input/SelectOutlined";
import clsx from "clsx";
const state = proxy({
    telaio: null,
    ante: null,
    tipo: null,
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
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    devtools(state, "distinta"); // DEBUG
}

function DialogAddDistinte({ open, handleClose, updateList }) {
    const snapshot = useSnapshot(state, { sync: true });
    const theme = useTheme();

    const classes = useStyles(theme);
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
    // Proporrei di schematizzare secondo:
    // - Posizione (che sarà automatica in funzione alle righe)
    // - pezzi per ogni posizione (solitamente è 1 ma potrebbero essere più di uno)(in questo caso non so a cosa potrebbe servire ma magari potremmo inserirlo per poi aggiungere in un secondo momento qualche funzione)
    // - numero di ante
    // - scelta della lettera (scelta opzionabile in 2 ante e obbligatoria in 3 o 4 ante)
    // - inserimento misure esterne telaio (base e altezza).
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                onEnter={handleEnter}
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Inserisci distinta"}
                </DialogTitle>
                <DialogContent>
                    <SelectOutlined
                        handleChange={handleChange}
                        label="Telaio"
                        value={snapshot.telaio || ""}
                        options={[
                            { key: 3, value: "Telaio a 3 lati" },
                            { key: 4, value: "Telaio a 4 lati" },
                        ]}
                    />
                    <SelectOutlined
                        handleChange={handleChange}
                        label="Ante"
                        value={snapshot.ante || ""}
                        options={[
                            { key: 1, value: "1 Anta" },
                            { key: 2, value: "2 Anta" },
                        ]}
                    />

                    <SelectOutlined
                        className={clsx(
                            parseInt(snapshot.ante) !== 2 && classes.none
                        )}
                        handleChange={handleChange}
                        label="Tipo"
                        value={snapshot.tipo || ""}
                        options={[
                            { key: "a", value: '2 ANTE "A & B"' },
                            { key: "i", value: '2 ANTE "I & L"' },
                        ]}
                    />
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <InputLabel htmlFor="outlined-telaio-native-simple">
                            Base
                        </InputLabel>
                        <Input
                            type="Number"
                            name="base"
                            onChange={handleChange}
                            value={snapshot.base || ""}
                        />
                    </FormControl>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <InputLabel htmlFor="outlined-telaio-native-simple">
                            Altezza
                        </InputLabel>
                        <Input
                            type="Number"
                            name="altezza"
                            value={snapshot.altezza || ""}
                            onChange={handleChange}
                        />
                    </FormControl>
                    {snapshot.telaio &&
                    snapshot.ante &&
                    snapshot.base &&
                    snapshot.altezza ? (
                        <div style={{ marginTop: "2rem" }}>
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
                    <Button autoFocus onClick={handleClose} color="secondary">
                        Annulla
                    </Button>
                    <Button onClick={handleSave} color="primary" autoFocus>
                        Salva
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DialogAddDistinte;
