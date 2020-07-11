const funcionarOuNao = (valor, chanceErro) => {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Ocorreu um erro");
    } else {
      resolve(valor);
    }
  });
};

funcionarOuNao("Testando", 1)
  .then(console.log)
  .catch((e) => console.log(e))
  .then(() =>
    console.log(
      "Caso caia no cacth, o then vai ser executado porem não existe mais dados"
    )
  );
