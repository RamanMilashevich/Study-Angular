import { Component } from '@angular/core';
import { DelayRenderingDerective } from "../directive/directive";
import { TemplatedrivenForm } from '../templatedriven-form/templatedriven-form';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-component',
  imports: [DelayRenderingDerective, TemplatedrivenForm, FormsModule],
  templateUrl: './directive-component.html',
  styleUrl: './directive-component.css'
})
export class DirectiveComponent {

}
