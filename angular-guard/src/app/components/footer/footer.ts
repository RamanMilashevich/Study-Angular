import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
  protected readonly author = 'Your Name';
  protected readonly company = 'Your Company';
}
