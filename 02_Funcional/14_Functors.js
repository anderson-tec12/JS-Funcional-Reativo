//wrapper = container

function tipoSeguro(valor) {
  return {
    valor,
    map(fn) {
      return tipoSeguro(fn(this.valor));
    },
  };
}

const resultado = tipoSeguro("esse é um texto").map((t) => t.toUpperCase());

console.log(resultado);
