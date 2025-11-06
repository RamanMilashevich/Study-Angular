import { Component, signal } from '@angular/core';
import { HeaderComponent
} from './components/header/header';
import { FooterComponent   } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { SelectHeaderDirective, SelectFooterDirective } from "./homework/directives/slots";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular-guard');
}
