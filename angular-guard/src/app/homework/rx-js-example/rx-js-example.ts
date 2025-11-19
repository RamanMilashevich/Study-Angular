import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of, combineLatest, interval, forkJoin, zip, Subject } from 'rxjs';
import { delay, switchMap, concatMap, mergeMap, exhaustMap, take, map } from 'rxjs/operators';


@Component({
  selector: 'app-rx-js-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rx-js-example.html',
  styleUrls: ['./rx-js-example.css']
})
export class RxJsExample {
  results: string[] = [];

  // Simulate an HTTP request that emits a string after 1 second delay
  fakeRequest(value: number) {
    return of(`Response for ${value}`).pipe(delay(1000));
  }

  // Source observable emits 1, then 2 after 500ms, then 3 after another 500ms
  source$ = interval(500).pipe(take(3), map(i => i + 1));

  // Async task for examples simulating delayed response
  asyncTask = (val: number) => of(`Result ${val}`).pipe(delay(1000));

  runSwitchMap() {
    this.results = [];
    of(1, 2, 3).pipe(
      switchMap(value => this.fakeRequest(value))
    ).subscribe(response => this.results.push(response));
  }

  runConcatMap() {
    this.results = [];
    of(1, 2, 3).pipe(
      concatMap(value => this.fakeRequest(value))
    ).subscribe(response => {this.results.push(response), console.log(response)}); // 1, 2, 3
  }

  runMergeMap() {
    this.results = [];
    of(1, 2, 3).pipe(
      mergeMap(value => this.fakeRequest(value))
    ).subscribe(response => {this.results.push(response), console.log(response)});
  }

  runExhaustMap() {
    this.results = [];
    of(1, 2, 3).pipe(
      exhaustMap(value => this.fakeRequest(value))
    ).subscribe(response => this.results.push(response));
  }

  // Examples for combineLatest and forkJoin
  apiCall1$ = of('Data from API 1').pipe(delay(500));
  apiCall2$ = of('Data from API 2').pipe(delay(1000));

  // Optionally, demonstrate mergeMap, switchMap etc with source$

  runMergeMapSource() {
    this.results = [];
    this.source$.pipe(
      mergeMap(val => this.asyncTask(val))
    ).subscribe(val => this.results.push('mergeMap: ' + val));
  }

  runSwitchMapSource() {
    this.results = [];
    this.source$.pipe(
      switchMap(val => this.asyncTask(val))
    ).subscribe(val => this.results.push('switchMap: ' + val));
  }

  runConcatMapSource() {
    this.results = [];
    this.source$.pipe(
      concatMap(val => this.asyncTask(val))
    ).subscribe(val => this.results.push('concatMap: ' + val));
  }

  runExhaustMapSource() {
    this.results = [];
    this.source$.pipe(
      exhaustMap(val => this.asyncTask(val))
    ).subscribe(val => this.results.push('exhaustMap: ' + val));
  }

    // Observables with take(4) and take(3)
  observable1 = interval(1000).pipe(take(4));  // emits 0,1,2,3 then completes
  observable2 = interval(4000).pipe(take(6));  // emits 0,1,2 then completes

  runCombineLatestWithTake() {
    this.results = [];
    combineLatest([this.observable1, this.observable2]).subscribe(values => {
      const formatted = `[combineLatest] ${values.join(', ')}`;
      this.results.push(formatted);
      console.log(formatted);
    });
  }

  runForkJoinWithTake() {
    this.results = [];
    forkJoin([this.observable1, this.observable2]).subscribe(values => {
      const formatted = `[forkJoin] ${values.join(', ')}`;
      this.results.push(formatted);
      console.log(formatted);
    });
  }

  runZipWithTake() {
    this.results = [];
    zip(this.observable1, this.observable2).subscribe(values => {
      const formatted = `[zip] ${values.join(', ')}`;
      console.log(values)
      this.results.push(formatted);
      console.log(formatted);
    });
  }

      // 1)combineLatest([obs1, obs2])
      // Эмитит массив с последними значениями каждого входного Observable каждый раз, когда любой из них эмитит значение.

      // При этом combineLatest не эмитит ничего, пока все входные Observable не эмитят хотя бы один раз.

      // Пример:

      // obs1 эмитит: 1, 2, 3

      // obs2 эмитит: 'A', 'B'

      // combineLatest эмитит: [1, 'A'], [2, 'A'], [2, 'B'], [3, 'B']

    //  2. forkJoin([obs1, obs2])
    // Ждёт, пока все входные Observable завершатся (complete), и потом эмитит один раз массив с последними эмитированными значениями каждого Observable.

    // Используется, когда нужны финальные результаты нескольких асинхронных операций.

    // Пример:

    // obs1 эмитит: 1, 2, 3 и завершает

    // obs2 эмитит: 'A', 'B' и завершает

    // forkJoin эмитит разом: [3, 'B']

// 3)zip(obs1, obs2)
//   Эмитит массивы значений, которые собирает, беря по одному элементу из каждого входного Observable, то есть работает как «замыкание» (zip) списков.

//   Эмитит новое значение только тогда, когда все Observable эмитят новое значение (параллельно).

//   Пример:

//   obs1 эмитит: 1, 2, 3

//   obs2 эмитит: 'A', 'B'

//   zip эмитит: [1, 'A'], [2, 'B'] и дальше завершает, т.к. второй Observable больше не эмитит

// What is an Observable in RxJS and how does it differ from a Promise?

// What is the difference between cold and hot observables? -

// Explain what a Subject is and how it differs from an Observable.

// Operators
// What is a higher-order mapping operator in RxJS? Name four common ones.

// How does mergeMap differ from switchMap in terms of inner observable handling?

// When would you use concatMap instead of mergeMap?

// Explain the behavior of the exhaustMap operator and give a practical use case.

// What does the map operator do, and how is it different from the higher-order mapping operators?

// Combining Observables
// Compare combineLatest and forkJoin operators. How do their emission behaviors differ?

// What happens if one observable errors out when using forkJoin or combineLatest?

// Practical Usage
// How could you prevent multiple concurrent HTTP requests from firing when a user rapidly types in a search input field?

// How would you cancel a long-running request when a new one is initiated?

// Describe a scenario where using exhaustMap could prevent unintended side effects.

// Advanced
// How do the take and takeUntil operators control observable lifecycles?

// What is the role of unsubscribe in RxJS, and how can failing to unsubscribe affect your application?


// Subject - acts as both an Observable and an Observer. It emits values to all subscribers, but does not retain previous values:

  // No initial value or storage of emitted values.​

  // New subscribers only receive future emissions, not past ones.​

  // Useful for basic event streams and multicasting without needing value history.

  private subject: Subject<number> = new Subject<number>();

  constructor() {
    // First subscriber
    this.subject.subscribe((val: number) => console.log('Subscriber 1:', val));
  }

  emitValue(value: number) {
    this.subject.next(value);
  }

  addSecondSubscriber() {
    this.subject.subscribe((val: number) => console.log('Subscriber 2:', val));
  }
}
