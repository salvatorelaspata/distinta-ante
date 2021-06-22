export const constants = {
    DifferenzaAltezzaAnta3: 22,
    DifferenzaAltezzaAnta4: 30,
    DifferenzaTAScattoTelaio3: 74,
    DifferenzaTAScattoTelaio4: 74,
    DifferenzaFascione: 132,
    DifferenzaMezzaLamella: 27,
    AggiuntaLamella: 11,
    Differenza1Anta: 30,
    Differenza2Anta: 35,
    Differenza3Anta: 41,
    DeltaAntaManiglia: 35,
    DeltaAntaAB: 25,
    DeltaAntaIL: 35,
};

export const formulario = (l) => (a) => (b) => (h) => (t) => {
    const telaioB = b,
        telaioH = h;

    let antaB = 0,
        antaH = 0,
        fascione = 0,
        tAScatto = 0,
        mezzaLamella = 0,
        lamella = 0;

    let dueAnte = [
        { name: 'Anta', baseManiglia: 0, baseLaterale: 0 },
        { name: 'Fascione', baseManiglia: 0, baseLaterale: 0 },
        { name: 'Mezza Lamella', baseManiglia: 0, baseLaterale: 0 },
        { name: 'Lamella', baseManiglia: 0, baseLaterale: 0 },
    ];
    if (a === 1) {
        if (l === 3) {
            antaH = telaioH - constants.DifferenzaAltezzaAnta3; //22;
            tAScatto = antaH - constants.DifferenzaTAScattoTelaio3; //37;
        } else if (l === 4) {
            antaH = telaioH - constants.DifferenzaAltezzaAnta4; //30;
            tAScatto = antaH - constants.DifferenzaTAScattoTelaio4; //74;
        }
        antaB = telaioB - constants.Differenza1Anta; //30
    } else if (a === 2) {
        if (l === 3) {
            antaH = telaioH - constants.DifferenzaAltezzaAnta3; //22;
            tAScatto = antaH - constants.DifferenzaTAScattoTelaio3; //37;
        } else if (l === 4) {
            antaH = telaioH - constants.DifferenzaAltezzaAnta4; //30;
            tAScatto = antaH - constants.DifferenzaTAScattoTelaio4; //74;
        }

        antaB = (telaioB - constants.Differenza2Anta) / a; //35

        // calcolo finale
        if (t) {
            if (t.toLowerCase() === 'i' || t.toLowerCase() === 'l') {
                dueAnte[0].baseManiglia = antaB + constants.DeltaAntaIL; //35;
                dueAnte[0].baseLaterale = antaB - constants.DeltaAntaIL; //35;
            } else if (t.toLowerCase() === 'a' || t.toLowerCase() === 'b') {
                dueAnte[0].baseManiglia = antaB - constants.DeltaAntaAB; //25;
                dueAnte[0].baseLaterale = antaB + constants.DeltaAntaAB; //25;
            }

            dueAnte[1].baseManiglia =
                dueAnte[0].baseManiglia - constants.DifferenzaFascione; //132;    // fascione
            dueAnte[2].baseManiglia =
                dueAnte[1].baseManiglia - constants.DifferenzaMezzaLamella; //27;    // mezza lamella
            dueAnte[3].baseManiglia =
                dueAnte[2].baseManiglia + constants.AggiuntaLamella; //11;     // lamella

            dueAnte[1].baseLaterale =
                dueAnte[0].baseLaterale - constants.DifferenzaFascione; //132;    // fascione
            dueAnte[2].baseLaterale =
                dueAnte[1].baseLaterale - constants.DifferenzaMezzaLamella; //27;     // mezza lamella
            dueAnte[3].baseLaterale =
                dueAnte[2].baseLaterale + constants.AggiuntaLamella; //11;     // lamella
        }
    }

    fascione = antaB - constants.DifferenzaFascione; //132;
    mezzaLamella = fascione - constants.DifferenzaMezzaLamella; //27;
    lamella = mezzaLamella + constants.AggiuntaLamella; //11;

    const distinta = {
        pz: 1, //da parametrizzare
        telaio: l,
        nAnte: a,
        tipo: t,
        misureEsternotelaio: {
            base: b,
            altezza: h,
        },
        altezza: antaH,
        ante: {
            maniglia: a === 1 ? antaB : !t ? antaB : dueAnte[0].baseManiglia,
            laterale: a === 1 ? null : !t ? antaB : dueAnte[0].baseLaterale,
        },
        tAScatto: tAScatto,
        fascione: {
            maniglia:
                a === 1 ? fascione : !t ? fascione : dueAnte[1].baseManiglia,
            laterale: a === 1 ? null : !t ? fascione : dueAnte[1].baseLaterale,
        },
        mezzaLamella: {
            maniglia:
                a === 1
                    ? mezzaLamella
                    : !t
                    ? mezzaLamella
                    : dueAnte[2].baseManiglia,
            laterale:
                a === 1 ? null : !t ? mezzaLamella : dueAnte[2].baseLaterale,
        },
        lamella: {
            maniglia:
                a === 1 ? lamella : !t ? lamella : dueAnte[3].baseManiglia,
            laterale: a === 1 ? null : !t ? lamella : dueAnte[3].baseLaterale,
        },
    };
    return [
        { tipo: 'TELAIO', base: telaioB, altezza: telaioH },
        { tipo: 'ANTA', base: antaB, altezza: antaH },
        { tipo: 'FASCIONE', base: fascione, altezza: '' },
        { tipo: 'Mezza Lamella', base: mezzaLamella, altezza: '' },
        { tipo: 'Lamella', base: lamella, altezza: '' },
        { tipo: 'T A SCATTO', base: '', altezza: tAScatto },
        dueAnte,
        distinta,
    ];
};
