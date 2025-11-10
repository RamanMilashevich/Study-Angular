import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-templatedriven-form',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
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

  myReactiveForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userSurname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  doSomething(form: FormGroup) {
    console.log(form)
  }
}
