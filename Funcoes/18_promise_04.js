function GerarNumerosEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min;
      resolve(aleatorio);
    }, tempo);
  });
}

function GerarVariosNumeros() {
  return Promise.all([
    GerarNumerosEntre(1, 60, 1000),
    GerarNumerosEntre(1, 60, 500),
    GerarNumerosEntre(1, 60, 3000),
    GerarNumerosEntre(1, 60, 6000),
    GerarNumerosEntre(1, 60, 100),
  ]);
}
console.time("promise");
GerarVariosNumeros()
  .then(console.log)
  .then(() => {
    console.timeLog("promise");
    console.timeEnd("promise");
  });
