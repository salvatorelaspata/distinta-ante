export const constants = {
    DifferenzaAltezzaAnta3: 22,
    DifferenzaAltezzaAnta4: 30,
    DifferenzaTAScattoTelaio4Ante3Lati: 37,
    DifferenzaTAScattoTelaio4Ante4Lati: 37,
    DifferenzaAltezzaAnta4Lati: 22,
    DifferenzaTAScattoTelaio3: 37,
    DifferenzaBase3Ante: 41,
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
            //Base Maniglia
            dueAnte[1].baseManiglia =
                dueAnte[0].baseManiglia - constants.DifferenzaFascione; //132;    // fascione
            dueAnte[2].baseManiglia =
                dueAnte[1].baseManiglia - constants.DifferenzaMezzaLamella; //27;    // mezza lamella
            dueAnte[3].baseManiglia =
                dueAnte[2].baseManiglia + constants.AggiuntaLamella; //11;     // lamella
            //Base Laterale
            dueAnte[1].baseLaterale =
                dueAnte[0].baseLaterale - constants.DifferenzaFascione; //132;    // fascione
            dueAnte[2].baseLaterale =
                dueAnte[1].baseLaterale - constants.DifferenzaMezzaLamella; //27;     // mezza lamella
            dueAnte[3].baseLaterale =
                dueAnte[2].baseLaterale + constants.AggiuntaLamella; //11;     // lamella
        }
    } else if (a === 3) {
        if (l === 3) {
            antaH = telaioH - constants.DifferenzaAltezzaAnta4Lati; //22
            tAScatto = antaH - constants.DifferenzaTAScattoTelaio4Ante3Lati; //37;
        } else if (l === 4) {
            antaH = telaioH - constants.DifferenzaAltezzaAnta4Lati; //22
            tAScatto = antaH - constants.DifferenzaTAScattoTelaio4Ante4Lati; //37;
        }

        antaB = (telaioB - constants.DifferenzaBase3Ante) / a; //41
        if (t) {
            if (t.toLowerCase() === 'm' || t.toLowerCase() === 'n') {
                dueAnte[0].baseManiglia = (telaioB - 41 - 60) / 3 + 30; //=(((D3-41)-60)/3)+30
                dueAnte[0].baseCentrale = (telaioB - 41 - 60) / 3 + 30; //=(((D3-41)-60)/3)+30
                dueAnte[0].baseLaterale = (telaioB - 41 - 60) / 3; //=((D3-41)-60)/3
            } else if (t.toLowerCase() === 'o' || t.toLowerCase() === 'p') {
                dueAnte[0].baseManiglia = (telaioB - 41 - 70) / 3; //=(((D3-41)-70)/3)
                dueAnte[0].baseCentrale = (telaioB - 41 - 70) / 3 + 30; //=(((D3-41)-70)/3)+70
                dueAnte[0].baseLaterale = (telaioB - 41 - 70) / 3; //=(((D3-41)-70)/3)
            } else if (t.toLowerCase() === 'c' || t.toLowerCase() === 'd') {
                dueAnte[0].baseManiglia = (telaioB - 41 - 50) / 3; //=(((D3-41)-50)/3)+50
                dueAnte[0].baseCentrale = (telaioB - 41 - 50) / 3 + 50; //=(((D3-41)-50)/3)
                dueAnte[0].baseLaterale = (telaioB - 41 - 50) / 3; //=(((D3-41)-50)/3)
            } else if (t.toLowerCase() === 'e' || t.toLowerCase() === 'f') {
                dueAnte[0].baseManiglia = (telaioB - 41 - 100) / 3; //=(((D3-41)-100)/3)
                dueAnte[0].baseCentrale = (telaioB - 41 - 100) / 3 + 50; //=(((D3-41)-100)/3)+50
                dueAnte[0].baseLaterale = (telaioB - 41 - 100) / 3 + 50; //=(((D3-41)-100)/3)+50
            }
        }
        // Base Maniglia
        dueAnte[1].baseManiglia =
            dueAnte[0].baseManiglia - constants.DifferenzaFascione; //132;    // fascione
        dueAnte[2].baseManiglia =
            dueAnte[1].baseManiglia - constants.DifferenzaMezzaLamella; //27;    // mezza lamella
        dueAnte[3].baseManiglia =
            dueAnte[2].baseManiglia + constants.AggiuntaLamella; //11;     // lamella

        // Base Centrale
        dueAnte[1].baseCentrale =
            dueAnte[0].baseCentrale - constants.DifferenzaFascione; //132;    // fascione
        dueAnte[2].baseCentrale =
            dueAnte[1].baseCentrale - constants.DifferenzaMezzaLamella; //27;    // mezza lamella
        dueAnte[3].baseCentrale =
            dueAnte[2].baseCentrale + constants.AggiuntaLamella; //11;     // lamella

        // Base Laterale
        dueAnte[1].baseLaterale =
            dueAnte[0].baseLaterale - constants.DifferenzaFascione; //132;    // fascione
        dueAnte[2].baseLaterale =
            dueAnte[1].baseLaterale - constants.DifferenzaMezzaLamella; //27;     // mezza lamella
        dueAnte[3].baseLaterale =
            dueAnte[2].baseLaterale + constants.AggiuntaLamella; //11;     // lamella
    } else if (a === 4) {
        if (l === 3) {
            antaH = telaioH - constants.DifferenzaAltezzaAnta4Lati; //22
            tAScatto = antaH - constants.DifferenzaTAScattoTelaio4Ante3Lati; //37;
        } else if (l === 4) {
            antaH = telaioH - constants.DifferenzaAltezzaAnta4Lati; //22
            tAScatto = antaH - constants.DifferenzaTAScattoTelaio4Ante4Lati; //37;
        }

        antaB = (telaioB - constants.DifferenzaBase3Ante) / a; //41
        if (t) {
            if (t.toLowerCase() === 'g' || t.toLowerCase() === 'h') {
                dueAnte[0].baseLateraleSX = (telaioB - 46 - 95) / 4 + 50; //=(((D3-46)-95)/4)+50
                dueAnte[0].baseManiglia = (telaioB - 46 - 95) / 4; //=(((D3-46)-95)/4)
                dueAnte[0].baseCentrale = (telaioB - 46 - 95) / 4; //=(((D3-46)-95)/4)
                dueAnte[0].baseLateraleDX = (telaioB - 46 - 95) / 4 + 50; //=(((D3-46)-95)/4)+50
            } else if (t.toLowerCase() === 'r' || t.toLowerCase() === 'q') {
                dueAnte[0].baseManiglia = (telaioB - 46 - 101) / 4; //=(((D3-46)-101)/4)
                dueAnte[0].baseCentrale = (telaioB - 46 - 101) / 4 + 70; //=(((D3-46)-101)/4)+70
                dueAnte[0].baseLateraleDX = (telaioB - 46 - 101) / 4 + 36; //=(((D3-46)-101)/4)+36
                dueAnte[0].baseLateraleSX = (telaioB - 46 - 101) / 4; //=(((D3-46)-101)/4)
            }
        }
        // Base Maniglia
        dueAnte[1].baseManiglia =
            dueAnte[0].baseManiglia - constants.DifferenzaFascione; //132;    // fascione
        dueAnte[2].baseManiglia =
            dueAnte[1].baseManiglia - constants.DifferenzaMezzaLamella; //27;    // mezza lamella
        dueAnte[3].baseManiglia =
            dueAnte[2].baseManiglia + constants.AggiuntaLamella; //11;     // lamella

        // Base Centrale
        dueAnte[1].baseCentrale =
            dueAnte[0].baseCentrale - constants.DifferenzaFascione; //132;    // fascione
        dueAnte[2].baseCentrale =
            dueAnte[1].baseCentrale - constants.DifferenzaMezzaLamella; //27;    // mezza lamella
        dueAnte[3].baseCentrale =
            dueAnte[2].baseCentrale + constants.AggiuntaLamella; //11;     // lamella

        // Base Laterale
        dueAnte[1].baseLateraleSX =
            dueAnte[0].baseLateraleSX - constants.DifferenzaFascione; //132;    // fascione
        dueAnte[2].baseLateraleSX =
            dueAnte[1].baseLateraleSX - constants.DifferenzaMezzaLamella; //27;     // mezza lamella
        dueAnte[3].baseLateraleSX =
            dueAnte[2].baseLateraleSX + constants.AggiuntaLamella; //11;     // lamella

        // Base Laterale
        dueAnte[1].baseLateraleDX =
            dueAnte[0].baseLateraleDX - constants.DifferenzaFascione; //132;    // fascione
        dueAnte[2].baseLateraleDX =
            dueAnte[1].baseLateraleDX - constants.DifferenzaMezzaLamella; //27;     // mezza lamella
        dueAnte[3].baseLateraleDX =
            dueAnte[2].baseLateraleDX + constants.AggiuntaLamella; //11;     // lamella
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
