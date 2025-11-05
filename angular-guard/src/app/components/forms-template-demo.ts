// app.component.ts
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, delay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Live Search with switchMap</h2>
    <input type="text" [formControl]="searchControl" placeholder="Search...">
    <ul>
      <li *ngFor="let item of results">{{ item }}</li>
    </ul>
  `
})
export class AppComponent {
  searchControl = new FormControl('');
  items = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Kiwi'];
  results: string[] = [];

  constructor() {
    this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(searchTerm => this.fakeApi(searchTerm))
    ).subscribe(data => this.results = data);
  }

  fakeApi(term: string | null) {
    const filtered = this.items.filter(item =>
      item.toLowerCase().includes(term!.toLowerCase())
    );
    return of(filtered).pipe(delay(500));
  }
}
