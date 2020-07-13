setTimeout(() => {
  console.log("Executando callback");

  setTimeout(() => {
    console.log("Executando nova callback");
    setTimeout(() => {
      console.log("Executando nova callback denovo");
    }, 2000);
  }, 2000);
}, 2000);

function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("executando promise");
      resolve("Vishh");
    }, tempo);
  });
}

let p = esperarPor(3000);
p.then((texto) => console.log(texto));
