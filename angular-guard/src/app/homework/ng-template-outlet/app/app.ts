import { Component } from '@angular/core';
import { BoxComponent } from '../box.component/box.component';
import { InnerCloseComponent } from '../inner-close/inner-close';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BoxComponent, InnerCloseComponent],
  template: `
    <app-box>
      <ng-template>
        <p>Этот шаблон объявлен в Parent, но отрисован внутри Child.</p>
        <app-inner-close></app-inner-close>
      </ng-template>
    </app-box>
  `,
})
export class AppComponentTemplate {}

