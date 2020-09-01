const Observable = require('zen-observable');

let observable = new Observable(observer => {
  // Emit a single value after 100 ms
  let timer = setTimeout(() => {
    observer.next('hello');
    observer.complete();
  }, 100);

  // On unsubscription, cancel the timer
  return () => clearTimeout(timer);
});

// subscribe to an observable object
observable.subscribe(x => console.log(x));
