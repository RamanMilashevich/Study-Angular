import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-load-reports-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './load-reports-details.html',
  styleUrl: './load-reports-details.css'
})
export class LoadReportsDetails {
  route = inject(ActivatedRoute);
  router = inject(Router)

  report$ = this.route.data.pipe(map(d => d['report']))
  private get id(): number {
    const r = this.route.snapshot.data['report']
    console.log(r)
    return Number(r?.id ?? 0)
  }
  private nav(nextId: number): void {
    this.router.navigate(['../', nextId], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
    })
  }

  prev(): void {
    this.nav(this.id - 1);
  }

  next(): void {
    this.nav(this.id + 1);
  }

  // for form task

  lastValue: unknown = null;

  onSubmit(f: NgForm) {
    if (f.invalid) return;
    console.log(f)
    this.lastValue = f.value; // { email, password }
    f.resetForm();            // clears values + state
  }

}
