import { Component, signal } from '@angular/core';
import { HeaderComponent
} from './components/header/header';
import { FooterComponent   } from './components/footer/footer';
import { MainComponent } from './components/main/main';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular-guard');
}
