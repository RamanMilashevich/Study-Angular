import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay, switchMap, concatMap, mergeMap, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-rx-js-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rx-js-example.html',
  styleUrls: ['./rx-js-example.css']
})
export class RxJsExample {
  results: string[] = [];

  fakeRequest(value: number) {
    return of(`Response for ${value}`).pipe(delay(1000));
  }

  onSwitchMapClick() {
    this.results = [];
    of(1, 2, 3).pipe(
      switchMap(value => this.fakeRequest(value))
    ).subscribe(response => this.results.push(response));
  }

  onConcatMapClick() {
    this.results = [];
    of(1, 2, 3).pipe(
      concatMap(value => this.fakeRequest(value))
    ).subscribe(response => this.results.push(response));
  }

  onMergeMapClick() {
    this.results = [];
    of(1, 2, 3).pipe(
      mergeMap(value => this.fakeRequest(value))
    ).subscribe(response => this.results.push(response));
  }

  onExhaustMapClick() {
    this.results = [];
    of(1, 2, 3).pipe(
      exhaustMap(value => this.fakeRequest(value))
    ).subscribe(response => this.results.push(response));
  }
}
