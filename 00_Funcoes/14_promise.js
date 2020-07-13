const BD = ["Anderson", "Mivane", "Raphael", "Davi", "Gabriel"];

let nomes = new Promise(function (resolve) {
  resolve(BD);
});

const convertMinusculo = (texto) => texto.toLowerCase();
const primeiroElemento = (array) => array[0];
nomes.then(primeiroElemento).then(convertMinusculo).then(console.log);
