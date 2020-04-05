import { Observable } from 'rxjs';


const observable = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

const observer = {
  next: ( value: any) => console.log('next', value),
  error: ( err: any) => console.log('error', err),
  complete: () => console.log('complete')
};

observable.subscribe(observer);
