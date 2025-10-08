import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'child7',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child7.html',
  styleUrl: './child7.css'
})
export class Child7 {
  @Input() age: number = 0;
  @Output() ageChange = new EventEmitter();

  message: string = '';

  checkAge(newValue: number) {
    this.age = newValue
    if(this.age < 18) {
      this.message = 'You are not a  adult';
    } else {
      this.message = 'You are an adult';
    }
  }
}
