import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child5',
  imports: [],
  templateUrl: './child5.html',
  styleUrl: './child5.css'
})
export class Child5 {
  @Input() name: string = '';
  @Output('nameChange') nameChanging = new EventEmitter<string>()

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(input);
    this.nameChanging.emit(input.value);
  }
}
