import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-load-reports-details',
  standalone: true,
  imports: [],
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

}
