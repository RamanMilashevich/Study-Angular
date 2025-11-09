import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-templatedriven-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './templatedriven-form.html',
  styleUrl: './templatedriven-form.css'
})
export class TemplatedrivenForm {

  user = {
    name: '',
    surname: '',
    age: undefined,
    email: '',
    password: ''
  }

  onSubmit(form: NgForm) {
    console.log('[Template Driven form]: ', form.value)
  }
}
