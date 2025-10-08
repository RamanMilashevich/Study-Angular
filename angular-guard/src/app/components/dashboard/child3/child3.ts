import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child3',
  standalone: true,
  imports: [],
  templateUrl: './child3.html',
  styleUrl: './child3.css'
})
export class Child3 {
  @Input() count: number = 0;
  @Output() change = new EventEmitter<number>();

  increment() {
    this.count += 1;
    this.change.emit(this.count)
    console.log('[Child3] increment result:', this.count)
  }

  decrement() {
    this.count -= 1;
    this.change.emit(this.count)
    console.log('[Child3] decrement result:', this.count)
  }
}
