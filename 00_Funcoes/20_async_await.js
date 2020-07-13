function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      //console.log("executando promise");
      resolve("Vishh");
    }, tempo);
  });
}

// esperarPor(2000)
//   .then(() => console.log("execudando promise 1"))
//   .then(esperarPor)
//   .then(() => console.log("execudando promise 2"))
//   .then(esperarPor)
//   .then(() => console.log("execudando promise 3"));

async function executar() {
  await esperarPor(2000);
  console.log("Executar 1");

  await esperarPor(1500);
  console.log("Executar 2");

  await esperarPor(500);
  console.log("Executar 3");
}

executar();
