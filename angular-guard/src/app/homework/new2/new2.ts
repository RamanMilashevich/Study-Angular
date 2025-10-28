import { AfterRenderRef, Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-new2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new2.html',
  styleUrl: './new2.css'
})
export class New2 {
  @Input( {required: true} ) id!: string
  @Input() tab?: string;
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  get idNum(): number {
    return Number(this.id)
  }

  private navigateBy(nextId: number) {
    this.router.navigate(['../', nextId], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
    })
  }

  prev(): void {
    this.navigateBy(this.idNum - 1)
  }

  next(): void {
    this.navigateBy(this.idNum + 1)
  }
  // id$: Observable<number> = this.route.paramMap.pipe(map(toId))
  // tab$: Observable<string> = this.route.queryParamMap.pipe(map(getTab))



  constructor() {
    // console.log(this.id$)
    // console.log(this.tab$)
    // console.log(this.route.snapshot.paramMap)
    // this.id$

    // .subscribe(id => console.log('ID changed:', id));
    console.log(this.idNum)
  }

  // goNext(): void {
  //   this.navigateByButton(1)
  // }

  // goAhed(): void {
  //   this.navigateByButton(-1)
  // }

  // private navigateByButton(direcrtion: number): void {
  //   const current = toId(this.route.snapshot.paramMap)
  //   this.router.navigate(['', current + direcrtion], {
  //     relativeTo: this.route,
  //     queryParamsHandling: 'preserve'
  //   })
  // }
}
function toId(map: ParamMap): number {
  return Number(map.get('id') ?? '0');
}

function getTab(map: ParamMap): string {
  return map.get('tab') ?? 'stats';
}
