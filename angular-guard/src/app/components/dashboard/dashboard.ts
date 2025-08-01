import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirstPipePipe } from '../../Pipes/first-pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FirstPipePipe],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  @Input() userName: string = 'Raman Milashevich';
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['login'])
  }
}
