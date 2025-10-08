import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css'
})
export class Child2 {
  @Input() counter: number = 0
}
