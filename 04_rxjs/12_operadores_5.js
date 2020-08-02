const { of, Observable } = require("rxjs");

function TerminadoCom(parteFinal) {
  return function (fonte) {
    return Observable.create((subscribe) => {
      fonte.subscribe({
        next(texto) {
          if (Array.isArray(texto)) {
            subscribe.next(texto.filter((el) => el.endsWith(parteFinal)));
          } else if (texto.endsWith(parteFinal)) {
            subscribe.next(texto);
          }
        },

        error(e) {
          subscribe.error(e);
        },
        complete() {
          subscribe.complete();
        },
      });
    });
  };
}
of(["Ana Silva", "Maria Silva", "Pedro Rocha "])
  .pipe(TerminadoCom("Silva"))
  .subscribe(console.log);
