// reports.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Report { id: number; title: string; }

@Injectable({ providedIn: 'root' })
export class ReportsService {
  getReport(id: number): Observable<Report> {
    if (Number.isNaN(id) || id <= 0) return throwError(() => new Error('bad id'));
    console.log(id)
    // mock network
    return of({ id, title: `Report #${id}` }).pipe(delay(200));
  }
}
