import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';
import { Child } from '../child/child';
import { SelectHeaderDirective, SelectFooterDirective } from '../directives/slots';
import { ChildStringComponent } from "../child-string/child-string";
import { HeaderComponent } from "../../components/header/header";
import { FooterComponent } from "../../components/footer/footer";
import { RouterOutlet } from "@angular/router";
import {loadAbout} from "../../app.routes"

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child, SelectHeaderDirective, SelectFooterDirective, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent  {
  constructor() {
    console.log(loadAbout())
  }
}
