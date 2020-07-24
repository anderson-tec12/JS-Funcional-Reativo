const { interval } = require("rxjs");

const gerarNumeros = interval(500); //operador de criação

//registrando um observer
//subscribe é o metodo para registrar observers
const sub1 = gerarNumeros.subscribe((num) => console.log(Math.pow(2, num)));

setTimeout(() => {
  //cancela o registro
  sub1.unsubscribe();
}, 8000);
