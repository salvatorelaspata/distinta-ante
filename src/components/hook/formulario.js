export const formulario = (l) => (a) => (b) => (h) => {
    const telaioB = b,
        telaioH = h;
    let antaB = 0,
        antaH = 0,
        fascione = 0,
        tAScatto = 0,
        mezzaLamella = 0,
        lamella = 0;
    if (a === 1) {
        if (l === 3) {
            antaH = telaioH - 22;
            tAScatto = antaH - 37;
        }
        if (l === 4) {
            antaH = telaioH - 30;
            tAScatto = antaH - 74;
        }
        antaB = telaioB - 30;
        fascione = antaB - 132;
    }
    if (a === 2) {
        if (l === 3) {
            antaH = telaioH - 22;
            tAScatto = antaH - 37;
        }
        if (l === 4) {
            antaH = telaioH - 30;
            tAScatto = antaH - 74;
        }
        antaB = (telaioB - 35) / 2;
        fascione = antaB - 132;
    }
    return [
        { tipo: 'TELAIO', base: telaioB, altezza: telaioH },
        { tipo: 'ANTA', base: antaB, altezza: antaH },
        { tipo: 'FASCIONE', base: fascione, altezza: '' },
        { tipo: 'T A SCATTO', base: '', altezza: tAScatto },
        { tipo: 'Mezza Lamella', base: mezzaLamella, altezza: '' },
        { tipo: 'Lamella', base: lamella, altezza: '' },
    ];
};
