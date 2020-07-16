//mock = é quando vc tenta simular uma depedencia externa da função,
// exemplo uma consulta  a api
//que torna a função impura

let qtdDeExecucoes = 0;
//função pura
function somar(a, b) {
  qtdDeExecucoes++; // efeito colateral observáveis, tornou função impura
  return a + b;
}

console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(qtdDeExecucoes);
