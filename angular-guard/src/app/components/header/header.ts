import { Component } from '@angular/core';
import { of, interval, from, Subject, ReplaySubject, BehaviorSubject, AsyncSubject, map, filter} from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

  constructor() {
    // Example 1: simple observable
    // const source$ = from(['A', 'B', 'C']); // emits 1,2,3 then completes
    // source$.subscribe(value=> console.log(value));


    // // Example 2: interval
    // const timer$ = interval(1000); // emits 0,1,2,... every 1s
    // const sub = timer$.subscribe(v => console.log(v));

    // // Stop after 5s
    // setTimeout(() => sub.unsubscribe(), 5000);

    // const subject = new Subject<number>();

    // subject.subscribe(v => console.log('Observer first:', v))
    // subject.subscribe(v => console.log('Observer second:', v))

    // subject.next(1);
    // subject.next(2);


    // const replay$ = new ReplaySubject<number>(2); // buffer size 2; return the late subscribers
    // replay$.next(1);
    // replay$.next(2);
    // replay$.next(3);
    // replay$.next(5);
    // replay$.subscribe(v => console.log(v))


    // const behavior$ = new BehaviorSubject<string>('Hello'); // Always has a current value, delivered immediately to new subscribers.

    // behavior$.subscribe(v=> console.log('A:', v))
    // behavior$.next('world!')
    // behavior$.subscribe(v => console.log("B:", v)) // world!


    // const async$ = new AsyncSubject<number>(); // Emits only the last value when completed.

    // async$.subscribe(v=> console.log('Sub1:', v))

    // async$.next(1);
    // async$.next(2);
    // async$.next(3);

    // async$.subscribe(v => console.log('Sub2:', v))

    // async$.complete() //Emits only the last value when completed. // 3

    of(1,2,3,4,5).pipe(
      map(v => v * 2),
      filter(v => v > 5)
    ).subscribe(v => console.log(v)) 
  }

}
