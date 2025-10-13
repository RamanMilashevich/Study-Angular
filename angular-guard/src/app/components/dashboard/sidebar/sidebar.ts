import { Component, inject } from '@angular/core';
import { Child14 } from '../child14/child14';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  public isOpen = false;
  private sub = new Subscription();
  bus = inject(Child14)

  constructor() {
    const onToggle = (state:'open' | 'close'): void => {
      this.isOpen = state === 'open'
    }
    this.sub = this.bus.toggles$.subscribe( {next: onToggle})
  }

  onClose() {
    this.bus.close();
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
