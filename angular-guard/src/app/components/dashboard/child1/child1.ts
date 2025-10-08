import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child1',
  imports: [],
  templateUrl: './child1.html',
  styleUrl: './child1.css'
})
export class Child1 {
  @Input() counter: number = 0;
  @Output() changeName = new EventEmitter<string>();

  onChangeName() {
    this.changeName.emit('Raman')
  }
}
