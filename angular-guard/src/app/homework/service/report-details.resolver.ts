// report-details.resolver.ts
import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { ReportsService, Report } from './service';

@Injectable({ providedIn: 'root' })
export class ReportDetailsResolver implements Resolve<Report | UrlTree> {
  api = inject(ReportsService)
  router = inject(Router)


  resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<Report | UrlTree> {
    const id = Number(route.paramMap.get('id'));
    console.log(id)
    return this.api.getReport(id).pipe(
      catchError(() => of(this.router.createUrlTree(['/dashboard', 'reports'])))
    );
  }
}
