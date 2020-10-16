const { Observable } = require("rxjs");

function getObservable() {
  return new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next(1);
    }, 1000);
  });
}

const obs = getObservable();
obs.subscribe(console.log);
