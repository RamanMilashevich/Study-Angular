import { Component, computed, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, map, take } from 'rxjs';

@Component({
  selector: 'app-signals-convert-observable',
  imports: [],
  templateUrl: './signals-convert-observable.html',
  styleUrl: './signals-convert-observable.css'
})
export class SignalsConvertObservable {
    // Create an observable that emits a number every second
  timer$ = interval(1000).pipe(
    take(10),                // Complete after 10 emissions
    map(value => value + 1)
  );

  // Convert Observable to Signal that updates reactively
  timerCount = toSignal(this.timer$, { initialValue: 0 }); // toSignal reguires initial value

  // Computed signal based on the timerCount
  doubleTimerCount = computed(() => this.timerCount() * 2);

  constructor() {
    // Optional effect to react to changes
    effect(() => {
      console.log('Timer updated:', this.timerCount());
    });
  }
}
