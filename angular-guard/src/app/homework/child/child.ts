import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { SelectFooterDirective, SelectHeaderDirective } from '../directives/slots';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrls: ['./child.css']
})
export class Child implements AfterContentInit {
  @ContentChild(SelectHeaderDirective) header!: SelectHeaderDirective;
  @ContentChild(SelectFooterDirective, {read: ElementRef}) footer!: SelectFooterDirective
  // @ContentChild(SelectorFooterDirective) footer!: SelectorFooterDirective;

  // bonus: multiple projected actions
  // @ContentChildren(SelectorActionDirective) actions!: QueryList<SelectorActionDirective>;

  ngAfterContentInit(): void {
    console.log('HERE IS HOMEWORK HEADER: ', this.header)
    console.log('[NG-content FOOTER] IS MY HOMEWORK: ', this.footer)
  }

  // used by tests (task 3)
  // disableAllActions() {
  //   this.actions.forEach(a => a.el.nativeElement.setAttribute('disabled', ''));
  // }
}
