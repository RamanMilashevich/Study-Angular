import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Child } from '../child/child';
import { ChildComponent } from '../onpush-strategy/onpush-strategy';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './onpush-strategy-parent.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  data = { name: 'initial' };

  constructor(private cdRef: ChangeDetectorRef) {}

  onDataChanged(newData: { name: string }) {
    this.data = newData;
  }

  changeProperty() {
    this.data.name = 'mutated';
  }

  changeReference() {
    this.data = { ...this.data, name: 'copy' };
  }

  triggerManualChangeDetection() {
    this.cdRef.detectChanges();
  }
}
