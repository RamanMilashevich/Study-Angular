import { Component } from '@angular/core';

import { UseApiDemo } from '../use-api-demo/use-api-demo';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UseApiDemo],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent   {

}
