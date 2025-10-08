import { Component, EventEmitter, Input, Output, OnInit, OnDestroy, OnChanges, SimpleChanges, ViewChild, AfterViewInit, ElementRef, signal, WritableSignal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-child9',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child9.html',
  styleUrl: './child9.css'
})
export class Child9 {
  
  // first example with signa;
  count: WritableSignal<number> = signal(0);
  increment() {
    this.count.set(this.count() + 1)
  }
  decrement() {
    this.count.set(this.count() - 1)
  }

  // second example with signal
  private isOnline = signal(false);

  status = computed(() => this.isOnline() ? 'Online' : 'Offline');

  toggleStatus() {
    this.isOnline.set(!this.isOnline())
  }

  //third example with signal
  user = signal<User>({name: 'Alice', age: 30})

  haveBirthday() {
    this.user.set({ ...this.user(), age: this.user().age + 1})
  }

  //fourth example with sygnal

  seconds = signal(0);

  constructor() {
    effect(() => {
      const interval = setInterval(() => {
        this.seconds.set(this.seconds() + 1);
      }, 1000)
      return () => clearInterval(interval)
    })
  }
  // status: string = 'Initial value';

  // reset() {
  //   this.status = 'Reset!';
  // messages: string[] = ['Hello!', 'How are you?', 'Good morning!'];

  // @ViewChild('messageContainer') messageContainer!: ElementRef<HTMLDivElement>;

  // ngAfterViewInit(): void {
  //   console.log('Messages is:', this.messages)
  // }
  // addMessage() {
  //   this.messages.push('Hello world');
  // // Wait for Angular to render the new message, then scroll
  // setTimeout(() => {
  //   this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
  // });
  // }

  // @Input() color: string = 'Red'

  // ngOnChanges(changes: SimpleChanges): void {
  //   const state = changes['color'].isFirstChange
  //   if(state) {
  //     console.log('Initial color set to RED')
  //   }
  //   console.log('Color change from: ',changes['color'].previousValue,'to: ', changes['color'].currentValue)
  // }

  // @Input() quantity: number = 0;
  // @Output() quantityChange = new EventEmitter<number>()

  // greeting: string = 'Welcome'

  // emitValue(val: number) {
  //   this.quantityChange.emit(val)
  // }

  // ngOnInit(): void {
  //   this.greeting = 'Welcome, Raman'
  // }
  // counter = 0;
  // private intervalId: any


  // ngOnInit(): void {
  //   this.intervalId = setInterval(() => {
  //     this.counter++;
  //   }, 1000)
  // }


  // ngOnDestroy() {
  //   clearInterval(this.intervalId)
  // }



}
