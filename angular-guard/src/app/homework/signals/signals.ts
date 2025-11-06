import { Component, signal } from '@angular/core';
import { SignalsChild1 } from "../signals-child1/signals-child1";
import { SignalsChild2 } from "../signals-child2/signals-child2";

@Component({
  selector: 'app-signals',
  imports: [SignalsChild1, SignalsChild2],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class SignalsParent {
  counter = signal(0);

  increment() {
    this.counter.set(this.counter() + 1)
  }

  decreement() {
    this.counter.set(this.counter() -1 )
  }

  reset() {
    this.counter.set(0)
  }
}
