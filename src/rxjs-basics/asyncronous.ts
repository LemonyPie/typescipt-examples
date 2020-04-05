import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  let count = 0;

  const interval = setInterval(() => {
    subscriber.next(count++);
    subscriber.complete();
  }, 1000);

  return () => {
    console.log('interval cleared');
    clearInterval(interval);
  }
});

const subscriber = {
  next: value => console.log(value),
  error: err => console.log(err),
  complete: () => console.log('complete!')
};

const subscription = observable.subscribe(subscriber);

