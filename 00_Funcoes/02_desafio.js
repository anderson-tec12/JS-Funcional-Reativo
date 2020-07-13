const soma = function (valor1) {
  return function (valor2) {
    return function (valor3) {
      return valor1 + valor2 + valor3;
    };
  };
};

const resultadoSoma = soma(2)(4)(4);

console.log(resultadoSoma);

const calcular = function (valor1) {
  return function (valor2) {
    return function (fn) {
      return fn(valor1, valor2);
    };
  };
};

const opSomar = (v1, v2) => {
  return v1 + v2;
};
const opSubtrair = (v1, v2) => v1 - v2;
const opMultiplicar = (v1, v2) => v1 * v2;
const opDivisao = (v1, v2) => v1 / v2;

const resultadoOperacao1 = calcular(10)(10)(opSomar);

console.log(resultadoOperacao1);
