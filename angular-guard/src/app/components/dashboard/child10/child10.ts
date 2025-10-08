import { Component } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-child10',
  imports: [],
  templateUrl: './child10.html',
  styleUrl: './child10.css'
})
export class Child10 {
  bus = new Subject<number>()

  onNextA(value: number): void {
    console.log('[CHILD10, Subject] - A: ', value)
  }

  onNextB(value: number): void {
    console.log('[CHILD10, Subject] - B: ', value)
  }

  onError(err: unknown) {
    console.error(err)
  }
  onComplete(): void {
    console.log('[CHILD10, Subject] - complited')
  }

  subA: Subscription =  this.bus.subscribe({ next: this.onNextA, error: this.onError, complete: this.onComplete})

  constructor() {
    // console.log('Subject: ', this.bus)
    // this.bus.next(1)
    // this.bus.next(2)
  }
  ngOnInit() {
    this.bus.next(1)
    this.bus.next(2)
  }

  subB: Subscription = this.bus.subscribe({ next: this.onNextB, error: this.onError, complete: this.onComplete})
}
