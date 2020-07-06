function bomDia() {
  console.log("Bom dia!");
}

const boaTarde = function () {
  console.log("Boa tarde!");
};

function executarQualquerCoisa(fn) {
  console.log(typeof fn);

  if (typeof fn === "function") {
    fn();
  }
  // fn();
}
executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// retornando ua funão a partir de uma outra função
function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

//executando sem crair variaveis
console.log(potencia(2)(2));
console.log(typeof potencia(2));
