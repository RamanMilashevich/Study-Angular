import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class MainComponent {
  // Main component logic can be added here
  protected readonly content = 'Welcome to the main section of the app!';

}
