export const formulario = (l) => (a) => (b) => (h) => {
   console.log(l,a,b,h)
   const telaioB = b, telaioH = h;
   let antaB = 0, antaH= 0;
   let fascioneB= 0;
   let tAScattoH= 0;
   if(a === 1){
      if(l === 3){
         antaH = telaioH - 22;
         tAScattoH = antaH - 37;
      }
      if(l === 4){
         antaH = telaioH - 30;
         tAScattoH = antaH - 74;
      }
      antaB = telaioB - 30;
      fascioneB = antaB - 132;
   }
   if(a === 2){
      if(l === 3){
         antaB = (telaioB - 38) / 2;
         antaH = telaioH - 22;
         tAScattoH = antaH - 37;
      }
      if(l === 4){
         antaB = (telaioB - 35) / 2;
         antaH = telaioH - 30;
         tAScattoH = antaH - 74;
      }
      fascioneB = antaB - 132;
   }
   return [
      { tipo: "TELAIO", base: telaioB, altezza: telaioH},
      { tipo: "ANTA", base: antaB, altezza: antaH},
      { tipo: "FASCIONE", base: fascioneB, altezza: ""},
      { tipo: "T A SCATTO", base: "", altezza: tAScattoH},
   ]
};