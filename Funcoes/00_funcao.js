let a = 4;
console.log(a);

//function declaration
function bomDia() {
  console.log("Bom dia!");
}

bomDia();

//function expression
const boaTarde = function () {
  console.log("Boa tarde");
};

boaTarde();

function somar(a, b) {
  return a + b;
}

//ignorara parametros que não foram setados
const resultado = somar(3, 5, 3, 4, 5, 6, 7, 8);
console.log(resultado);
