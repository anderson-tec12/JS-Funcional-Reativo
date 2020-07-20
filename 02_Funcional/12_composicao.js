function composicao(...fns) {
  return function (valor) {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, valor);
  };
}

function gritar(texto) {
  return texto.toUpperCase();
}

function enfatizar(texto) {
  return `${texto}!!!!`;
}

function tornaLento(texto) {
  return texto.split("").join(" ");
}

const resultado = composicao(gritar, enfatizar, tornaLento)("para");

console.log(resultado);
