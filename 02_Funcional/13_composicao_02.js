function composicao(...fns) {
  return function (valor) {
    return fns.reduce(async (acc, fn) => {
      //Comparando se é uma promisse
      if (Promise.resolve(acc) === acc) {
        let awaiting = await acc;
        return fn(awaiting);
      } else {
        return fn(acc);
      }
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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(texto.split("").join(" "));
    }, 3000);
  });
}

const resultado = composicao(gritar, enfatizar, tornaLento)("para");

resultado.then(console.log);
