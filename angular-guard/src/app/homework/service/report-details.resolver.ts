import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Service } from './service';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportDetailsResolver implements Resolve<Report | UrlTree>{
  private api = inject(Service);
  private router = inject(Router);

  resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<Report | UrlTree> {
    const id = Number(route.paramMap.get('id'));
    return this.api.getReport(id).pipe(
      catchError(() => of(this.router.createUrlTree(['dashboard', 'reports']))
    ))
  }

}
