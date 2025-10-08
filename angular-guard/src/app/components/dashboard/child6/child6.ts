import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'child6',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child6.html',
  styleUrl: './child6.css'
})
export class Child6 {
  @Input() amount: number = 0;
  @Output() amountChange = new EventEmitter<number>()

  amountCheckChange(value: number) {
    console.log(value)
    this.amountChange.emit(value)
  }
}
