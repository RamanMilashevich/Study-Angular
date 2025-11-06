import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';

@Component({
  selector: 'app-signals-child1',
  imports: [],
  templateUrl: './signals-child1.html',
  styleUrl: './signals-child1.css'
})
export class SignalsChild1 {
  @Input() counterChild1!: Signal<number>
  @Output() increment = new EventEmitter<void>()
  @Output() decreement = new EventEmitter<void>()
}
