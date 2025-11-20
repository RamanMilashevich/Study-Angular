import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-methods',
  imports: [],
  templateUrl: './signals-methods.html',
  styleUrl: './signals-methods.css'
})
export class SignalsMethods {
  // Create a signal with initial value 0
  counter = signal(0);

  // Signal with object value
  user = signal({ name: 'Alice', age: 25 });

  // Computed signal depending on user.name
  greeting = computed(() => `Hello, ${this.user().name}!`);

  // Effect runs whenever counter changes
  counterEffect = effect(() => {
    console.log('Counter changed to:', this.counter());
  });

  // Set method: directly sets new value
  setCounter(value: number) {
    this.counter.set(value);
  }

  // Update method: update based on current value
  incrementCounter() {
    this.counter.update(current => current + 1);
  }

  // Mutate method: mutate object properties directly
  mutateUser() {
    this.user.update(user => ({ ...user, name: user.name === 'Alice' ? 'Bob' : 'Alice' }));
  }

  // Destroy method: cleans resources related to the signal (rarely used in most apps)
  destroyCounter() {
    // WritableSignal doesn't provide a destroy() method.
    // If you need cleanup for effects, keep a reference to the effect's cleanup function and call it here.
    // As a safe alternative, reset the counter value.
    this.counter.set(0);
    console.log('Counter signal reset to 0');
  }
}


// Types of Signals
// Signal<T>

// A readonly signal that holds a value of type T and can be read reactively.

// Example: const count: Signal<number>;

// WritableSignal<T>

// A signal you can both read and update (write).

// Example: const count: WritableSignal<number> = signal(0);

// You can call .set(), .update() on it.

// Computed<T>

// A derived signal whose value is computed reactively from other signals.

// Example:

// typescript
// const sum: Computed<number> = computed(() => count1() + count2());
// You can only read it via sum(), not write.

// Examples
// typescript
// import { signal, Signal, WritableSignal, computed, Computed } from '@angular/core';

// // Readonly signal (usually used internally)
// let readonlySignal: Signal<number>;

// // Writable signal you create to hold mutable state
// const writableSignal: WritableSignal<string> = signal('hello');

// // Computed signal deriving new value reactively
// const computedSignal: Computed<string> = computed(() => writableSignal().toUpperCase());

// Summary
// Signal Type	      Can Read	      Can Write	    Purpose
// Signal<T>	        Yes	            No	          Readonly reactive value
// WritableSignal<T>	Yes	            Yes         	Mutable reactive value
// Computed<T>	      Yes	            No	          Reactive derived/computed value
