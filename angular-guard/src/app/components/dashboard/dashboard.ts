import { Component } from '@angular/core';
import { Child1 } from './child1/child1';
import { Child2 } from "./child2/child2";
import { Child3 } from "./child3/child3";
import { Child4 } from "./child4/child4";
import { Child5 } from "./child5/child5";
import { Child6 } from "./child6/child6";
import { Child7 } from "./child7/child7";
import { starRating } from "./child8/child8";
import { Child9 } from "./child9/child9";
import { Child10 } from './child10/child10';
import { Child11 } from "./child11/child11";
import { Child12 } from "./child12/child12";
import { Child13 } from "./child13/child13";
import { Child14 } from "./child14/child14";
import { Subject, Subscribable, Subscription, from, interval, multicast } from 'rxjs';
import { Header } from "./header/header";
import { Sidebar } from "./sidebar/sidebar";
import { Child1ngOnChange } from './child1ng-on-changes/child1ng-on-changes';
import { Child1ngDoCheck } from "./child1ng-do-check/child1ng-do-check";
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
