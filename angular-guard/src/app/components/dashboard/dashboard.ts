import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Input() userName: string = '';
  @Input() infoText: string = 'Default text here...';

  showMore: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const name = params.get('userName');
      if (name) {
        this.userName = name;
      }
    })
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['login'])
  }

  get displayedText() {
    console.log(this.showMore)
    return this.showMore ? this.infoText : this.infoText.slice(0, 100) + '...';

  }
}
