import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-forms-reactive-demo',
	standalone: true,
	imports: [ReactiveFormsModule, JsonPipe, CommonModule],
	template: `
		<h2>Reactive form demo</h2>
		<form [formGroup]="form" (ngSubmit)="onSubmit()">
			<label>
				Name
				<input formControlName="name" />
			</label>
			<div *ngIf="submitted && form.controls['name'].invalid">
				Name is required (min 2 chars)
			</div>

			<label>
				Email
				<input formControlName="email" />
			</label>
			<div *ngIf="submitted && form.controls['email'].invalid">
				Invalid email
			</div>

			<button type="submit" [disabled]="form.invalid">Submit</button>
		</form>

		<pre>{{ form.value | json }}</pre>
	`,
})
export class FormsReactiveDemoComponent {
	submitted = false;

  fb = inject(FormBuilder);

	form = this.fb.group({
		name: ['', [Validators.required, Validators.minLength(2)]],
		email: ['', [Validators.email]],
	});



	onSubmit() {
		this.submitted = true;
		if (this.form.valid) {
			console.log('Reactive submit', this.form.value);
		}
	}
}


