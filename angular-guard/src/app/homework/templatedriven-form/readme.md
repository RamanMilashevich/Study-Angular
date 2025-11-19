<!-- In Angular template-driven forms, when you declare a template reference variable on an input with #varName="ngModel", this variable gives you access to the NgModel directive instance for that input. This instance has several important properties that reflect the current state of the input control related to user interaction and validation:

touched: A boolean that becomes true once the user has focused on the input and then blurred (moved focus away). This indicates the field has been "touched" by the user.

  untouched: The opposite of touched, true if the input has not yet been visited by the user.

  dirty: True if the user has changed the value in the input.

  pristine: The opposite of dirty, true if the input value is still the original untouched value.

  valid: True if the input passes all the assigned validators (e.g., required, minlength).

  invalid: The opposite of valid, true when there are validation errors.

  errors: An object containing specific validation errors present on the input, e.g. { required: true } or { minlength: { requiredLength: 3, actualLength: 1 } }. Null if no errors.

These properties are used in the template to display validation messages and control UI behavior conditionally. A common pattern is to show an error message only when the input has been touched and has validation errors:

xml
<input type="email" name="email" [(ngModel)]="user.email" required email #email="ngModel"/>
<div *ngIf="email.touched && email.invalid" style="color: red">
  <div *ngIf="email.errors?.required">Email is required</div>
  <div *ngIf="email.errors?.email">Invalid email format</div>
</div>
Here:

The message appears only after the user leaves the field (touched) and if the value is invalid (invalid).

Specific error messages are shown based on the errors object properties.

This approach improves user experience by avoiding premature error messages before the user interacts with the form, providing precise UI feedback on validation status.

Using a template variable with ngModel allows you to directly access the state and validation information of each form control inside the template, making Angular template-driven forms powerful and manageable for validation and UX purposes -->
