import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirstPipePipe } from '../../Pipes/first-pipe';
import { ShortenTextPipe } from '../../Pipes/shorten-text-pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FirstPipePipe, ShortenTextPipe],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  @Input() userName: string = 'Raman Milashevich';
  @Input() infoText: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas cum omnis hic officia debitis magnam voluptatibus nemo provident, iste, aperiam ratione assumenda perspiciatis voluptatem eos totam fuga sunt accusantium inventore fugiat voluptatum dicta? Iste reprehenderit error ducimus! Labore soluta incidunt, vel quisquam laborum ex alias beatae eligendi corrupti corporis similique consequatur rerum iusto! Porro, eum aliquam impedit eius voluptatum ullam quae iste, provident ea, consequuntur neque amet. Rerum in, tenetur, ullam quasi eius ea neque earum magnam aliquid pariatur iste est non quidem. Aperiam molestiae tempora quo nihil reiciendis aspernatur fugiat consequuntur dolores nobis possimus. Laborum, aperiam deleniti. Illum!';
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['login'])
  }
}
