import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child-string',
  standalone: true,
  template: `
    <div class="card-container">
      <header><ng-content select="[selectorHeader]"></ng-content></header>
      <ng-content></ng-content>
      <footer><ng-content select="[selectorFooter]"></ng-content></footer>
    </div>
  `,
  styleUrls: ['./child-string.css']
})
export class ChildStringComponent implements AfterContentInit {
  // expects the parent to declare #headerVar and #footerVar
  @ContentChild('headerVar', { read: ElementRef }) headerEl!: ElementRef<HTMLElement>;
  @ContentChild('footerVar', { read: ElementRef }) footerEl!: ElementRef<HTMLElement>;

  ngAfterContentInit(): void {
    console.log(this.headerEl)
    console.log(this.footerEl)
  }
}
