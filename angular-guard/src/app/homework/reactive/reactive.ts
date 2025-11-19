import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive.html',
  styleUrl: './reactive.css'
})
export class Reactive {

  myReactiveForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userSurname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    adress: new FormGroup({
      city: new FormControl('', Validators.required),
      code: new FormControl('', Validators.maxLength(5))
    })
  })

  getInput() {
    console.log(this.myReactiveForm.get('adress.city'))
  }

  doSomething(form: FormGroup) {
    console.log(form.value)
  }

  setValueToReactiveForm() {
    this.myReactiveForm.setValue({
      userName: 'Raman',
      userSurname: 'Milashevich',
      password: 'hello123',
      adress: {
        city: 'Warsaw',
        code: "241-380"
      }
    })

    this.myReactiveForm.patchValue({
      userName: 'Daria'
    })
  }

  // pathValue change only part of forGroup like only name and surname and another controls are empty

}



// form.valueChanges - we get an Onservable and we can subscribe the changes

//  Reactive forms are model-driven forms where the form model is explicitly created and managed in the component class using FormGroup and FormControl objects. This contrasts with template-driven forms where the form is defined mainly in the template.

// Validation: are attached directly in the component using Angular’s built-in Validators like required, minLength. This allows fine-grained control over validation logic.


// Template Binding:
// The template uses [formGroup]="myReactiveForm" and each input binds via formControlName. Validation errors and control state (invalid, touched) are checked via myReactiveForm.get('controlName').


// Event Handling:
// Form submission is handled via Angular’s (ngSubmit) event (note: your example uses (onSubmit) which should be (ngSubmit) for correct behavior). The handler receives the whole form group for processing.

//  Advantages:

// More explicit and testable form model in code.

// Easier to dynamically add/remove controls and validators.

// Precise validation state and errors access.

// Common Patterns:
// Showing validation messages only when controls are touched and invalid, disabling submit buttons when the form is invalid.

// Imports:
// Reactive forms require importing ReactiveFormsModule.



// 1. How do you create a form group in Angular reactive forms?
// A) Using <form [formGroup]> in the template only
// B) Using new FormGroup() or FormBuilder.group() in the component
// C) Using ngModel directive
// D) Using HTML form element

// 2. Which Angular module do you need to import to use reactive forms?
// A) FormsModule
// B) ReactiveFormsModule
// C) HttpClientModule
// D) CommonModule

// 3. How do you bind a form control defined in code to an input in the template?
// A) With formControlName="controlName" inside a [formGroup] form
// B) With ngModel="controlName"
// C) Using formGroupName="controlName"
// D) Using [formControl]="" only

// 4. What are validators in reactive forms?
// A) Functions that check the value of a control and return errors if invalid
// B) CSS classes applied to invalid controls
// C) HTML attributes like required
// D) Angular modules

// 5. How can you validate a form control to be required and have a minimum length of 5?
// A) Validators.required and Validators.minLength(5) together
// B) Using required and minlength="5" in template only
// C) Validators are not used in reactive forms
// D) Using Validators.maxLength(5)

// 6. What method can you call to listen to changes in the value of a form control?
// A) .subscribe() on the form control’s valueChanges observable
// B) Using ngModelChange
// C) Using setValue() only
// D) Using onChange() directive

// 7. How do you define nested form groups in reactive forms?
// A) Using FormGroup inside another FormGroup in the constructor
// B) Using ngModelGroup="name" in template
// C) Using FormArray only
// D) Using multiple formControlName elements

// 8. What does the valid property on a FormControl indicate?
// A) The control has a truthy value
// B) The control passes all validation rules
// C) The control is empty
// D) The control was touched

// 9. How do you programmatically set a value for a FormControl?
// A) Using setValue() or patchValue() methods on the control
// B) Binding to [value] attribute
// C) Using [(ngModel)] directive
// D) You cannot set a value programmatically

// 10. Which event captures form submission in reactive forms?
// A) (ngSubmit) on the form element
// B) (onSubmit) on the form element
// C) (submitForm) directive
// D) None of the above





// b,b,a,a,a,a,a,b,a,a
