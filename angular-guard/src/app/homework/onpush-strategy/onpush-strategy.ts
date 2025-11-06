import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-onpush-strategy',
  imports: [],
  templateUrl: './onpush-strategy.html',
  styleUrl: './onpush-strategy.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushStrategy implements OnChanges {

  @Input() data!: { name: string }

  cd = inject(ChangeDetectorRef);
  ngOnChanges() {
    this.cd.detectChanges()
  }
}
