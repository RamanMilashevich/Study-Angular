import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child4',
  standalone: true,
  imports: [],
  templateUrl: './child4.html',
  styleUrl: './child4.css'
})
export class Child4 {
  @Output() selected = new EventEmitter<string>();

  selectValue() {
    this.selected.emit('Angular Rocks!')
  }

  @Input() label: string = 'New label'

  @Output() clicked = new EventEmitter<boolean>();

  checkClick = false

  emitClick() {
    this.checkClick = !this.checkClick
    this.clicked.emit(this.checkClick)
  }
}
