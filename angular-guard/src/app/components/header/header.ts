import { Component } from '@angular/core';
import { of, interval, from, Subject, ReplaySubject} from 'rxjs';

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

    const subject = new Subject<number>();

    subject.subscribe(v => console.log('Observer first:', v))
    subject.subscribe(v => console.log('Observer second:', v))

    subject.next(1);
    subject.next(2);


    const replay$ = new ReplaySubject<number>(2); // buffer size 2; return the late subscribers
    replay$.next(1);
    replay$.next(2);
    replay$.next(3);
    replay$.next(5);
    replay$.subscribe(v => console.log(v))
  }
}
