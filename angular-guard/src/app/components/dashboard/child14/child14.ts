import { Component, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-child14',
  standalone: true,
  imports: [],
  templateUrl: './child14.html',
  styleUrl: './child14.css'
})
@Injectable({ providedIn: 'root' })
export class Child14 {
  private readonly _toggle$ = new Subject<'open' | 'close'>();
  public get toggles$(): Observable<'open' | 'close'> { return this._toggle$.asObservable() }

  ngOnInit() {
    console.log(this._toggle$)
    console.log(this.toggles$)
  }

  public open(): void {
    this._toggle$.next('open');
  }
  public close(): void {
    this._toggle$.next('close')
  }
}
