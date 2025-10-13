import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child1ng-on-changes',
  imports: [],
  templateUrl: './child1ng-on-changes.html',
  styleUrl: './child1ng-on-changes.css'
})
export class Child1ngOnChange implements OnChanges {
  @Input() count = 0;

  ngOnChanges(changes: SimpleChanges) {
    if(changes['count']) {
      const {previousValue, currentValue, firstChange} = changes['count'];
      console.log('ngOnChanges works after count @Input change: ', { previousValue, currentValue, firstChange})
    }
  }

}
