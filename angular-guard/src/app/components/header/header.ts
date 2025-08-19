import { Component } from '@angular/core';
import { of, interval,  } from 'rxjs';

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
    const source$ = of(1, 2, 3); // emits 1,2,3 then completes
    source$.subscribe(value=> console.log(value));

    // Example 2: interval
    const timer$ = interval(1000); // emits 0,1,2,... every 1s
    const sub = timer$.subscribe(v => console.log(v));

    // Stop after 5s
    setTimeout(() => sub.unsubscribe(), 5000);
  }
}
