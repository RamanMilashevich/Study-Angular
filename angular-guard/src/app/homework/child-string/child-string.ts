import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';
import { Child } from "../child/child";

@Component({
  selector: 'app-child-string',
  standalone: true,
  templateUrl: './child-string.html',
  styleUrls: ['./child-string.css'],
  imports: [Child]
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
