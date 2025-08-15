import { Component, computed, effect, signal, untracked, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

type CartItem = { id: string; name: string; price: number; qty: number };

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnDestroy {
  constructor(private router: Router) {
    // set up the logging effect INSIDE the component
    this.logEffectRef = effect(() => {
      // Track subtotal (and thus items); read discount untracked so it doesn't retrigger
      const subtotalNow = this.subtotal();
      const discountNow = untracked(() => this.discount());
      // eslint-disable-next-line no-console
      console.log(`Subtotal: ${subtotalNow} | Discount(now): ${discountNow}`);
    });
  }

  // --- auth demo ---
  userName: string = 'Raman';
  login(): void {
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['dashboard', this.userName]);
  }

  // --- signals (private writable) ---
  private _items = signal<CartItem[]>([]);
  private _discount = signal(0);            // percentage 0..100
  private _includeDiscount = signal(true);

  // --- read-only views (public) ---
  readonly items = this._items.asReadonly();
  readonly discount = this._discount.asReadonly();
  readonly includeDiscount = this._includeDiscount.asReadonly();

  // --- derived signals ---
  readonly subtotal = computed(() => {
    // named reducer to match your preference (no anonymous funcs)
    function sumFn(sum: number, it: CartItem): number {
      return sum + it.price * it.qty;
    }
    return this._items().reduce(sumFn, 0);
  });

  readonly total = computed(() => {
    const base = this.subtotal(); // tracked
    if (this._includeDiscount()) {
      const d = untracked(() => this._discount());
      return +(base * (1 - d / 100)).toFixed(2);
    }
    return base;
  });

  // --- mutations (immutable updates) ---
  addItem(item: { id: string; name: string; price: number; qty?: number }): void {
    const updater = (arr: CartItem[]): CartItem[] => {
      const idx = arr.findIndex(x => x.id === item.id);
      if (idx >= 0) {
        const updated = [...arr];
        const cur = updated[idx];
        updated[idx] = { ...cur, qty: cur.qty + (item.qty ?? 1) };
        return updated;
      }
      return [...arr, { ...item, qty: item.qty ?? 1 }];
    };
    this._items.update(updater);
  }

  setQty(id: string, qty: number): void {
    const updater = (arr: CartItem[]): CartItem[] => {
      const idx = arr.findIndex(x => x.id === id);
      if (idx < 0) return arr;
      const updated = [...arr];
      updated[idx] = { ...updated[idx], qty };
      return updated;
    };
    this._items.update(updater);
  }

  remove(id: string): void {
    const updater = (arr: CartItem[]): CartItem[] => arr.filter(x => x.id !== id);
    this._items.update(updater);
  }

  setDiscount(pct: number): void {
    const clamped = Math.max(0, Math.min(100, pct));
    this._discount.set(clamped);
  }

  toggleDiscount(include: boolean): void {
    this._includeDiscount.set(include);
  }

  // --- demo/test runner you can call from template or console ---
  runDemo(): void {
    // eslint-disable-next-line no-console
    console.log('--- DEMO START ---');
    this.addItem({ id: 'A', name: 'Book', price: 70 });
    this.addItem({ id: 'B', name: 'Pen', price: 10, qty: 2 });

    // eslint-disable-next-line no-console
    console.log('subtotal', this.subtotal()); // 70
    // eslint-disable-next-line no-console
    console.log('total   ', this.total());    // 70 (discount=0, include=true)

    this.setDiscount(20);
    // eslint-disable-next-line no-console
    console.log('total after setDiscount(20)', this.total()); // 56

    this.toggleDiscount(false);
    // eslint-disable-next-line no-console
    console.log('total (no discount)', this.total()); // 70

    this.setDiscount(50);
    // eslint-disable-next-line no-console
    console.log('total after setDiscount(50) still off', this.total()); // 70

    this.toggleDiscount(true);
    // eslint-disable-next-line no-console
    console.log('total after re-enable discount', this.total()); // 35

    this.setQty('A', 3);
    // eslint-disable-next-line no-console
    console.log('subtotal after qty', this.subtotal()); // 170
    // eslint-disable-next-line no-console
    console.log('total after qty', this.total());       // 85

    this.remove('B');
    // eslint-disable-next-line no-console
    console.log('subtotal after remove', this.subtotal()); // 150
    // eslint-disable-next-line no-console
    console.log('total after remove', this.total());       // 75
    // eslint-disable-next-line no-console
    console.log('--- DEMO END ---');
  }

  // --- effect cleanup ---
  private logEffectRef: { destroy: () => void } | null = null;

  ngOnDestroy(): void {
    if (this.logEffectRef) {
      this.logEffectRef.destroy();
      this.logEffectRef = null;
    }
  }
}
