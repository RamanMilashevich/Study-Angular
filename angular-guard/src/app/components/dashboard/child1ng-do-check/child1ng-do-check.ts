import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-child1ng-do-check',
  imports: [],
  standalone: true,
  templateUrl: './child1ng-do-check.html',
  styleUrl: './child1ng-do-check.css'
})
export class Child1ngDoCheck implements DoCheck {
  private lastLen = 0;
  @Input() items: string[] = []
  ngDoCheck(): void {
    if(this.items.length !== this.lastLen) {
        this.lastLen = this.items.length;
        console.log('Items length changed (custom check) with ngDoCheck: ', this.lastLen)
    }
  }

}
