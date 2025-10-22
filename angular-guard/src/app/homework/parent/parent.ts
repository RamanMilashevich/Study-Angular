import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';
import { Child } from '../child/child';
import { SelectHeaderDirective, SelectFooterDirective } from '../directives/slots';
import { ChildStringComponent } from "../child-string/child-string";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child, ChildStringComponent, SelectHeaderDirective, SelectFooterDirective],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent  {

}
