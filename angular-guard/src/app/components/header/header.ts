import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { of, interval, from, Subject, ReplaySubject, BehaviorSubject, AsyncSubject, filter, Observable, fromEvent} from 'rxjs';
import { map, tap, delay, switchMap, /* we'll swap this later */
concatMap,
mergeMap,
exhaustMap} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {

  private request$(label: string, ms: number): Observable<string> {
    console.log(`START ${label} (will take ${ms}ms)`);
    return of(`DONE ${label}`).pipe(
      delay(ms),
      tap(() => console.log(`END   ${label}`))
    );
  }

  constructor() {

    // fromEvent<MouseEvent>(window, 'click').pipe(
    //   map((_, i) => ({ label: `req#${i+1}`, ms: [1600, 1400, 1300][Math.min(i, 2)] })),
    //   tap(({label, ms}) => console.log(`CLICK → ${label} (${ms}ms)`)),
    //   switchMap(({ label, ms }) => this.request$(label, ms)),
    // ).subscribe(v => console.log('SUB:', v)); // Try triple-clicking quickly → only the last finishes.
    // fromEvent<MouseEvent>(window, 'click').pipe(
    //   map((_, i) => ({ label: `req#${i+1}`, ms: [1600, 1400, 1300][Math.min(i, 2)] })),
    //   tap(({label, ms}) => console.log(`CLICK → ${label} (${ms}ms)`)),
    //   concatMap(({ label, ms }) => this.request$(label, ms)),
    // ).subscribe(v => console.log('SUB:', v)); // Try triple-clicking quickly → all requests finish in order.

    // fromEvent<MouseEvent>(window, 'click').pipe(
    //   map((_, i) => ({ label: `req#${i+1}`, ms: [1600, 1400, 1300][Math.min(i, 2)] })),
    //   tap(({label, ms}) => console.log(`CLICK → ${label} (${ms}ms)`)),
    //   mergeMap(({ label, ms }) => this.request$(label, ms)),
    // ).subscribe(v => console.log('SUB:', v)); // Try triple-clicking quickly → all requests finish in parallel.

    //  fromEvent<MouseEvent>(window, 'click').pipe(
    //   map((_, i) => ({ label: `req#${i+1}`, ms: [600, 400, 300][Math.min(i, 2)] })),
    //   tap(({label, ms}) => console.log(`CLICK → ${label} (${ms}ms)`)),
    //   exhaustMap(({ label, ms }) => this.request$(label, ms)),
    // ).subscribe(v => console.log('SUB:', v)); // Try triple-clicking quickly → only the first request finishes, others are ignored.


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

  //   of(1,2,3,4,5).pipe(
  //     map(v => v * 2),
  //     filter(v => v > 5)
  //   ).subscribe(v => console.log(v))
  }

}
