import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals-example',
  imports: [],
  templateUrl: './signals-example.html',
  styleUrl: './signals-example.css'
})
export class SignalsExample {
  firstName = signal('John');
  secondName = signal('Milashevich')

  fullName = computed(() => `[Computed] ${this.firstName()} ${this.secondName()}`)

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.firstName.set(value)
  }

  onInput2(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.secondName.set(value)
  }
}
