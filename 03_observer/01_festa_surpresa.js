const readline = require("readline");

function obterRespota(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(pergunta, (resp) => {
      resolve(resp);
      rl.close();
    });
  });
}

//observer
function namorada() {
  //setTimeout(() => {
  console.log("N: Apagar as luzes");
  console.log("N: Pedir silencio");
  console.log("N: Surpresa!!!");
  //}, 2000);
}

//observer
function sindico() {
  //setTimeout(() => {
  console.log("S: Monitorando o barulho");
  //}, 1000);n
}

//subject
async function porteiro(interessados) {
  while (true) {
    const resp = await obterRespota("O namorado chegou? (s/N/q)");

    if (resp.toLowerCase() === "s") {
      (interessados || []).forEach((obs) => obs());
    } else if (resp.toLowerCase() === "q") {
      break;
    }
  }
}

//chamada da função que registra os observadores
porteiro([namorada, sindico]); //registrando dois observadores [namorada, sindico]
//obterRespota("Esse é um teste ?").then(console.log);
