import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';

@Component({
  selector: 'app-signals-child2',
  imports: [],
  templateUrl: './signals-child2.html',
  styleUrl: './signals-child2.css'
})
export class SignalsChild2 {
    @Input() counterChild2!: Signal<number>;
    @Output() reset = new EventEmitter<void>();
    
 }
