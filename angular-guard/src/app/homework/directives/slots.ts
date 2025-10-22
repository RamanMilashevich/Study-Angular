import { Directive, ElementRef, inject } from '@angular/core';

// @Directive({ selector: '[selectorHeader]', standalone: true, exportAs: 'selectorHeader' })
// export class SelectorHeaderDirective {
//   constructor(public el: ElementRef<HTMLElement>) {}
// }

@Directive({ selector: '[selectHeader]', standalone: true, exportAs: 'selectHeader'})
export class SelectHeaderDirective {
  el = inject(ElementRef<HTMLElement>)
}
@Directive({ selector: '[selectFooter]', standalone: true, exportAs: 'selectFooter'})
export class SelectFooterDirective {
  el = inject(ElementRef<HTMLElement>)
}
