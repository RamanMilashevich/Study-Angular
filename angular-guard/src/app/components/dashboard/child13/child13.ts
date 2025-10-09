import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-child13',
  imports: [],
  templateUrl: './child13.html',
  styleUrl: './child13.css'
})
export class Child13 {
  lastOnly = new AsyncSubject<number>();
  ngOnInit() {
    console.log(this.lastOnly)
    this.lastOnly.subscribe({next: this.onNext, complete: this.onComplete})
    this.lastOnly.next(1)

  }

  onNext(value: number): void {
    console.log('got:', value);

 }


 onComplete(): void { console.log('done'); }
}
