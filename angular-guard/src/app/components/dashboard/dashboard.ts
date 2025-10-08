import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Child10, Child11],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent  {
  // @ViewChild(Child9) child!: Child9;

  // resetChildStatus() {
  //   this.child.reset()
  // }


  // newColor: string = 'Blue';
  // count: number = 0;

  // increaseCount() {
  //   this.count += 1;
  // }

  // decreaseCount() {
  //   this.count -= 1;
  // }





    // userRating: number = 0;

    // increaseStar() {
    //   this.userRating += 1;
    // }



//  parentName: string = 'Writte your name in this input'






//   @Input() counter: number = 0

//   increase() {
//     this.counter += 1;
//   }

//   onChangeName(name: string) {
//     console.log('Output works', name)
//     name = 'Igor'
//   }






//   myCount: number = 0;
//   counterChange(event: number) {
//     this.myCount = event
//     console.log(this.myCount)
//   }

//   dataFromChild: string = ''

//   doSomething(event: string) {
//     this.dataFromChild = event;
//     console.log(event)
//   }

//   checkIfClick(val: boolean)
//  {
//   console.log(val)
//  }
}
