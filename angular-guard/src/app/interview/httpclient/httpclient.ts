import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-httpclient',
  imports: [],
  templateUrl: './httpclient.html',
  styleUrl: './httpclient.css'
})
export class Httpclient {


  constructor() {
    const cold$ = new Observable<number>(subscriber => {
        console.log('side-effect: start');
        subscriber.next(Math.random());
        subscriber.complete();
    });
    cold$.subscribe(v => console.log('A', v));
    cold$.subscribe(v => console.log('B', v));
  }




}
