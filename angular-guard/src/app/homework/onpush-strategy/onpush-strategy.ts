import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './onpush-strategy.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() childData!: { name: string };
  @Output() dataChanged = new EventEmitter<{ name: string }>();

  mutateProperty() {
    this.childData.name = 'child_mutated';
  }

  emitChange() {
    this.dataChanged.emit({ name: 'emitted_from_child' });
  }
}
