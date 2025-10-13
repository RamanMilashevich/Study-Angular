import { Component, inject } from '@angular/core';
import { Child14 } from '../child14/child14';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  modalBus = inject(Child14);
  public onOpen(): void {
    this.modalBus.open()
  }
}
