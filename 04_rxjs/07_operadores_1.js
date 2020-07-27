// Os dois tipos....
// 1. Operadores de criação
// 2. Operadores  Encadeaveis (Pipeable op)

// 1. Operadores de criação
const { of } = require("rxjs");

// 2. Operadores  Encadeaveis (Pipeable op)
const { last, first, map } = require("rxjs/operators");

of(1, 2, "ana", false, "ultimo")
  // .pipe(first())
  .pipe(last())
  .pipe(map((v) => v[0]))
  .subscribe((valor) => {
    console.log(`O valor gerado foi ${valor}`);
  });
