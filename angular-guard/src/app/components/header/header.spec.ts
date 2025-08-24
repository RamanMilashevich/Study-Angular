import { TestScheduler } from 'rxjs/testing';
import { map, switchMap } from 'rxjs/operators';

const withMarbles = (fn: (h: any) => void) =>
  new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  }).run(fn);

it('switchMap cancels previous', () =>
  withMarbles(({ hot, cold, expectObservable }) => {
    // Three "clicks": at 0ms (a), 10ms (b), 20ms (c)
    const clicks = hot('a 9ms b 9ms c|', { a: 1, b: 1, c: 1 });

    const result$ = clicks.pipe(
      // label and duration per click
      map((_, i) => ({ label: `req#${i + 1}`, ms: [30, 20, 10][i] })),
      // switch to an inner "request" that completes after ms
      switchMap(({ label, ms }) =>
        // cold observable that waits `ms` frames (1 frame = 1ms here) then emits
        cold(`${'-'.repeat(ms)}(x|)`, { x: `DONE ${label}` })
      )
    );

    // Last click happens at 20ms; its inner takes 10ms → emit at 30ms
    expectObservable(result$).toBe('------------------------------(x|)', {
      x: 'DONE req#3',
    });
  }));
