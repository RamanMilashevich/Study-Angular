import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-child12',
  imports: [],
  templateUrl: './child12.html',
  styleUrl: './child12.css'
})
export class Child12 implements OnInit, OnDestroy {
  history = new ReplaySubject<number>(10);
  private intervalId?: number;

  onNextA(value: number): void {
    console.log('[A]: ', value)
  }

  onNextB(value: number): void {
    console.log('[B]: ', value)
  }

  constructor() {
    // this.history.next(10)
  }

  ngOnInit(): void {
    // this.history.subscribe(value => {
    //   console.log('[From Sunscribe]', value)
    // })
    // this.intervalId = window.setInterval(() => {
    //   this.history.next(Math.random())
    //   console.log(this.history)
    // }, 10000)
  }

  ngOnDestroy(): void {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId)
    }
  }


}
