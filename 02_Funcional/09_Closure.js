//Closure é quando uma função  "lembra"
//seu escopo lexico , mesmo  quando a função
// é executada fora desse  escopo lexixo

const somarxMais3 = require("./09_closure_escopo");
const x = 1000;
console.log(somarxMais3());
