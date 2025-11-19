
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-templatedriven-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './templatedriven-form.html',
  styleUrl: './templatedriven-form.css'
})
export class TemplateDrivenForm {

  user = {
    name: '',
    surname: '',
    age: undefined,
    email: '',
    password: '',
    adress: '',
    code: ''
  }

  onSubmit(form: NgForm) {
    console.log('[Template Driven form]: ', form)
  }


}



// Angular CSS Classes for Forms

// ng-pristine: Initially applied before user changes input value. (Input untouched and unchanged)

// ng-dirty: Applied after the user's first change in the input value.

// Example: When you start typing in the Name input, it switches from ng-pristine to ng-dirty.

// ng-valid: Applied when the input value meets validation rules.

// Example: A correctly formatted and filled email input will have this class.

// ng-invalid: Applied when the input value fails any validation rule.

// Example: Leaving the required password input empty adds this class.

// ng-touched: Applied after the user focuses on and then leaves the control (blur event).

// Example: Clicking into an input and then clicking away triggers this.

// ng-untouched: Before any focus and blur interaction, this class remains on the input.





// 1. What directive is used to create a two-way data binding for form controls in template-driven forms?
// A) ngModel
// B) ngForm
// C) ngModelGroup
// D) ngBind

// 2. What is the purpose of the ngForm directive in Angular?
// A) To bind form controls to the component model directly
// B) To automatically create a form group in reactive forms
// C) To track the overall value and validity state of the form
// D) To declare a form control with validation

// 3. How do you access the form's value and validation state in your component?
// A) Using the NgForm object passed in the ngSubmit event
// B) Using the ngModel property on each input
// C) Binding directly to the form's DOM element
// D) Using the FormBuilder class

// 4. Which directive binds a form control’s data to a property in the component and enables two-way data binding?
// A) ngModel
// B) ngModelGroup
// C) ngForm
// D) ngBind

// 5. How does Angular track validation for each input inside a template-driven form?
// A) Through built-in directives like required, maxlength, etc. and CSS classes (ng-valid, ng-invalid)
// B) Only via explicit validation in the component class
// C) By manually checking each control’s state
// D) It does not track validation automatically

// 6. What is the role of ngModelGroup in template-driven forms?
// A) To create nested FormGroup objects explicitly in the component
// B) To group related inputs into nested objects in the form model
// C) To set validation rules for a control group
// D) To bind a control to a specific element only

// 7. What happens if you omit ngModel from an input element inside an ngModelGroup?
// A) The input will still be part of the form and tracked
// B) The input will not be registered as a form control and its value won’t be part of the form's value object
// C) The form will throw an error at runtime
// D) The input will automatically get a default ngModel

// 8. How do you disable the submit button based on form validity?
// A) <button [disabled]="myForm.invalid">
// B) <button [disabled]="!myForm.valid">
// C) <button [disabled]="myForm.dirty">
// D) <button [disabled]="myForm.touched">

// 9. When submitting a form, where do you typically access the form data in your component?
// A) From the NgForm object passed in ngSubmit
// B) From the component class property bound with ngModel
// C) From the DOM element directly
// D) From the FormBuilder instance

// 10. How can you initialize form controls with default values in a template-driven form?
// A) Set the property in the component before the form renders
// B) Use the value attribute in HTML
// C) Use [(ngModel)] binding to prepopulate values
// D) Both A and C





// a,c,a,a,a,b,b,a,a,d
