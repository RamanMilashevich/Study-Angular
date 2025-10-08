import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-child11',
  imports: [],
  templateUrl: './child11.html',
  styleUrl: './child11.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child11 {
  private readonly _count$ = new BehaviorSubject<number>(0);
  public readonly count$: Observable<number> = this._count$.asObservable()
  constructor() {
    // console.log('this is BehaviourSubject: ', this._count$)
    // console.log(this.count$)
    // this.count$.subscribe((value) => console.log(value, this._count$))
  }

  increment(): void {
    this._count$.next(this._count$.value + 1);
    // console.log('[Count]', this._count$)
  }

  onCount(value: number): void { console.log('count =', value); }

  ngOnInit(): void {
    // this.increment();
    // this.increment()
  }



}




