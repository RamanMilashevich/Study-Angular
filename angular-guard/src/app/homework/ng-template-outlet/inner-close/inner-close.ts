import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BOX_REF } from '../box-ref';

@Component({
  selector: 'app-inner-close',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="onClose()" [disabled]="!boxRef">
      Close (inject BOX_REF)
    </button>

    <span *ngIf="boxRef"> id: {{ boxRef.id }}</span>
    <span *ngIf="!boxRef" style="opacity:.7"> (BOX_REF not found)</span>
  `,
})
export class InnerCloseComponent {
  // optional:true чтобы пример не падал, если injector не передали
  readonly boxRef = inject(BOX_REF, { optional: true });

  onClose(): void {
    if (this.boxRef) this.boxRef.close();
  }
}
