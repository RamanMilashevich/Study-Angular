import { Component, effect, signal } from '@angular/core';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: `login.html`,
  styleUrls: ['./login.css'],
  imports: [JsonPipe]
})
export class LoginComponent {
  constructor(private router: Router) {}

  arr = signal<{ id: number; text: string }[]>([]);
  userName = 'Raman';

  // Effect runs whenever arr() changes
  private logRef = effect(() => {
    console.log('[arr changed]', this.arr());
  });

  add10() {
    this.arr.update(list => [...list, { id: 10, text: 'A' }]);
  }
  add11() {
    this.arr.update(list => [...list, { id: 11, text: 'B' }]);
  }

  add12() {
    this.arr.update(list => [...list, { id: 12, text: 'C' }])
  }

  remove12() {
    this.arr.update(list => list.filter(it => it.id !== 12 ))
  }

  trySetMethod() {
    this.arr.set([{ id: 15, text: 'Hello' }])
  }
  update10() {
    this.arr.update(list =>
      list.map(item => (item.id === 10 ? { ...item, text: 'AA' } : item))
    );
  }
  update12() {
    this.arr.update(list =>
      list.map(item => item.id === 12 ? {...item, text: 'CCC'} : item)
    );
  }
  remove10() {
    this.arr.update(list =>
      list.filter(item => item.id !== 10)
    )
  }

  remove11() {
    this.arr.update(list => list.filter(item => item.id !== 11));
  }

  remove15() {
    this.arr.update(obj => obj.filter(index => index.id !== 15))
  }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['dashboard', this.userName]);
  }

  ngOnDestroy() {
    this.logRef.destroy();
  }
}
