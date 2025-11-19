// replay-demo.component.ts
import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-demo',
  template: `
    <div class="p-4">
      <button (click)="runKeepScenario()" class="btn">windowTime = 2000ms (B получит 1,2,3)</button>
      <button (click)="runDropScenario()" class="btn">windowTime = 1000ms (B получит только 3)</button>
      <p>Откройте консоль, чтобы увидеть логи. Для сброса просто перезагрузите страницу.</p>
    </div>
  `,
  styles: [`.btn { margin-right: 12px; }`]
})
export class ReplayDemoComponent {

  public runKeepScenario(): void {
    const subject = new ReplaySubject<number>(100, 2000);

    function onValueA(value: number): void {
      // tslint:disable-next-line:no-console
      console.log('A received:', value);
    }
    function onValueB(value: number): void {
      // tslint:disable-next-line:no-console
      console.log('B received:', value);
    }
    function emit(val: number): void {
      subject.next(val);
    }
    function addSubA(): void {
      subject.subscribe(onValueA);
    }
    function addSubB(): void {
      subject.subscribe(onValueB);
    }

    // t=0: подписка A и первое значение
    addSubA();
    emit(1);

    // t=500: 2
    window.setTimeout(emit.bind(null, 2), 500);

    // t=1500: 3
    window.setTimeout(emit.bind(null, 3), 1500);

    // t=1600: поздний подписчик B — все значения ещё моложе 2000ms
    window.setTimeout(addSubB, 1600);
  }

  public runDropScenario(): void {
    const subject = new ReplaySubject<number>(100, 1000);

    function onValueA(value: number): void {
      // tslint:disable-next-line:no-console
      console.log('A received:', value);
    }
    function onValueB(value: number): void {
      // tslint:disable-next-line:no-console
      console.log('B received:', value);
    }
    function emit(val: number): void {
      subject.next(val);
    }
    function addSubA(): void {
      subject.subscribe(onValueA);
    }
    function addSubB(): void {
      subject.subscribe(onValueB);
    }


    addSubA();
    emit(1);


    window.setTimeout(emit.bind(null, 2), 500);
    window.setTimeout(emit.bind(null, 3), 1500);

    window.setTimeout(addSubB, 2000);
  }
}
