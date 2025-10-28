import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-new1',
  standalone: true,
  imports: [],
  templateUrl: './new1.html',
  styleUrl: './new1.css'
})
export class New1 {
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  id$: Observable<number> = this.route.paramMap.pipe(map(toId))
  tab$: Observable<string> = this.route.queryParamMap.pipe(map(getTab))

  constructor() {
    console.log(this.id$)
    console.log(this.tab$)
    console.log(this.route.snapshot.paramMap)
  }

  goNext(): void {
    this.navigateByButton(1)
  }

  goAhed(): void {
    this.navigateByButton(-1)
  }

  private navigateByButton(direcrtion: number): void {
    const current = toId(this.route.snapshot.paramMap)
    this.router.navigate(['../', current + direcrtion], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
    })
  }
}
function toId(map: ParamMap): number {
  return Number(map.get('id') ?? '0');
}

function getTab(map: ParamMap): string {
  return map.get('tab') ?? 'stats';
}
