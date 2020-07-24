const { Observable } = require("rxjs");

const obs = Observable.create((subscriber) => {
  subscriber.next("RXjs é bem poderoso");
  subscriber.next("RXjs é bem poderoso 2");
  subscriber.next("RXjs é bem poderoso 3");
  subscriber.next("RXjs é bem poderoso 4");

  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    subscriber.error("Que problema !!");
  }
});

obs.subscribe(
  (valor) => console.log(`Valor: ${valor}`),
  (error) => console.log(`Valor: ${error}`),
  () => console.log(`Completou tudo`)
);

obs.subscribe({
  next(valor) {
    console.log(`Valor: ${valor}`);
  },
  error(error) {
    console.log(`Valor: ${error}`);
  },
  complete() {
    console.log(`Completou tudo`);
  },
});
