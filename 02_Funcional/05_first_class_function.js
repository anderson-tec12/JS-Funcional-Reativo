// Diz-se que uma linguagem de programação possui funções de
// primeira classe quando funções
// nessa linguagem são tratadas com qualquer outra variável

// ouseja armazenar funcoes em variaveis

const x = 3;
const y = function (txt) {
  return `esse é o texto: ${txt}`;
};

console.log(x);
console.log(y("é possivel passar funçoes para variaveis"));
