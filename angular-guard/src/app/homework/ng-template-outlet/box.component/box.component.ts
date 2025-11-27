import { Component, ContentChild, Injector, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BOX_REF, BoxRef } from '../box-ref';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="border:1px solid #ccc; padding:12px; border-radius:10px;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <b>Box id: {{ id }}</b>
        <button (click)="open = !open">{{ open ? 'Hide' : 'Show' }}</button>
      </div>

      <div *ngIf="open" style="margin-top:10px;">
        <ng-container
          [ngTemplateOutlet]="tpl"
          [ngTemplateOutletInjector]="boxInjector"> <!-- если не добавим инджект тут кнопка будет заблокирована -->
        </ng-container>
      </div>
    </div>
  `,
})
export class BoxComponent {
  @ContentChild(TemplateRef) tpl!: TemplateRef<unknown>;

  open = true;
  id = Math.random().toString(16).slice(2);

  close(): void {
    this.open = false;
  }

  private parentInjector = inject(Injector);
  private boxRef = new BoxRef(this);

  // Вот “магия”: создаём injector, который даёт BOX_REF
  boxInjector = Injector.create({
    parent: this.parentInjector,
    providers: [{ provide: BOX_REF, useValue: this.boxRef }],
  });
}
