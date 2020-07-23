function gerarNumero() {
  return {
    iniciar(fn, intervalor = 1000) {
      let num = 0;
      const interval = setInterval(() => {
        fn(num++);
      }, intervalor);

      return {
        para() {
          clearInterval(interval);
        },
      };
    },
  };
}

const temp1 = gerarNumero();
const exec1 = temp1.iniciar((numero) => {
  console.log(`Mult ${numero * 2}`);
});

const temp2 = gerarNumero();
const exec2 = temp2.iniciar((a) => {
  console.log(`Somar ${a + 100}`);
}, 2000);

setTimeout(() => {
  exec1.para();
  exec2.para();
}, 10000);
