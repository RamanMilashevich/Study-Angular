import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
constructor(private router: Router) {}

userName: string = 'Raman';
  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['dashboard', this.userName]);
  }
}
